/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBinding.Location;
import software.amazon.smithy.model.knowledge.HttpBindingIndex;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * TODO.
 *
 * TODO: xmlNamespace
 */
final class XmlShapeSerVisitor extends DocumentShapeSerVisitor {

    XmlShapeSerVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberSerVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberSerVisitor(getContext(), dataSource, Format.DATE_TIME);
    }

    static boolean serializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
    }

    @Override
    protected void serializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        MemberShape member = shape.getMember();
        Model model = context.getModel();
        Shape target = model.expectShape(member.getTarget());

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        writer.write("const collectedNodes: any = [];");

        // Dispatch to the input value provider for any additional handling.
        writer.openBlock("(input || []).map(entry => {", "});", () -> {
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = member.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("member");

            writer.write("const memberNode = new __XmlNode($S);", locationName);
            writer.write("memberNode.addChildNode($L);", target.accept(getMemberVisitor("entry")));
            writer.write("collectedNodes.push(memberNode);");
        });
        writer.write("return collectedNodes;");
    }

    @Override
    protected void serializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format("Cannot serialize Document types on AWS XML protocols, shape: %s.",
                shape.getId()));
    }

    @Override
    protected void serializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        MemberShape valueMember = shape.getValue();
        Model model = context.getModel();
        Shape keyTarget = model.expectShape(valueMember.getTarget());
        Shape valueTarget = model.expectShape(valueMember.getTarget());

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        writer.write("const collectedNodes: any = [];");
        writer.openBlock("Object.keys(input).forEach(key => {", "});", () -> {
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = valueMember.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse("member");

            // Prepare a node for the entry and dispatch for key/value handling.
            writer.write("const entryNode = new __XmlNode($S);", locationName);

            // Create a node for the key.
            writer.write("const keyNode = new __XmlNode('key');");
            writer.write("keyNode.addChildNode($L)", keyTarget.accept(getMemberVisitor("key")));
            writer.write("entryNode.addChildNode(keyNode);");
            // Create a node for the value.
            writer.write("const valueNode = new __XmlNode('value');");
            writer.write("valueNode.addChildNode($L)", valueTarget.accept(getMemberVisitor("input[key]")));
            writer.write("entryNode.addChildNode(valueNode);");

            writer.write("collectedNodes.push(entryNode);");
        });
        writer.write("return collectedNodes;");
    }

    @Override
    protected void serializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");
        writer.write("const bodyNode = new __XmlNode($S);", shape.getId().getName());

        // TODO Clean this up to use a passed context.
        AwsProtocolUtils.writeXmlNamespace(context, shape, "bodyNode");
        // TODO Make this run only if it's an input structure
        if (isShapeOperationPayload(context, shape)) {
            AwsProtocolUtils.writeXmlNamespace(context, context.getService(), "bodyNode");
        }

        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = memberShape.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
            Shape target = model.expectShape(memberShape.getTarget());

            // Generate an if statement to set a child onde if the member is set.
            writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
                if (memberShape.getTrait(XmlAttributeTrait.class).isPresent()) {
                    writer.write("bodyNode.addAttribute($S, $L);", locationName,
                            target.accept(getMemberVisitor("input." + memberName)));
                } else {
                    // TODO Handle flattened targets
                    if (serializationReturnsArray(target)) {
                        boolean isFlat = memberShape.getMemberTrait(model, XmlFlattenedTrait.class).isPresent();
                        // Create a wrapping containerNode if we don't have a flattened list.
                        String targetNode = isFlat ? "bodyNode" : "containerNode";
                        if (!isFlat) {
                            writer.write("const $L = new __XmlNode($S);", targetNode, locationName);
                        }
                        writer.write("const nodes = $L;", target.accept(getMemberVisitor("input." + memberName)));
                        writer.write("nodes.map((node: any) => $L.addChildNode(node));", targetNode);
                        if (!isFlat) {
                            writer.write("bodyNode.addChildNode($L);", targetNode);
                        }
                    } else {
                        writer.write("const memberNode = new __XmlNode($S);", locationName);
                        writer.write("memberNode.addChildNode($L);",
                                target.accept(getMemberVisitor("input." + memberName)));
                        writer.write("bodyNode.addChildNode(memberNode);");
                    }
                }
            });
        });
        writer.write("return bodyNode;");
    }

    @Override
    protected void serializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");

        writer.write("const bodyNode = new __XmlNode($S);", shape.getId().getName());
        AwsProtocolUtils.writeXmlNamespace(context, shape, "bodyNode");

        // Visit over the union type, then get the right serialization for the member.
        writer.openBlock("$L.visit(input, {", "});", shape.getId().getName(), () -> {
            // Use a TreeMap to sort the members.
            Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
            members.forEach((memberName, memberShape) -> {
                // Use the xmlName trait if present, otherwise use the member name.
                String locationName = memberShape.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
                Shape target = model.expectShape(memberShape.getTarget());

                // Dispatch to the input value provider for any additional handling.
                // TODO Handle flattened targets
                if (serializationReturnsArray(target)) {
                    writer.openBlock("$L: value => {", "},", memberName, () -> {
                        boolean isFlat = memberShape.getMemberTrait(model, XmlFlattenedTrait.class).isPresent();
                        // Create a wrapping containerNode if we don't have a flattened list.
                        String targetNode = isFlat ? "bodyNode" : "memberNode";
                        if (!isFlat) {
                            writer.write("const $L = new __XmlNode($S);", targetNode, locationName);
                        }
                        writer.write("const nodes = $L;", target.accept(getMemberVisitor("value")));
                        writer.write("nodes.map((node: any) => $L.addChildNode(node));");
                        if (!isFlat) {
                            writer.write("bodyNode.addChildNode($L);", targetNode);
                        }
                    });
                } else {
                    writer.write("$L: value => bodyNode.addChildNode(new __XmlNode($S).addChildNode($L)),",
                            memberName, locationName, target.accept(getMemberVisitor("value")));
                }
            });
            // TODO Handle unknown property name?
            writer.write("_: value => value");
        });
        writer.write("return bodyNode;");
    }

    private boolean isShapeOperationPayload(GenerationContext context, StructureShape shape) {
        OperationIndex operationIndex = context.getModel().getKnowledge(OperationIndex.class);

        return context.getService().getOperations().stream()
                .anyMatch(operationId ->  operationIndex.getInput(operationId)
                        .map(input -> isShapeInputPayload(context, operationId, input, shape))
                        .orElse(false));
    }

    private boolean isShapeInputPayload(
            GenerationContext context,
            ShapeId operationId,
            StructureShape output,
            StructureShape shape
    ) {
        HttpBindingIndex httpBindingIndex = context.getModel().getKnowledge(HttpBindingIndex.class);

        return output.getAllMembers().values().stream()
                .filter(memberShape -> memberShape.getTarget().equals(shape.getId()))
                .anyMatch(memberShape -> {
                    List<HttpBinding> bindings = httpBindingIndex.getRequestBindings(operationId, Location.PAYLOAD);
                    if (bindings.isEmpty()) {
                        return false;
                    }
                    return bindings.get(0).getMember().getTarget().equals(shape.getId());
                });
    }
}
