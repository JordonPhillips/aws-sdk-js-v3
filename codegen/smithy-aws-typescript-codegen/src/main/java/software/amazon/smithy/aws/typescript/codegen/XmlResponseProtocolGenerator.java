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
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.XmlAttributeTrait;
import software.amazon.smithy.model.traits.XmlFlattenedTrait;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;

/**
 * TODO.
 *
 * @see XmlShapeDeserVisitor
 * @see XmlMemberDeserVisitor
 * @see AwsProtocolUtils
 * @see <a href="https://awslabs.github.io/smithy/spec/http.html">Smithy HTTP protocol bindings.</a>
 */
abstract class XmlResponseProtocolGenerator extends HttpBindingProtocolGenerator {

    @Override
    protected void generateDocumentBodyShapeDeserializers(GenerationContext context, Set<Shape> shapes) {
        AwsProtocolUtils.generateDocumentBodyShapeSerde(context, shapes, new XmlShapeDeserVisitor(context));
    }

    @Override
    public void generateSharedComponents(GenerationContext context) {
        super.generateSharedComponents(context);

        AwsProtocolUtils.generateXmlParseBody(context);

        TypeScriptWriter writer = context.getWriter();

        // TODO Write error parsing mechanism.
        SymbolReference responseType = getApplicationProtocol().getResponseType();
        writer.openBlock("const loadRestXmlErrorCode = (\n"
                       + "  output: $T,\n"
                       + "  data: any\n"
                       + "): string => {", "};", responseType, () -> {
            writer.write("return 'NotFound';");
        });

        // TODO Maybe need to override metadata grabbing?
        // If so - remove x-amz-request-id from smithy-typescript repo?
    }

    @Override
    protected void writeErrorCodeParser(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        writer.write("errorCode = loadRestXmlErrorCode(output, data);");
    }

    @Override
    protected void deserializeOutputDocument(
            GenerationContext context,
            Shape operationOrError,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();
        Model model = context.getModel();

        for (HttpBinding binding : documentBindings) {
            MemberShape memberShape = binding.getMember();
            // The name of the member to get from the output shape.
            String memberName = symbolProvider.toMemberName(memberShape);
            // Use the xmlName trait if present, otherwise use the member name.
            String locationName = memberShape.getMemberTrait(model, XmlNameTrait.class)
                    .map(XmlNameTrait::getValue)
                    .orElse(memberName);
            Shape target = model.getShape(memberShape.getTarget()).get();

            StringBuilder sourceBuilder = new StringBuilder("data");
            memberShape.getTrait(XmlAttributeTrait.class).ifPresent(t -> sourceBuilder.append("['_Attribs']"));
            sourceBuilder.append("['").append(locationName).append("']");
            // TODO Handle flattened targets
            // Go in to a specialized element for unflattened aggregates.
            if (XmlShapeDeserVisitor.deserializationReturnsArray(target)
                    && !memberShape.getMemberTrait(model, XmlFlattenedTrait.class).isPresent()) {
                sourceBuilder.append("['").append((target.isMapShape() ? "entry" : "member")).append("']");
            }

            String source = sourceBuilder.toString();
            writer.openBlock("if ($L !== undefined) {", "}", source, () -> {
                writer.write("contents.$L = $L;", memberName, target.accept(getMemberDeserVisitor(context, source)));
            });
        }
    }

    private DocumentMemberDeserVisitor getMemberDeserVisitor(GenerationContext context, String dataSource) {
        return new XmlMemberDeserVisitor(context, dataSource, getDocumentTimestampFormat());
    }
}
