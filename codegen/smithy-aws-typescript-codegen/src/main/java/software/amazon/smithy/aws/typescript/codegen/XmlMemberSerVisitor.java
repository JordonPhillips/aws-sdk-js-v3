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

import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.shapes.BigDecimalShape;
import software.amazon.smithy.model.shapes.BigIntegerShape;
import software.amazon.smithy.model.shapes.BlobShape;
import software.amazon.smithy.model.shapes.BooleanShape;
import software.amazon.smithy.model.shapes.ByteShape;
import software.amazon.smithy.model.shapes.DoubleShape;
import software.amazon.smithy.model.shapes.FloatShape;
import software.amazon.smithy.model.shapes.IntegerShape;
import software.amazon.smithy.model.shapes.LongShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShortShape;
import software.amazon.smithy.model.shapes.StringShape;
import software.amazon.smithy.model.shapes.TimestampShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * TODO.
 */
final class XmlMemberSerVisitor extends DocumentMemberSerVisitor {
    // TODO Cleanup to parent class?
    private GenerationContext context;

    /**
     * @inheritDoc
     */
    XmlMemberSerVisitor(GenerationContext context, String dataSource, Format defaultTimestampFormat) {
        super(context, dataSource, defaultTimestampFormat);
        this.context = context;
    }

    @Override
    public String blobShape(BlobShape shape) {
        return getAsXmlText(super.blobShape(shape));
    }

    @Override
    public String stringShape(StringShape shape) {
        return getAsXmlText(super.stringShape(shape));
    }

    @Override
    public String timestampShape(TimestampShape shape) {
        return getAsXmlText(super.timestampShape(shape));
    }

    @Override
    public String booleanShape(BooleanShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String byteShape(ByteShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String shortShape(ShortShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String integerShape(IntegerShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String longShape(LongShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String floatShape(FloatShape shape) {
        return serializeSimpleScalar();
    }

    @Override
    public String doubleShape(DoubleShape shape) {
        return serializeSimpleScalar();
    }

    private String serializeSimpleScalar() {
        return getAsXmlText("String(" + getDataSource() + ")");
    }

    private String getAsXmlText(String dataSource) {
        context.getWriter().addImport("XmlText", "__XmlText", "@aws-sdk/xml-builder");
        return "new __XmlText(" + dataSource + ")";
    }

    @Override
    public String bigDecimalShape(BigDecimalShape shape) {
        // Fail instead of losing precision through Number.
        return unsupportedShape(shape);
    }

    @Override
    public String bigIntegerShape(BigIntegerShape shape) {
        // Fail instead of losing precision through Number.
        return unsupportedShape(shape);
    }

    private String unsupportedShape(Shape shape) {
        throw new CodegenException(String.format("Cannot serialize shape type %s on protocol, shape: %s.",
                shape.getType(), shape.getId()));
    }
}
