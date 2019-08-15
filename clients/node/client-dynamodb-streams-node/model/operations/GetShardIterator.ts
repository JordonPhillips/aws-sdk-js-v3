import { GetShardIteratorInput } from "../shapes/GetShardIteratorInput";
import { GetShardIteratorOutput } from "../shapes/GetShardIteratorOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { TrimmedDataAccessException } from "../shapes/TrimmedDataAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetShardIterator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetShardIterator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetShardIteratorInput
  },
  output: {
    shape: GetShardIteratorOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    },
    {
      shape: TrimmedDataAccessException
    }
  ]
};
