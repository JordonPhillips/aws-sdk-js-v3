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
import java.util.Set;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeIndex;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;

/**
 * TODO.
 *
 * TODO: xmlNamespace
 *
 * @see XmlShapeSerVisitor
 * @see XmlMemberSerVisitor
 * @see AwsProtocolUtils
 * @see <a href="https://awslabs.github.io/smithy/spec/http.html">Smithy HTTP protocol bindings.</a>
 */
final class AwsRestXml extends XmlResponseProtocolGenerator {

    @Override
    protected String getDocumentContentType() {
        return "application/xml";
    }

    @Override
    protected Format getDocumentTimestampFormat() {
        return Format.DATE_TIME;
    }

    @Override
    public String getName() {
        return "aws.rest-xml";
    }

    @Override
    protected void generateDocumentBodyShapeSerializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new XmlShapeSerVisitor(context));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);

        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.XML_BUILDER);
    }

    @Override
    protected void writeDefaultHeaders(GenerationContext context, OperationShape operation) {
        super.writeDefaultHeaders(context, operation);
        AwsProtocolUtils.generateUnsignedPayloadSigV4Header(context, operation);
    }

    @Override
    protected void serializeInputDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();
        ShapeIndex shapeIndex = context.getModel().getShapeIndex();

        writer.addImport("XmlNode", "__XmlNode", "@aws-sdk/xml-builder");
        writer.write("const bodyNode = new __XmlNode($S);", operation.getId().getName());

        // Add XMLNS for top level structures
        AwsProtocolUtils.writeXmlNamespace(context, context.getService(), "bodyNode");

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(memberShape);
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = memberShape.getTrait(XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            Shape target = shapeIndex.getShape(memberShape.getTarget()).get();

            // Generate an if statement to set a child node if the member is set.
            writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
                String memberSer = target.accept(getMemberSerVisitor(context, "input." + memberName));
                if (memberShape.getTrait(XmlAttributeTrait.class).isPresent()) {
                    writer.write("bodyNode.addAttribute($S, $L);", locationName, memberSer);
                } else {
                    // TODO Handle flattened targets
                    if (XmlShapeSerVisitor.serializationReturnsArray(target)) {
                        boolean isFlat = memberShape.getMemberTrait(shapeIndex, XmlFlattenedTrait.class).isPresent();
                        // Create a wrapping containerNode if we don't have a flattened list.
                        String targetNode = isFlat ? "bodyNode" : "containerNode";
                        if (!isFlat) {
                            writer.write("const $L = new __XmlNode($S);", targetNode, locationName);
                        }
                        writer.write("const nodes = $L;", memberSer);
                        writer.write("nodes.map((node: any) => $L.addChildNode(node));", targetNode);
                        if (!isFlat) {
                            writer.write("bodyNode.addChildNode($L);", targetNode);
                        }
                    } else {
                        writer.write("const memberNode = new __XmlNode($S);", locationName);
                        writer.write("memberNode.addChildNode($L);", memberSer);
                        writer.write("bodyNode.addChildNode(memberNode);");
                    }
                }
            });
        }
        writer.write("body = bodyNode.toString()");
    }

    private DocumentMemberSerVisitor getMemberSerVisitor(GenerationContext context, String dataSource) {
        return new XmlMemberSerVisitor(context, dataSource, getDocumentTimestampFormat());
    }
}
