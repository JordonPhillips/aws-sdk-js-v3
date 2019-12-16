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

import java.util.Map;
import java.util.TreeMap;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

final class XmlShapeDeserVisitor extends DocumentShapeDeserVisitor {

    XmlShapeDeserVisitor(GenerationContext context) {
        super(context);
    }

    private DocumentMemberDeserVisitor getMemberVisitor(String dataSource) {
        return new XmlMemberDeserVisitor(getContext(), dataSource, TimestampFormatTrait.Format.DATE_TIME);
    }

    public static boolean deserializationReturnsArray(Shape shape) {
        return (shape instanceof CollectionShape) || (shape instanceof MapShape);
    }

    @Override
    protected void deserializeCollection(GenerationContext context, CollectionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getMember().getTarget());

        // Dispatch to the output value provider for any additional handling.
        writer.openBlock("return (output || []).map((entry: any) =>", ");", () -> {
            writer.write(target.accept(getMemberVisitor("entry")));
        });
    }

    @Override
    protected void deserializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(String.format("Cannot deserialize Document types on AWS XML protocols, shape: %s.",
                shape.getId()));
    }

    @Override
    protected void deserializeMap(GenerationContext context, MapShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Shape target = context.getModel().expectShape(shape.getValue().getTarget());

        // Get the right serialization for each entry in the map. Undefined
        // outputs won't have this deserializer invoked.
        writer.write("let mapParams: any = {};");
        writer.openBlock("Object.keys(output).forEach(key => {", "});", () -> {
            // Dispatch to the output value provider for any additional handling.
            writer.write("mapParams[key] = $L;", target.accept(getMemberVisitor("output[key]")));
        });
        writer.write("return mapParams;");
    }

    @Override
    protected void deserializeStructure(GenerationContext context, StructureShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        // Prepare the document contents structure.
        // Use a TreeMap to sort the members.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        writer.openBlock("let contents: any = {", "};", () -> {
            writer.write("__type: $S,", shape.getId().getName());
            // Set all the members to undefined to meet type constraints.
            members.forEach((memberName, memberShape) -> writer.write("$L: undefined,", memberName));
        });
        members.forEach((memberName, memberShape) -> {
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = memberShape.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
            Shape target = model.expectShape(memberShape.getTarget());

            StringBuilder sourceBuilder = new StringBuilder("output");
            memberShape.getTrait(XmlAttributeTrait.class).ifPresent(t -> sourceBuilder.append("['_Attribs']"));
            sourceBuilder.append("['").append(locationName).append("']");
            // TODO Handle flattened targets
            // Go in to a specialized element for unflattened aggregates
            if (deserializationReturnsArray(target)
                    && !memberShape.getMemberTrait(model, XmlFlattenedTrait.class).isPresent()) {
                sourceBuilder.append("['").append((target.isMapShape() ? "entry" : "member")).append("']");
            }

            String source = sourceBuilder.toString();
            writer.openBlock("if ($L !== undefined) {", "}", source, () -> {
                writer.write("contents.$L = $L;", memberName, target.accept(getMemberVisitor(source)));
            });
        });
        writer.write("return contents;");
    }

    @Override
    protected void deserializeUnion(GenerationContext context, UnionShape shape) {
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        // Check for any known union members and return when we find one.
        Map<String, MemberShape> members = new TreeMap<>(shape.getAllMembers());
        members.forEach((memberName, memberShape) -> {
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = memberShape.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
            Shape target = model.expectShape(memberShape.getTarget());

            // TODO Duplicate outsource
            StringBuilder sourceBuilder = new StringBuilder("output");
            memberShape.getTrait(XmlAttributeTrait.class).ifPresent(t -> sourceBuilder.append("['_Attribs']"));
            sourceBuilder.append("['").append(locationName).append("']");
            // TODO Handle flattened targets
            // Go in to a specialized element for unflattened aggregates
            if (deserializationReturnsArray(target)
                    && !memberShape.getMemberTrait(model, XmlFlattenedTrait.class).isPresent()) {
                sourceBuilder.append("['").append((target.isMapShape() ? "entry" : "member")).append("']");
            }

            String source = sourceBuilder.toString();
            writer.openBlock("if ($L !== undefined) {", "}", source, () -> {
                writer.openBlock("return {", "};", () -> {
                    // Dispatch to the output value provider for any additional handling.
                    writer.write("$L: $L", memberName, target.accept(getMemberVisitor(source)));
                });
            });
        });
        // Or write to the unknown member the element in the output.
        writer.write("const key = Object.keys(output)[0];");
        writer.write("return { $$unknown: [key, output[key]] };");
    }
}
