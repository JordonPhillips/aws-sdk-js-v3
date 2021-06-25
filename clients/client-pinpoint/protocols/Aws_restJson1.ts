import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "../commands/CreateEmailTemplateCommand";
import { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "../commands/CreateExportJobCommand";
import { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "../commands/CreateImportJobCommand";
import { CreateJourneyCommandInput, CreateJourneyCommandOutput } from "../commands/CreateJourneyCommand";
import { CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput } from "../commands/CreatePushTemplateCommand";
import {
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
} from "../commands/CreateRecommenderConfigurationCommand";
import { CreateSegmentCommandInput, CreateSegmentCommandOutput } from "../commands/CreateSegmentCommand";
import { CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput } from "../commands/CreateSmsTemplateCommand";
import {
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
} from "../commands/CreateVoiceTemplateCommand";
import { DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput } from "../commands/DeleteAdmChannelCommand";
import { DeleteApnsChannelCommandInput, DeleteApnsChannelCommandOutput } from "../commands/DeleteApnsChannelCommand";
import {
  DeleteApnsSandboxChannelCommandInput,
  DeleteApnsSandboxChannelCommandOutput,
} from "../commands/DeleteApnsSandboxChannelCommand";
import {
  DeleteApnsVoipChannelCommandInput,
  DeleteApnsVoipChannelCommandOutput,
} from "../commands/DeleteApnsVoipChannelCommand";
import {
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
} from "../commands/DeleteApnsVoipSandboxChannelCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import { DeleteBaiduChannelCommandInput, DeleteBaiduChannelCommandOutput } from "../commands/DeleteBaiduChannelCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import { DeleteEmailChannelCommandInput, DeleteEmailChannelCommandOutput } from "../commands/DeleteEmailChannelCommand";
import {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "../commands/DeleteEmailTemplateCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "../commands/DeleteEventStreamCommand";
import { DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput } from "../commands/DeleteGcmChannelCommand";
import { DeleteJourneyCommandInput, DeleteJourneyCommandOutput } from "../commands/DeleteJourneyCommand";
import { DeletePushTemplateCommandInput, DeletePushTemplateCommandOutput } from "../commands/DeletePushTemplateCommand";
import {
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
} from "../commands/DeleteRecommenderConfigurationCommand";
import { DeleteSegmentCommandInput, DeleteSegmentCommandOutput } from "../commands/DeleteSegmentCommand";
import { DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput } from "../commands/DeleteSmsChannelCommand";
import { DeleteSmsTemplateCommandInput, DeleteSmsTemplateCommandOutput } from "../commands/DeleteSmsTemplateCommand";
import {
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
} from "../commands/DeleteUserEndpointsCommand";
import { DeleteVoiceChannelCommandInput, DeleteVoiceChannelCommandOutput } from "../commands/DeleteVoiceChannelCommand";
import {
  DeleteVoiceTemplateCommandInput,
  DeleteVoiceTemplateCommandOutput,
} from "../commands/DeleteVoiceTemplateCommand";
import { GetAdmChannelCommandInput, GetAdmChannelCommandOutput } from "../commands/GetAdmChannelCommand";
import { GetApnsChannelCommandInput, GetApnsChannelCommandOutput } from "../commands/GetApnsChannelCommand";
import {
  GetApnsSandboxChannelCommandInput,
  GetApnsSandboxChannelCommandOutput,
} from "../commands/GetApnsSandboxChannelCommand";
import { GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput } from "../commands/GetApnsVoipChannelCommand";
import {
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
} from "../commands/GetApnsVoipSandboxChannelCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "../commands/GetAppCommand";
import {
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
} from "../commands/GetApplicationDateRangeKpiCommand";
import {
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
} from "../commands/GetApplicationSettingsCommand";
import { GetAppsCommandInput, GetAppsCommandOutput } from "../commands/GetAppsCommand";
import { GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput } from "../commands/GetBaiduChannelCommand";
import {
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
} from "../commands/GetCampaignActivitiesCommand";
import { GetCampaignCommandInput, GetCampaignCommandOutput } from "../commands/GetCampaignCommand";
import {
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
} from "../commands/GetCampaignDateRangeKpiCommand";
import { GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput } from "../commands/GetCampaignVersionCommand";
import {
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "../commands/GetCampaignVersionsCommand";
import { GetCampaignsCommandInput, GetCampaignsCommandOutput } from "../commands/GetCampaignsCommand";
import { GetChannelsCommandInput, GetChannelsCommandOutput } from "../commands/GetChannelsCommand";
import { GetEmailChannelCommandInput, GetEmailChannelCommandOutput } from "../commands/GetEmailChannelCommand";
import { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "../commands/GetEmailTemplateCommand";
import { GetEndpointCommandInput, GetEndpointCommandOutput } from "../commands/GetEndpointCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "../commands/GetEventStreamCommand";
import { GetExportJobCommandInput, GetExportJobCommandOutput } from "../commands/GetExportJobCommand";
import { GetExportJobsCommandInput, GetExportJobsCommandOutput } from "../commands/GetExportJobsCommand";
import { GetGcmChannelCommandInput, GetGcmChannelCommandOutput } from "../commands/GetGcmChannelCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import { GetImportJobsCommandInput, GetImportJobsCommandOutput } from "../commands/GetImportJobsCommand";
import { GetJourneyCommandInput, GetJourneyCommandOutput } from "../commands/GetJourneyCommand";
import {
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
} from "../commands/GetJourneyDateRangeKpiCommand";
import {
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
} from "../commands/GetJourneyExecutionActivityMetricsCommand";
import {
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
} from "../commands/GetJourneyExecutionMetricsCommand";
import { GetPushTemplateCommandInput, GetPushTemplateCommandOutput } from "../commands/GetPushTemplateCommand";
import {
  GetRecommenderConfigurationCommandInput,
  GetRecommenderConfigurationCommandOutput,
} from "../commands/GetRecommenderConfigurationCommand";
import {
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
} from "../commands/GetRecommenderConfigurationsCommand";
import { GetSegmentCommandInput, GetSegmentCommandOutput } from "../commands/GetSegmentCommand";
import {
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
} from "../commands/GetSegmentExportJobsCommand";
import {
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
} from "../commands/GetSegmentImportJobsCommand";
import { GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput } from "../commands/GetSegmentVersionCommand";
import { GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput } from "../commands/GetSegmentVersionsCommand";
import { GetSegmentsCommandInput, GetSegmentsCommandOutput } from "../commands/GetSegmentsCommand";
import { GetSmsChannelCommandInput, GetSmsChannelCommandOutput } from "../commands/GetSmsChannelCommand";
import { GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput } from "../commands/GetSmsTemplateCommand";
import { GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput } from "../commands/GetUserEndpointsCommand";
import { GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput } from "../commands/GetVoiceChannelCommand";
import { GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput } from "../commands/GetVoiceTemplateCommand";
import { ListJourneysCommandInput, ListJourneysCommandOutput } from "../commands/ListJourneysCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "../commands/PhoneNumberValidateCommand";
import { PutEventStreamCommandInput, PutEventStreamCommandOutput } from "../commands/PutEventStreamCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { RemoveAttributesCommandInput, RemoveAttributesCommandOutput } from "../commands/RemoveAttributesCommand";
import { SendMessagesCommandInput, SendMessagesCommandOutput } from "../commands/SendMessagesCommand";
import { SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput } from "../commands/SendUsersMessagesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput } from "../commands/UpdateAdmChannelCommand";
import { UpdateApnsChannelCommandInput, UpdateApnsChannelCommandOutput } from "../commands/UpdateApnsChannelCommand";
import {
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
} from "../commands/UpdateApnsSandboxChannelCommand";
import {
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
} from "../commands/UpdateApnsVoipChannelCommand";
import {
  UpdateApnsVoipSandboxChannelCommandInput,
  UpdateApnsVoipSandboxChannelCommandOutput,
} from "../commands/UpdateApnsVoipSandboxChannelCommand";
import {
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "../commands/UpdateApplicationSettingsCommand";
import { UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput } from "../commands/UpdateBaiduChannelCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "../commands/UpdateCampaignCommand";
import { UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput } from "../commands/UpdateEmailChannelCommand";
import {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "../commands/UpdateEmailTemplateCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import {
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
} from "../commands/UpdateEndpointsBatchCommand";
import { UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput } from "../commands/UpdateGcmChannelCommand";
import { UpdateJourneyCommandInput, UpdateJourneyCommandOutput } from "../commands/UpdateJourneyCommand";
import { UpdateJourneyStateCommandInput, UpdateJourneyStateCommandOutput } from "../commands/UpdateJourneyStateCommand";
import { UpdatePushTemplateCommandInput, UpdatePushTemplateCommandOutput } from "../commands/UpdatePushTemplateCommand";
import {
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
} from "../commands/UpdateRecommenderConfigurationCommand";
import { UpdateSegmentCommandInput, UpdateSegmentCommandOutput } from "../commands/UpdateSegmentCommand";
import { UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput } from "../commands/UpdateSmsChannelCommand";
import { UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput } from "../commands/UpdateSmsTemplateCommand";
import {
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
} from "../commands/UpdateTemplateActiveVersionCommand";
import { UpdateVoiceChannelCommandInput, UpdateVoiceChannelCommandOutput } from "../commands/UpdateVoiceChannelCommand";
import {
  UpdateVoiceTemplateCommandInput,
  UpdateVoiceTemplateCommandOutput,
} from "../commands/UpdateVoiceTemplateCommand";
import {
  ADMChannelRequest,
  ADMChannelResponse,
  ADMMessage,
  APNSChannelRequest,
  APNSChannelResponse,
  APNSMessage,
  APNSPushNotificationTemplate,
  APNSSandboxChannelRequest,
  APNSSandboxChannelResponse,
  APNSVoipChannelRequest,
  APNSVoipChannelResponse,
  APNSVoipSandboxChannelRequest,
  APNSVoipSandboxChannelResponse,
  ActivitiesResponse,
  Activity,
  ActivityResponse,
  AddressConfiguration,
  AndroidPushNotificationTemplate,
  ApplicationDateRangeKpiResponse,
  ApplicationResponse,
  ApplicationSettingsResource,
  ApplicationsResponse,
  AttributeDimension,
  AttributesResource,
  BadRequestException,
  BaiduChannelRequest,
  BaiduChannelResponse,
  BaiduMessage,
  BaseKpiResult,
  CampaignCustomMessage,
  CampaignDateRangeKpiResponse,
  CampaignEmailMessage,
  CampaignEventFilter,
  CampaignHook,
  CampaignLimits,
  CampaignResponse,
  CampaignSmsMessage,
  CampaignState,
  CampaignsResponse,
  ChannelResponse,
  ChannelsResponse,
  Condition,
  ConditionalSplitActivity,
  ConflictException,
  CreateApplicationRequest,
  CreateRecommenderConfigurationShape,
  CreateTemplateMessageBody,
  CustomDeliveryConfiguration,
  CustomMessageActivity,
  DefaultMessage,
  DefaultPushNotificationMessage,
  DefaultPushNotificationTemplate,
  DirectMessageConfiguration,
  EmailChannelRequest,
  EmailChannelResponse,
  EmailMessage,
  EmailMessageActivity,
  EmailTemplateRequest,
  EmailTemplateResponse,
  EndpointBatchItem,
  EndpointBatchRequest,
  EndpointDemographic,
  EndpointItemResponse,
  EndpointLocation,
  EndpointMessageResult,
  EndpointRequest,
  EndpointResponse,
  EndpointSendConfiguration,
  EndpointUser,
  EndpointsResponse,
  Event,
  EventCondition,
  EventDimensions,
  EventFilter,
  EventItemResponse,
  EventStartCondition,
  EventStream,
  EventsBatch,
  EventsRequest,
  EventsResponse,
  ExportJobRequest,
  ExportJobResource,
  ExportJobResponse,
  ExportJobsResponse,
  ForbiddenException,
  GCMChannelRequest,
  GCMChannelResponse,
  GCMMessage,
  GPSCoordinates,
  GPSPointDimension,
  HoldoutActivity,
  ImportJobRequest,
  ImportJobResource,
  ImportJobResponse,
  ImportJobsResponse,
  InternalServerErrorException,
  ItemResponse,
  JourneyCustomMessage,
  JourneyEmailMessage,
  JourneyLimits,
  JourneyPushMessage,
  JourneyResponse,
  JourneySMSMessage,
  JourneySchedule,
  Message,
  MessageBody,
  MessageConfiguration,
  MethodNotAllowedException,
  MetricDimension,
  MultiConditionalBranch,
  MultiConditionalSplitActivity,
  NotFoundException,
  PayloadTooLargeException,
  PublicEndpoint,
  PushMessageActivity,
  PushNotificationTemplateRequest,
  QuietTime,
  RandomSplitActivity,
  RandomSplitEntry,
  RawEmail,
  RecencyDimension,
  RecommenderConfigurationResponse,
  ResultRow,
  ResultRowValue,
  SMSChannelResponse,
  SMSMessage,
  SMSMessageActivity,
  SMSTemplateRequest,
  Schedule,
  SegmentBehaviors,
  SegmentCondition,
  SegmentDemographics,
  SegmentDimensions,
  SegmentGroup,
  SegmentGroupList,
  SegmentImportResource,
  SegmentLocation,
  SegmentReference,
  SegmentResponse,
  Session,
  SetDimension,
  SimpleCondition,
  SimpleEmail,
  SimpleEmailPart,
  StartCondition,
  Template,
  TemplateConfiguration,
  TooManyRequestsException,
  TreatmentResource,
  VoiceChannelResponse,
  VoiceMessage,
  VoiceTemplateRequest,
  WaitActivity,
  WaitTime,
  WriteCampaignRequest,
  WriteJourneyRequest,
  WriteSegmentRequest,
  WriteTreatmentResource,
  __EndpointTypesElement,
} from "../models/models_0";
import {
  JourneyDateRangeKpiResponse,
  JourneyExecutionActivityMetricsResponse,
  JourneyExecutionMetricsResponse,
  JourneyStateRequest,
  JourneysResponse,
  ListRecommenderConfigurationsResponse,
  MessageRequest,
  MessageResponse,
  MessageResult,
  NumberValidateRequest,
  NumberValidateResponse,
  PushNotificationTemplateResponse,
  SMSChannelRequest,
  SMSTemplateResponse,
  SegmentsResponse,
  SendUsersMessageRequest,
  SendUsersMessageResponse,
  TagsModel,
  TemplateActiveVersionRequest,
  TemplateResponse,
  TemplateVersionResponse,
  TemplateVersionsResponse,
  TemplatesResponse,
  UpdateAttributesRequest,
  UpdateRecommenderConfigurationShape,
  VoiceChannelRequest,
  VoiceTemplateResponse,
  WriteApplicationSettingsRequest,
  WriteEventStream,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps";
  let body: any;
  if (input.CreateApplicationRequest !== undefined) {
    body = serializeAws_restJson1CreateApplicationRequest(input.CreateApplicationRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateEmailTemplateCommand = async (
  input: CreateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateExportJobCommand = async (
  input: CreateExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ExportJobRequest !== undefined) {
    body = serializeAws_restJson1ExportJobRequest(input.ExportJobRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateImportJobCommand = async (
  input: CreateImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ImportJobRequest !== undefined) {
    body = serializeAws_restJson1ImportJobRequest(input.ImportJobRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateJourneyCommand = async (
  input: CreateJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreatePushTemplateCommand = async (
  input: CreatePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRecommenderConfigurationCommand = async (
  input: CreateRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/recommenders";
  let body: any;
  if (input.CreateRecommenderConfiguration !== undefined) {
    body = serializeAws_restJson1CreateRecommenderConfigurationShape(input.CreateRecommenderConfiguration, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSegmentCommand = async (
  input: CreateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSmsTemplateCommand = async (
  input: CreateSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateVoiceTemplateCommand = async (
  input: CreateVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAdmChannelCommand = async (
  input: DeleteAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteApnsChannelCommand = async (
  input: DeleteApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteApnsSandboxChannelCommand = async (
  input: DeleteApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteApnsVoipChannelCommand = async (
  input: DeleteApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (
  input: DeleteApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteBaiduChannelCommand = async (
  input: DeleteBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEmailChannelCommand = async (
  input: DeleteEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEmailTemplateCommand = async (
  input: DeleteEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEventStreamCommand = async (
  input: DeleteEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteGcmChannelCommand = async (
  input: DeleteGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteJourneyCommand = async (
  input: DeleteJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeletePushTemplateCommand = async (
  input: DeletePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteRecommenderConfigurationCommand = async (
  input: DeleteRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSegmentCommand = async (
  input: DeleteSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSmsChannelCommand = async (
  input: DeleteSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSmsTemplateCommand = async (
  input: DeleteSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteUserEndpointsCommand = async (
  input: DeleteUserEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceChannelCommand = async (
  input: DeleteVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceTemplateCommand = async (
  input: DeleteVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetAdmChannelCommand = async (
  input: GetAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApnsChannelCommand = async (
  input: GetApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApnsSandboxChannelCommand = async (
  input: GetApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApnsVoipChannelCommand = async (
  input: GetApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (
  input: GetApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAppCommand = async (
  input: GetAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApplicationDateRangeKpiCommand = async (
  input: GetApplicationDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  const query: any = {
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetApplicationSettingsCommand = async (
  input: GetApplicationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/settings";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAppsCommand = async (
  input: GetAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps";
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBaiduChannelCommand = async (
  input: GetBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCampaignCommand = async (
  input: GetCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCampaignActivitiesCommand = async (
  input: GetCampaignActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetCampaignDateRangeKpiCommand = async (
  input: GetCampaignDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  const query: any = {
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetCampaignsCommand = async (
  input: GetCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetCampaignVersionCommand = async (
  input: GetCampaignVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCampaignVersionsCommand = async (
  input: GetCampaignVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetChannelsCommand = async (
  input: GetChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEmailChannelCommand = async (
  input: GetEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEmailTemplateCommand = async (
  input: GetEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetEndpointCommand = async (
  input: GetEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEventStreamCommand = async (
  input: GetEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetExportJobCommand = async (
  input: GetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export/{JobId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetExportJobsCommand = async (
  input: GetExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetGcmChannelCommand = async (
  input: GetGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetImportJobCommand = async (
  input: GetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import/{JobId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetImportJobsCommand = async (
  input: GetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetJourneyCommand = async (
  input: GetJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetJourneyDateRangeKpiCommand = async (
  input: GetJourneyDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  const query: any = {
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (
  input: GetJourneyExecutionActivityMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyActivityId !== undefined) {
    const labelValue: string = input.JourneyActivityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyActivityId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyActivityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyActivityId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetJourneyExecutionMetricsCommand = async (
  input: GetJourneyExecutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetPushTemplateCommand = async (
  input: GetPushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetRecommenderConfigurationCommand = async (
  input: GetRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRecommenderConfigurationsCommand = async (
  input: GetRecommenderConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/recommenders";
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSegmentCommand = async (
  input: GetSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSegmentExportJobsCommand = async (
  input: GetSegmentExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSegmentImportJobsCommand = async (
  input: GetSegmentImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSegmentsCommand = async (
  input: GetSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSegmentVersionCommand = async (
  input: GetSegmentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSegmentVersionsCommand = async (
  input: GetSegmentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSmsChannelCommand = async (
  input: GetSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSmsTemplateCommand = async (
  input: GetSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetUserEndpointsCommand = async (
  input: GetUserEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceChannelCommand = async (
  input: GetVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceTemplateCommand = async (
  input: GetVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListJourneysCommand = async (
  input: ListJourneysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates";
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.TemplateType !== undefined && { "template-type": input.TemplateType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTemplateVersionsCommand = async (
  input: ListTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/versions";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  if (input.TemplateType !== undefined) {
    const labelValue: string = input.TemplateType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateType.");
    }
    resolvedPath = resolvedPath.replace("{TemplateType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateType.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PhoneNumberValidateCommand = async (
  input: PhoneNumberValidateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/phone/number/validate";
  let body: any;
  if (input.NumberValidateRequest !== undefined) {
    body = serializeAws_restJson1NumberValidateRequest(input.NumberValidateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/events";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EventsRequest !== undefined) {
    body = serializeAws_restJson1EventsRequest(input.EventsRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEventStreamCommand = async (
  input: PutEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteEventStream !== undefined) {
    body = serializeAws_restJson1WriteEventStream(input.WriteEventStream, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RemoveAttributesCommand = async (
  input: RemoveAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/attributes/{AttributeType}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.AttributeType !== undefined) {
    const labelValue: string = input.AttributeType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttributeType.");
    }
    resolvedPath = resolvedPath.replace("{AttributeType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttributeType.");
  }
  let body: any;
  if (input.UpdateAttributesRequest !== undefined) {
    body = serializeAws_restJson1UpdateAttributesRequest(input.UpdateAttributesRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SendMessagesCommand = async (
  input: SendMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/messages";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.MessageRequest !== undefined) {
    body = serializeAws_restJson1MessageRequest(input.MessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SendUsersMessagesCommand = async (
  input: SendUsersMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/users-messages";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.SendUsersMessageRequest !== undefined) {
    body = serializeAws_restJson1SendUsersMessageRequest(input.SendUsersMessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  if (input.TagsModel !== undefined) {
    body = serializeAws_restJson1TagsModel(input.TagsModel, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAdmChannelCommand = async (
  input: UpdateAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ADMChannelRequest !== undefined) {
    body = serializeAws_restJson1ADMChannelRequest(input.ADMChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApnsChannelCommand = async (
  input: UpdateApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSChannelRequest(input.APNSChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApnsSandboxChannelCommand = async (
  input: UpdateApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSSandboxChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSSandboxChannelRequest(input.APNSSandboxChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApnsVoipChannelCommand = async (
  input: UpdateApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSVoipChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSVoipChannelRequest(input.APNSVoipChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (
  input: UpdateApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSVoipSandboxChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSVoipSandboxChannelRequest(input.APNSVoipSandboxChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApplicationSettingsCommand = async (
  input: UpdateApplicationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/settings";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteApplicationSettingsRequest !== undefined) {
    body = serializeAws_restJson1WriteApplicationSettingsRequest(input.WriteApplicationSettingsRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateBaiduChannelCommand = async (
  input: UpdateBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.BaiduChannelRequest !== undefined) {
    body = serializeAws_restJson1BaiduChannelRequest(input.BaiduChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEmailChannelCommand = async (
  input: UpdateEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EmailChannelRequest !== undefined) {
    body = serializeAws_restJson1EmailChannelRequest(input.EmailChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEmailTemplateCommand = async (
  input: UpdateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  if (input.EndpointRequest !== undefined) {
    body = serializeAws_restJson1EndpointRequest(input.EndpointRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEndpointsBatchCommand = async (
  input: UpdateEndpointsBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EndpointBatchRequest !== undefined) {
    body = serializeAws_restJson1EndpointBatchRequest(input.EndpointBatchRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGcmChannelCommand = async (
  input: UpdateGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.GCMChannelRequest !== undefined) {
    body = serializeAws_restJson1GCMChannelRequest(input.GCMChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateJourneyCommand = async (
  input: UpdateJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateJourneyStateCommand = async (
  input: UpdateJourneyStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  let body: any;
  if (input.JourneyStateRequest !== undefined) {
    body = serializeAws_restJson1JourneyStateRequest(input.JourneyStateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePushTemplateCommand = async (
  input: UpdatePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateRecommenderConfigurationCommand = async (
  input: UpdateRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  if (input.UpdateRecommenderConfiguration !== undefined) {
    body = serializeAws_restJson1UpdateRecommenderConfigurationShape(input.UpdateRecommenderConfiguration, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSegmentCommand = async (
  input: UpdateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSmsChannelCommand = async (
  input: UpdateSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.SMSChannelRequest !== undefined) {
    body = serializeAws_restJson1SMSChannelRequest(input.SMSChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSmsTemplateCommand = async (
  input: UpdateSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateTemplateActiveVersionCommand = async (
  input: UpdateTemplateActiveVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/active-version";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  if (input.TemplateType !== undefined) {
    const labelValue: string = input.TemplateType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateType.");
    }
    resolvedPath = resolvedPath.replace("{TemplateType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateType.");
  }
  let body: any;
  if (input.TemplateActiveVersionRequest !== undefined) {
    body = serializeAws_restJson1TemplateActiveVersionRequest(input.TemplateActiveVersionRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVoiceChannelCommand = async (
  input: UpdateVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.VoiceChannelRequest !== undefined) {
    body = serializeAws_restJson1VoiceChannelRequest(input.VoiceChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVoiceTemplateCommand = async (
  input: UpdateVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCampaignCommandError(output, context);
  }
  const contents: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
  }
  const contents: CreateEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExportJobCommandError(output, context);
  }
  const contents: CreateExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImportJobCommandError(output, context);
  }
  const contents: CreateImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ImportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJourneyCommandError(output, context);
  }
  const contents: CreateJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePushTemplateCommandError(output, context);
  }
  const contents: CreatePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecommenderConfigurationCommandError(output, context);
  }
  const contents: CreateRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSegmentCommandError(output, context);
  }
  const contents: CreateSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSmsTemplateCommandError(output, context);
  }
  const contents: CreateSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVoiceTemplateCommandError(output, context);
  }
  const contents: CreateVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAdmChannelCommandError(output, context);
  }
  const contents: DeleteAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsChannelCommandError(output, context);
  }
  const contents: DeleteApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsSandboxChannelCommandError(output, context);
  }
  const contents: DeleteApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsVoipChannelCommandError(output, context);
  }
  const contents: DeleteApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: DeleteApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBaiduChannelCommandError(output, context);
  }
  const contents: DeleteBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCampaignCommandError(output, context);
  }
  const contents: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailChannelCommandError(output, context);
  }
  const contents: DeleteEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
  }
  const contents: DeleteEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEndpointCommandError(output, context);
  }
  const contents: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    EndpointResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventStreamCommandError(output, context);
  }
  const contents: DeleteEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGcmChannelCommandError(output, context);
  }
  const contents: DeleteGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJourneyCommandError(output, context);
  }
  const contents: DeleteJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePushTemplateCommandError(output, context);
  }
  const contents: DeletePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecommenderConfigurationCommandError(output, context);
  }
  const contents: DeleteRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSegmentCommandError(output, context);
  }
  const contents: DeleteSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSmsChannelCommandError(output, context);
  }
  const contents: DeleteSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSmsTemplateCommandError(output, context);
  }
  const contents: DeleteSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserEndpointsCommandError(output, context);
  }
  const contents: DeleteUserEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EndpointsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceChannelCommandError(output, context);
  }
  const contents: DeleteVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceTemplateCommandError(output, context);
  }
  const contents: DeleteVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAdmChannelCommandError(output, context);
  }
  const contents: GetAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsChannelCommandError(output, context);
  }
  const contents: GetApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsSandboxChannelCommandError(output, context);
  }
  const contents: GetApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsVoipChannelCommandError(output, context);
  }
  const contents: GetApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: GetApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppCommandError(output, context);
  }
  const contents: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApplicationDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationDateRangeKpiCommandError(output, context);
  }
  const contents: GetApplicationDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationDateRangeKpiResponse = deserializeAws_restJson1ApplicationDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationSettingsCommandError(output, context);
  }
  const contents: GetApplicationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationSettingsResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppsCommandError(output, context);
  }
  const contents: GetAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationsResponse = deserializeAws_restJson1ApplicationsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBaiduChannelCommandError(output, context);
  }
  const contents: GetBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignCommandError(output, context);
  }
  const contents: GetCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignActivitiesCommandError(output, context);
  }
  const contents: GetCampaignActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActivitiesResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ActivitiesResponse = deserializeAws_restJson1ActivitiesResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignDateRangeKpiCommandError(output, context);
  }
  const contents: GetCampaignDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignDateRangeKpiResponse = deserializeAws_restJson1CampaignDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignsCommandError(output, context);
  }
  const contents: GetCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignVersionCommandError(output, context);
  }
  const contents: GetCampaignVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignVersionsCommandError(output, context);
  }
  const contents: GetCampaignVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelsCommandError(output, context);
  }
  const contents: GetChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChannelsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ChannelsResponse = deserializeAws_restJson1ChannelsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailChannelCommandError(output, context);
  }
  const contents: GetEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
  }
  const contents: GetEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmailTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailTemplateResponse = deserializeAws_restJson1EmailTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEndpointCommandError(output, context);
  }
  const contents: GetEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    EndpointResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventStreamCommandError(output, context);
  }
  const contents: GetEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportJobCommandError(output, context);
  }
  const contents: GetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportJobsCommandError(output, context);
  }
  const contents: GetExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGcmChannelCommandError(output, context);
  }
  const contents: GetGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportJobCommandError(output, context);
  }
  const contents: GetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ImportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportJobsCommandError(output, context);
  }
  const contents: GetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ImportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyCommandError(output, context);
  }
  const contents: GetJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyDateRangeKpiCommandError(output, context);
  }
  const contents: GetJourneyDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyDateRangeKpiResponse = deserializeAws_restJson1JourneyDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError(output, context);
  }
  const contents: GetJourneyExecutionActivityMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyExecutionActivityMetricsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyExecutionActivityMetricsResponse = deserializeAws_restJson1JourneyExecutionActivityMetricsResponse(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyExecutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyExecutionMetricsCommandError(output, context);
  }
  const contents: GetJourneyExecutionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyExecutionMetricsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyExecutionMetricsResponse = deserializeAws_restJson1JourneyExecutionMetricsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyExecutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPushTemplateCommandError(output, context);
  }
  const contents: GetPushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    PushNotificationTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PushNotificationTemplateResponse = deserializeAws_restJson1PushNotificationTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommenderConfigurationCommandError(output, context);
  }
  const contents: GetRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecommenderConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommenderConfigurationsCommandError(output, context);
  }
  const contents: GetRecommenderConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListRecommenderConfigurationsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListRecommenderConfigurationsResponse = deserializeAws_restJson1ListRecommenderConfigurationsResponse(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommenderConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentCommandError(output, context);
  }
  const contents: GetSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentExportJobsCommandError(output, context);
  }
  const contents: GetSegmentExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentImportJobsCommandError(output, context);
  }
  const contents: GetSegmentImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ImportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentsCommandError(output, context);
  }
  const contents: GetSegmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentVersionCommandError(output, context);
  }
  const contents: GetSegmentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentVersionsCommandError(output, context);
  }
  const contents: GetSegmentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSmsChannelCommandError(output, context);
  }
  const contents: GetSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSmsTemplateCommandError(output, context);
  }
  const contents: GetSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    SMSTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSTemplateResponse = deserializeAws_restJson1SMSTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserEndpointsCommandError(output, context);
  }
  const contents: GetUserEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EndpointsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceChannelCommandError(output, context);
  }
  const contents: GetVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceTemplateCommandError(output, context);
  }
  const contents: GetVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    VoiceTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceTemplateResponse = deserializeAws_restJson1VoiceTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJourneysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJourneysCommandError(output, context);
  }
  const contents: ListJourneysCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneysResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneysResponse = deserializeAws_restJson1JourneysResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJourneysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagsModel: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TagsModel = deserializeAws_restJson1TagsModel(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: ListTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    TemplatesResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TemplatesResponse = deserializeAws_restJson1TemplatesResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
  }
  const contents: ListTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    TemplateVersionsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TemplateVersionsResponse = deserializeAws_restJson1TemplateVersionsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PhoneNumberValidateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PhoneNumberValidateCommandError(output, context);
  }
  const contents: PhoneNumberValidateCommandOutput = {
    $metadata: deserializeMetadata(output),
    NumberValidateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.NumberValidateResponse = deserializeAws_restJson1NumberValidateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PhoneNumberValidateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventsCommandError(output, context);
  }
  const contents: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventsResponse = deserializeAws_restJson1EventsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventStreamCommandError(output, context);
  }
  const contents: PutEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveAttributesCommandError(output, context);
  }
  const contents: RemoveAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AttributesResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.AttributesResource = deserializeAws_restJson1AttributesResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendMessagesCommandError(output, context);
  }
  const contents: SendMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageResponse = deserializeAws_restJson1MessageResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendUsersMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendUsersMessagesCommandError(output, context);
  }
  const contents: SendUsersMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    SendUsersMessageResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SendUsersMessageResponse = deserializeAws_restJson1SendUsersMessageResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendUsersMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAdmChannelCommandError(output, context);
  }
  const contents: UpdateAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsChannelCommandError(output, context);
  }
  const contents: UpdateApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsSandboxChannelCommandError(output, context);
  }
  const contents: UpdateApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsVoipChannelCommandError(output, context);
  }
  const contents: UpdateApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: UpdateApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationSettingsCommandError(output, context);
  }
  const contents: UpdateApplicationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationSettingsResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBaiduChannelCommandError(output, context);
  }
  const contents: UpdateBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCampaignCommandError(output, context);
  }
  const contents: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailChannelCommandError(output, context);
  }
  const contents: UpdateEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
  }
  const contents: UpdateEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEndpointCommandError(output, context);
  }
  const contents: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEndpointsBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEndpointsBatchCommandError(output, context);
  }
  const contents: UpdateEndpointsBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEndpointsBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGcmChannelCommandError(output, context);
  }
  const contents: UpdateGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJourneyCommandError(output, context);
  }
  const contents: UpdateJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.pinpoint#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateJourneyStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJourneyStateCommandError(output, context);
  }
  const contents: UpdateJourneyStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJourneyStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePushTemplateCommandError(output, context);
  }
  const contents: UpdatePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecommenderConfigurationCommandError(output, context);
  }
  const contents: UpdateRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSegmentCommandError(output, context);
  }
  const contents: UpdateSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSmsChannelCommandError(output, context);
  }
  const contents: UpdateSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSmsTemplateCommandError(output, context);
  }
  const contents: UpdateSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTemplateActiveVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateActiveVersionCommandError(output, context);
  }
  const contents: UpdateTemplateActiveVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTemplateActiveVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceChannelCommandError(output, context);
  }
  const contents: UpdateVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceTemplateCommandError(output, context);
  }
  const contents: UpdateVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: MethodNotAllowedException = {
    name: "MethodNotAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: PayloadTooLargeException = {
    name: "PayloadTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = __expectString(data.RequestID);
  }
  return contents;
};

const serializeAws_restJson1Activity = (input: Activity, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM !== undefined &&
      input.CUSTOM !== null && { CUSTOM: serializeAws_restJson1CustomMessageActivity(input.CUSTOM, context) }),
    ...(input.ConditionalSplit !== undefined &&
      input.ConditionalSplit !== null && {
        ConditionalSplit: serializeAws_restJson1ConditionalSplitActivity(input.ConditionalSplit, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EMAIL !== undefined &&
      input.EMAIL !== null && { EMAIL: serializeAws_restJson1EmailMessageActivity(input.EMAIL, context) }),
    ...(input.Holdout !== undefined &&
      input.Holdout !== null && { Holdout: serializeAws_restJson1HoldoutActivity(input.Holdout, context) }),
    ...(input.MultiCondition !== undefined &&
      input.MultiCondition !== null && {
        MultiCondition: serializeAws_restJson1MultiConditionalSplitActivity(input.MultiCondition, context),
      }),
    ...(input.PUSH !== undefined &&
      input.PUSH !== null && { PUSH: serializeAws_restJson1PushMessageActivity(input.PUSH, context) }),
    ...(input.RandomSplit !== undefined &&
      input.RandomSplit !== null && {
        RandomSplit: serializeAws_restJson1RandomSplitActivity(input.RandomSplit, context),
      }),
    ...(input.SMS !== undefined &&
      input.SMS !== null && { SMS: serializeAws_restJson1SMSMessageActivity(input.SMS, context) }),
    ...(input.Wait !== undefined &&
      input.Wait !== null && { Wait: serializeAws_restJson1WaitActivity(input.Wait, context) }),
  };
};

const serializeAws_restJson1AddressConfiguration = (input: AddressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BodyOverride !== undefined && input.BodyOverride !== null && { BodyOverride: input.BodyOverride }),
    ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
    ...(input.Context !== undefined &&
      input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.TitleOverride !== undefined && input.TitleOverride !== null && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1ADMChannelRequest = (input: ADMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
    ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1ADMMessage = (input: ADMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.ConsolidationKey !== undefined &&
      input.ConsolidationKey !== null && { ConsolidationKey: input.ConsolidationKey }),
    ...(input.Data !== undefined &&
      input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.ExpiresAfter !== undefined && input.ExpiresAfter !== null && { ExpiresAfter: input.ExpiresAfter }),
    ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
    ...(input.MD5 !== undefined && input.MD5 !== null && { MD5: input.MD5 }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined &&
      input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1AndroidPushNotificationTemplate = (
  input: AndroidPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.SmallImageIconUrl !== undefined &&
      input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSChannelRequest = (input: APNSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined &&
      input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSMessage = (input: APNSMessage, context: __SerdeContext): any => {
  return {
    ...(input.APNSPushType !== undefined && input.APNSPushType !== null && { APNSPushType: input.APNSPushType }),
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Badge !== undefined && input.Badge !== null && { Badge: input.Badge }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
    ...(input.CollapseId !== undefined && input.CollapseId !== null && { CollapseId: input.CollapseId }),
    ...(input.Data !== undefined &&
      input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
    ...(input.PreferredAuthenticationMethod !== undefined &&
      input.PreferredAuthenticationMethod !== null && {
        PreferredAuthenticationMethod: input.PreferredAuthenticationMethod,
      }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.ThreadId !== undefined && input.ThreadId !== null && { ThreadId: input.ThreadId }),
    ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSPushNotificationTemplate = (
  input: APNSPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSSandboxChannelRequest = (
  input: APNSSandboxChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined &&
      input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSVoipChannelRequest = (input: APNSVoipChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined &&
      input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSVoipSandboxChannelRequest = (
  input: APNSVoipSandboxChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined &&
      input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1AttributeDimension = (input: AttributeDimension, context: __SerdeContext): any => {
  return {
    ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1BaiduChannelRequest = (input: BaiduChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey !== undefined && input.ApiKey !== null && { ApiKey: input.ApiKey }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.SecretKey !== undefined && input.SecretKey !== null && { SecretKey: input.SecretKey }),
  };
};

const serializeAws_restJson1BaiduMessage = (input: BaiduMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Data !== undefined &&
      input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined &&
      input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1CampaignCustomMessage = (input: CampaignCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
  };
};

const serializeAws_restJson1CampaignEmailMessage = (input: CampaignEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
    ...(input.HtmlBody !== undefined && input.HtmlBody !== null && { HtmlBody: input.HtmlBody }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
  };
};

const serializeAws_restJson1CampaignEventFilter = (input: CampaignEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType !== undefined && input.FilterType !== null && { FilterType: input.FilterType }),
  };
};

const serializeAws_restJson1CampaignHook = (input: CampaignHook, context: __SerdeContext): any => {
  return {
    ...(input.LambdaFunctionName !== undefined &&
      input.LambdaFunctionName !== null && { LambdaFunctionName: input.LambdaFunctionName }),
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.WebUrl !== undefined && input.WebUrl !== null && { WebUrl: input.WebUrl }),
  };
};

const serializeAws_restJson1CampaignLimits = (input: CampaignLimits, context: __SerdeContext): any => {
  return {
    ...(input.Daily !== undefined && input.Daily !== null && { Daily: input.Daily }),
    ...(input.MaximumDuration !== undefined &&
      input.MaximumDuration !== null && { MaximumDuration: input.MaximumDuration }),
    ...(input.MessagesPerSecond !== undefined &&
      input.MessagesPerSecond !== null && { MessagesPerSecond: input.MessagesPerSecond }),
    ...(input.Total !== undefined && input.Total !== null && { Total: input.Total }),
  };
};

const serializeAws_restJson1CampaignSmsMessage = (input: CampaignSmsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber !== undefined &&
      input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
    ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Conditions !== undefined &&
      input.Conditions !== null && {
        Conditions: serializeAws_restJson1ListOfSimpleCondition(input.Conditions, context),
      }),
    ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
  };
};

const serializeAws_restJson1ConditionalSplitActivity = (
  input: ConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined &&
      input.Condition !== null && { Condition: serializeAws_restJson1Condition(input.Condition, context) }),
    ...(input.EvaluationWaitTime !== undefined &&
      input.EvaluationWaitTime !== null && {
        EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
      }),
    ...(input.FalseActivity !== undefined && input.FalseActivity !== null && { FalseActivity: input.FalseActivity }),
    ...(input.TrueActivity !== undefined && input.TrueActivity !== null && { TrueActivity: input.TrueActivity }),
  };
};

const serializeAws_restJson1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1CreateRecommenderConfigurationShape = (
  input: CreateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecommendationProviderIdType !== undefined &&
      input.RecommendationProviderIdType !== null && {
        RecommendationProviderIdType: input.RecommendationProviderIdType,
      }),
    ...(input.RecommendationProviderRoleArn !== undefined &&
      input.RecommendationProviderRoleArn !== null && {
        RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
      }),
    ...(input.RecommendationProviderUri !== undefined &&
      input.RecommendationProviderUri !== null && { RecommendationProviderUri: input.RecommendationProviderUri }),
    ...(input.RecommendationTransformerUri !== undefined &&
      input.RecommendationTransformerUri !== null && {
        RecommendationTransformerUri: input.RecommendationTransformerUri,
      }),
    ...(input.RecommendationsDisplayName !== undefined &&
      input.RecommendationsDisplayName !== null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
    ...(input.RecommendationsPerMessage !== undefined &&
      input.RecommendationsPerMessage !== null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
  };
};

const serializeAws_restJson1CustomDeliveryConfiguration = (
  input: CustomDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryUri !== undefined && input.DeliveryUri !== null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes !== undefined &&
      input.EndpointTypes !== null && {
        EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
      }),
  };
};

const serializeAws_restJson1CustomMessageActivity = (input: CustomMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryUri !== undefined && input.DeliveryUri !== null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes !== undefined &&
      input.EndpointTypes !== null && {
        EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
      }),
    ...(input.MessageConfig !== undefined &&
      input.MessageConfig !== null && {
        MessageConfig: serializeAws_restJson1JourneyCustomMessage(input.MessageConfig, context),
      }),
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined &&
      input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1DefaultMessage = (input: DefaultMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
  };
};

const serializeAws_restJson1DefaultPushNotificationMessage = (
  input: DefaultPushNotificationMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Data !== undefined &&
      input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1DefaultPushNotificationTemplate = (
  input: DefaultPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1DirectMessageConfiguration = (
  input: DirectMessageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADMMessage !== undefined &&
      input.ADMMessage !== null && { ADMMessage: serializeAws_restJson1ADMMessage(input.ADMMessage, context) }),
    ...(input.APNSMessage !== undefined &&
      input.APNSMessage !== null && { APNSMessage: serializeAws_restJson1APNSMessage(input.APNSMessage, context) }),
    ...(input.BaiduMessage !== undefined &&
      input.BaiduMessage !== null && { BaiduMessage: serializeAws_restJson1BaiduMessage(input.BaiduMessage, context) }),
    ...(input.DefaultMessage !== undefined &&
      input.DefaultMessage !== null && {
        DefaultMessage: serializeAws_restJson1DefaultMessage(input.DefaultMessage, context),
      }),
    ...(input.DefaultPushNotificationMessage !== undefined &&
      input.DefaultPushNotificationMessage !== null && {
        DefaultPushNotificationMessage: serializeAws_restJson1DefaultPushNotificationMessage(
          input.DefaultPushNotificationMessage,
          context
        ),
      }),
    ...(input.EmailMessage !== undefined &&
      input.EmailMessage !== null && { EmailMessage: serializeAws_restJson1EmailMessage(input.EmailMessage, context) }),
    ...(input.GCMMessage !== undefined &&
      input.GCMMessage !== null && { GCMMessage: serializeAws_restJson1GCMMessage(input.GCMMessage, context) }),
    ...(input.SMSMessage !== undefined &&
      input.SMSMessage !== null && { SMSMessage: serializeAws_restJson1SMSMessage(input.SMSMessage, context) }),
    ...(input.VoiceMessage !== undefined &&
      input.VoiceMessage !== null && { VoiceMessage: serializeAws_restJson1VoiceMessage(input.VoiceMessage, context) }),
  };
};

const serializeAws_restJson1EmailChannelRequest = (input: EmailChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSet !== undefined &&
      input.ConfigurationSet !== null && { ConfigurationSet: input.ConfigurationSet }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
    ...(input.Identity !== undefined && input.Identity !== null && { Identity: input.Identity }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1EmailMessage = (input: EmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.FeedbackForwardingAddress !== undefined &&
      input.FeedbackForwardingAddress !== null && { FeedbackForwardingAddress: input.FeedbackForwardingAddress }),
    ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
    ...(input.RawEmail !== undefined &&
      input.RawEmail !== null && { RawEmail: serializeAws_restJson1RawEmail(input.RawEmail, context) }),
    ...(input.ReplyToAddresses !== undefined &&
      input.ReplyToAddresses !== null && {
        ReplyToAddresses: serializeAws_restJson1ListOf__string(input.ReplyToAddresses, context),
      }),
    ...(input.SimpleEmail !== undefined &&
      input.SimpleEmail !== null && { SimpleEmail: serializeAws_restJson1SimpleEmail(input.SimpleEmail, context) }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
  };
};

const serializeAws_restJson1EmailMessageActivity = (input: EmailMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined &&
      input.MessageConfig !== null && {
        MessageConfig: serializeAws_restJson1JourneyEmailMessage(input.MessageConfig, context),
      }),
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined &&
      input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1EmailTemplateRequest = (input: EmailTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubstitutions !== undefined &&
      input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.HtmlPart !== undefined && input.HtmlPart !== null && { HtmlPart: input.HtmlPart }),
    ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
    ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
    ...(input.TemplateDescription !== undefined &&
      input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
    ...(input.TextPart !== undefined && input.TextPart !== null && { TextPart: input.TextPart }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1EndpointBatchItem = (input: EndpointBatchItem, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
      }),
    ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined &&
      input.Demographic !== null && {
        Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
      }),
    ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined &&
      input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
    ...(input.User !== undefined &&
      input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointBatchRequest = (input: EndpointBatchRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item !== undefined &&
      input.Item !== null && { Item: serializeAws_restJson1ListOfEndpointBatchItem(input.Item, context) }),
  };
};

const serializeAws_restJson1EndpointDemographic = (input: EndpointDemographic, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion !== undefined && input.AppVersion !== null && { AppVersion: input.AppVersion }),
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Make !== undefined && input.Make !== null && { Make: input.Make }),
    ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
    ...(input.ModelVersion !== undefined && input.ModelVersion !== null && { ModelVersion: input.ModelVersion }),
    ...(input.Platform !== undefined && input.Platform !== null && { Platform: input.Platform }),
    ...(input.PlatformVersion !== undefined &&
      input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1EndpointLocation = (input: EndpointLocation, context: __SerdeContext): any => {
  return {
    ...(input.City !== undefined && input.City !== null && { City: input.City }),
    ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
    ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
    ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_restJson1EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
      }),
    ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined &&
      input.Demographic !== null && {
        Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
      }),
    ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined &&
      input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
    ...(input.User !== undefined &&
      input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointSendConfiguration = (
  input: EndpointSendConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BodyOverride !== undefined && input.BodyOverride !== null && { BodyOverride: input.BodyOverride }),
    ...(input.Context !== undefined &&
      input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.TitleOverride !== undefined && input.TitleOverride !== null && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1EndpointUser = (input: EndpointUser, context: __SerdeContext): any => {
  return {
    ...(input.UserAttributes !== undefined &&
      input.UserAttributes !== null && {
        UserAttributes: serializeAws_restJson1MapOfListOf__string(input.UserAttributes, context),
      }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.AppPackageName !== undefined &&
      input.AppPackageName !== null && { AppPackageName: input.AppPackageName }),
    ...(input.AppTitle !== undefined && input.AppTitle !== null && { AppTitle: input.AppTitle }),
    ...(input.AppVersionCode !== undefined &&
      input.AppVersionCode !== null && { AppVersionCode: input.AppVersionCode }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
    ...(input.ClientSdkVersion !== undefined &&
      input.ClientSdkVersion !== null && { ClientSdkVersion: input.ClientSdkVersion }),
    ...(input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.SdkName !== undefined && input.SdkName !== null && { SdkName: input.SdkName }),
    ...(input.Session !== undefined &&
      input.Session !== null && { Session: serializeAws_restJson1Session(input.Session, context) }),
    ...(input.Timestamp !== undefined && input.Timestamp !== null && { Timestamp: input.Timestamp }),
  };
};

const serializeAws_restJson1EventCondition = (input: EventCondition, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.MessageActivity !== undefined &&
      input.MessageActivity !== null && { MessageActivity: input.MessageActivity }),
  };
};

const serializeAws_restJson1EventDimensions = (input: EventDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
      }),
    ...(input.EventType !== undefined &&
      input.EventType !== null && { EventType: serializeAws_restJson1SetDimension(input.EventType, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
  };
};

const serializeAws_restJson1EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType !== undefined && input.FilterType !== null && { FilterType: input.FilterType }),
  };
};

const serializeAws_restJson1EventsBatch = (input: EventsBatch, context: __SerdeContext): any => {
  return {
    ...(input.Endpoint !== undefined &&
      input.Endpoint !== null && { Endpoint: serializeAws_restJson1PublicEndpoint(input.Endpoint, context) }),
    ...(input.Events !== undefined &&
      input.Events !== null && { Events: serializeAws_restJson1MapOfEvent(input.Events, context) }),
  };
};

const serializeAws_restJson1EventsRequest = (input: EventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BatchItem !== undefined &&
      input.BatchItem !== null && { BatchItem: serializeAws_restJson1MapOfEventsBatch(input.BatchItem, context) }),
  };
};

const serializeAws_restJson1EventStartCondition = (input: EventStartCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventFilter !== undefined &&
      input.EventFilter !== null && { EventFilter: serializeAws_restJson1EventFilter(input.EventFilter, context) }),
    ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
  };
};

const serializeAws_restJson1ExportJobRequest = (input: ExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.S3UrlPrefix !== undefined && input.S3UrlPrefix !== null && { S3UrlPrefix: input.S3UrlPrefix }),
    ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion !== undefined &&
      input.SegmentVersion !== null && { SegmentVersion: input.SegmentVersion }),
  };
};

const serializeAws_restJson1GCMChannelRequest = (input: GCMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey !== undefined && input.ApiKey !== null && { ApiKey: input.ApiKey }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1GCMMessage = (input: GCMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.CollapseKey !== undefined && input.CollapseKey !== null && { CollapseKey: input.CollapseKey }),
    ...(input.Data !== undefined &&
      input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.RestrictedPackageName !== undefined &&
      input.RestrictedPackageName !== null && { RestrictedPackageName: input.RestrictedPackageName }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined &&
      input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1GPSCoordinates = (input: GPSCoordinates, context: __SerdeContext): any => {
  return {
    ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
  };
};

const serializeAws_restJson1GPSPointDimension = (input: GPSPointDimension, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates !== undefined &&
      input.Coordinates !== null && { Coordinates: serializeAws_restJson1GPSCoordinates(input.Coordinates, context) }),
    ...(input.RangeInKilometers !== undefined &&
      input.RangeInKilometers !== null && { RangeInKilometers: input.RangeInKilometers }),
  };
};

const serializeAws_restJson1HoldoutActivity = (input: HoldoutActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.Percentage !== undefined && input.Percentage !== null && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1ImportJobRequest = (input: ImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefineSegment !== undefined && input.DefineSegment !== null && { DefineSegment: input.DefineSegment }),
    ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.RegisterEndpoints !== undefined &&
      input.RegisterEndpoints !== null && { RegisterEndpoints: input.RegisterEndpoints }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.S3Url !== undefined && input.S3Url !== null && { S3Url: input.S3Url }),
    ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
    ...(input.SegmentName !== undefined && input.SegmentName !== null && { SegmentName: input.SegmentName }),
  };
};

const serializeAws_restJson1JourneyCustomMessage = (input: JourneyCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
  };
};

const serializeAws_restJson1JourneyEmailMessage = (input: JourneyEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
  };
};

const serializeAws_restJson1JourneyLimits = (input: JourneyLimits, context: __SerdeContext): any => {
  return {
    ...(input.DailyCap !== undefined && input.DailyCap !== null && { DailyCap: input.DailyCap }),
    ...(input.EndpointReentryCap !== undefined &&
      input.EndpointReentryCap !== null && { EndpointReentryCap: input.EndpointReentryCap }),
    ...(input.EndpointReentryInterval !== undefined &&
      input.EndpointReentryInterval !== null && { EndpointReentryInterval: input.EndpointReentryInterval }),
    ...(input.MessagesPerSecond !== undefined &&
      input.MessagesPerSecond !== null && { MessagesPerSecond: input.MessagesPerSecond }),
  };
};

const serializeAws_restJson1JourneyPushMessage = (input: JourneyPushMessage, context: __SerdeContext): any => {
  return {
    ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
  };
};

const serializeAws_restJson1JourneySchedule = (input: JourneySchedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: input.EndTime.toISOString().split(".")[0] + "Z" }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1JourneySMSMessage = (input: JourneySMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber !== undefined &&
      input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
    ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1JourneyStateRequest = (input: JourneyStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1ListOf__EndpointTypesElement = (
  input: (__EndpointTypesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOfEndpointBatchItem = (input: EndpointBatchItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EndpointBatchItem(entry, context);
    });
};

const serializeAws_restJson1ListOfMultiConditionalBranch = (
  input: MultiConditionalBranch[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MultiConditionalBranch(entry, context);
    });
};

const serializeAws_restJson1ListOfRandomSplitEntry = (input: RandomSplitEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RandomSplitEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentDimensions = (input: SegmentDimensions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SegmentDimensions(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentGroup = (input: SegmentGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SegmentGroup(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentReference = (input: SegmentReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SegmentReference(entry, context);
    });
};

const serializeAws_restJson1ListOfSimpleCondition = (input: SimpleCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SimpleCondition(entry, context);
    });
};

const serializeAws_restJson1ListOfWriteTreatmentResource = (
  input: WriteTreatmentResource[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1WriteTreatmentResource(entry, context);
    });
};

const serializeAws_restJson1MapOf__double = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1MapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1MapOfActivity = (input: { [key: string]: Activity }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: Activity }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Activity(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfAddressConfiguration = (
  input: { [key: string]: AddressConfiguration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: AddressConfiguration }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1AddressConfiguration(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfAttributeDimension = (
  input: { [key: string]: AttributeDimension },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: AttributeDimension }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1AttributeDimension(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfEndpointSendConfiguration = (
  input: { [key: string]: EndpointSendConfiguration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: EndpointSendConfiguration }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_restJson1EndpointSendConfiguration(value, context),
      };
    },
    {}
  );
};

const serializeAws_restJson1MapOfEvent = (input: { [key: string]: Event }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: Event }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Event(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfEventsBatch = (
  input: { [key: string]: EventsBatch },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: EventsBatch }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1EventsBatch(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfListOf__string = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ListOf__string(value, context),
    };
  }, {});
};

const serializeAws_restJson1MapOfMetricDimension = (
  input: { [key: string]: MetricDimension },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: MetricDimension }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1MetricDimension(value, context),
    };
  }, {});
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageSmallIconUrl !== undefined &&
      input.ImageSmallIconUrl !== null && { ImageSmallIconUrl: input.ImageSmallIconUrl }),
    ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
    ...(input.JsonBody !== undefined && input.JsonBody !== null && { JsonBody: input.JsonBody }),
    ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
    ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1MessageConfiguration = (input: MessageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ADMMessage !== undefined &&
      input.ADMMessage !== null && { ADMMessage: serializeAws_restJson1Message(input.ADMMessage, context) }),
    ...(input.APNSMessage !== undefined &&
      input.APNSMessage !== null && { APNSMessage: serializeAws_restJson1Message(input.APNSMessage, context) }),
    ...(input.BaiduMessage !== undefined &&
      input.BaiduMessage !== null && { BaiduMessage: serializeAws_restJson1Message(input.BaiduMessage, context) }),
    ...(input.CustomMessage !== undefined &&
      input.CustomMessage !== null && {
        CustomMessage: serializeAws_restJson1CampaignCustomMessage(input.CustomMessage, context),
      }),
    ...(input.DefaultMessage !== undefined &&
      input.DefaultMessage !== null && {
        DefaultMessage: serializeAws_restJson1Message(input.DefaultMessage, context),
      }),
    ...(input.EmailMessage !== undefined &&
      input.EmailMessage !== null && {
        EmailMessage: serializeAws_restJson1CampaignEmailMessage(input.EmailMessage, context),
      }),
    ...(input.GCMMessage !== undefined &&
      input.GCMMessage !== null && { GCMMessage: serializeAws_restJson1Message(input.GCMMessage, context) }),
    ...(input.SMSMessage !== undefined &&
      input.SMSMessage !== null && { SMSMessage: serializeAws_restJson1CampaignSmsMessage(input.SMSMessage, context) }),
  };
};

const serializeAws_restJson1MessageRequest = (input: MessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses !== undefined &&
      input.Addresses !== null && {
        Addresses: serializeAws_restJson1MapOfAddressConfiguration(input.Addresses, context),
      }),
    ...(input.Context !== undefined &&
      input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.Endpoints !== undefined &&
      input.Endpoints !== null && {
        Endpoints: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Endpoints, context),
      }),
    ...(input.MessageConfiguration !== undefined &&
      input.MessageConfiguration !== null && {
        MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
      }),
    ...(input.TemplateConfiguration !== undefined &&
      input.TemplateConfiguration !== null && {
        TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
      }),
    ...(input.TraceId !== undefined && input.TraceId !== null && { TraceId: input.TraceId }),
  };
};

const serializeAws_restJson1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1MultiConditionalBranch = (input: MultiConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined &&
      input.Condition !== null && { Condition: serializeAws_restJson1SimpleCondition(input.Condition, context) }),
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
  };
};

const serializeAws_restJson1MultiConditionalSplitActivity = (
  input: MultiConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Branches !== undefined &&
      input.Branches !== null && {
        Branches: serializeAws_restJson1ListOfMultiConditionalBranch(input.Branches, context),
      }),
    ...(input.DefaultActivity !== undefined &&
      input.DefaultActivity !== null && { DefaultActivity: input.DefaultActivity }),
    ...(input.EvaluationWaitTime !== undefined &&
      input.EvaluationWaitTime !== null && {
        EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
      }),
  };
};

const serializeAws_restJson1NumberValidateRequest = (input: NumberValidateRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode !== undefined &&
      input.IsoCountryCode !== null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_restJson1PublicEndpoint = (input: PublicEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
      }),
    ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined &&
      input.Demographic !== null && {
        Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
      }),
    ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined &&
      input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
    ...(input.User !== undefined &&
      input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1PushMessageActivity = (input: PushMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined &&
      input.MessageConfig !== null && {
        MessageConfig: serializeAws_restJson1JourneyPushMessage(input.MessageConfig, context),
      }),
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined &&
      input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1PushNotificationTemplateRequest = (
  input: PushNotificationTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADM !== undefined &&
      input.ADM !== null && { ADM: serializeAws_restJson1AndroidPushNotificationTemplate(input.ADM, context) }),
    ...(input.APNS !== undefined &&
      input.APNS !== null && { APNS: serializeAws_restJson1APNSPushNotificationTemplate(input.APNS, context) }),
    ...(input.Baidu !== undefined &&
      input.Baidu !== null && { Baidu: serializeAws_restJson1AndroidPushNotificationTemplate(input.Baidu, context) }),
    ...(input.Default !== undefined &&
      input.Default !== null && {
        Default: serializeAws_restJson1DefaultPushNotificationTemplate(input.Default, context),
      }),
    ...(input.DefaultSubstitutions !== undefined &&
      input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.GCM !== undefined &&
      input.GCM !== null && { GCM: serializeAws_restJson1AndroidPushNotificationTemplate(input.GCM, context) }),
    ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription !== undefined &&
      input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1QuietTime = (input: QuietTime, context: __SerdeContext): any => {
  return {
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
    ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
  };
};

const serializeAws_restJson1RandomSplitActivity = (input: RandomSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Branches !== undefined &&
      input.Branches !== null && { Branches: serializeAws_restJson1ListOfRandomSplitEntry(input.Branches, context) }),
  };
};

const serializeAws_restJson1RandomSplitEntry = (input: RandomSplitEntry, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.Percentage !== undefined && input.Percentage !== null && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1RawEmail = (input: RawEmail, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && input.Data !== null && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_restJson1RecencyDimension = (input: RecencyDimension, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
    ...(input.RecencyType !== undefined && input.RecencyType !== null && { RecencyType: input.RecencyType }),
  };
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined && input.EndTime !== null && { EndTime: input.EndTime }),
    ...(input.EventFilter !== undefined &&
      input.EventFilter !== null && {
        EventFilter: serializeAws_restJson1CampaignEventFilter(input.EventFilter, context),
      }),
    ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
    ...(input.IsLocalTime !== undefined && input.IsLocalTime !== null && { IsLocalTime: input.IsLocalTime }),
    ...(input.QuietTime !== undefined &&
      input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.StartTime !== undefined && input.StartTime !== null && { StartTime: input.StartTime }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1SegmentBehaviors = (input: SegmentBehaviors, context: __SerdeContext): any => {
  return {
    ...(input.Recency !== undefined &&
      input.Recency !== null && { Recency: serializeAws_restJson1RecencyDimension(input.Recency, context) }),
  };
};

const serializeAws_restJson1SegmentCondition = (input: SegmentCondition, context: __SerdeContext): any => {
  return {
    ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
  };
};

const serializeAws_restJson1SegmentDemographics = (input: SegmentDemographics, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion !== undefined &&
      input.AppVersion !== null && { AppVersion: serializeAws_restJson1SetDimension(input.AppVersion, context) }),
    ...(input.Channel !== undefined &&
      input.Channel !== null && { Channel: serializeAws_restJson1SetDimension(input.Channel, context) }),
    ...(input.DeviceType !== undefined &&
      input.DeviceType !== null && { DeviceType: serializeAws_restJson1SetDimension(input.DeviceType, context) }),
    ...(input.Make !== undefined &&
      input.Make !== null && { Make: serializeAws_restJson1SetDimension(input.Make, context) }),
    ...(input.Model !== undefined &&
      input.Model !== null && { Model: serializeAws_restJson1SetDimension(input.Model, context) }),
    ...(input.Platform !== undefined &&
      input.Platform !== null && { Platform: serializeAws_restJson1SetDimension(input.Platform, context) }),
  };
};

const serializeAws_restJson1SegmentDimensions = (input: SegmentDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
      }),
    ...(input.Behavior !== undefined &&
      input.Behavior !== null && { Behavior: serializeAws_restJson1SegmentBehaviors(input.Behavior, context) }),
    ...(input.Demographic !== undefined &&
      input.Demographic !== null && {
        Demographic: serializeAws_restJson1SegmentDemographics(input.Demographic, context),
      }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1SegmentLocation(input.Location, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
    ...(input.UserAttributes !== undefined &&
      input.UserAttributes !== null && {
        UserAttributes: serializeAws_restJson1MapOfAttributeDimension(input.UserAttributes, context),
      }),
  };
};

const serializeAws_restJson1SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && {
        Dimensions: serializeAws_restJson1ListOfSegmentDimensions(input.Dimensions, context),
      }),
    ...(input.SourceSegments !== undefined &&
      input.SourceSegments !== null && {
        SourceSegments: serializeAws_restJson1ListOfSegmentReference(input.SourceSegments, context),
      }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SegmentGroupList = (input: SegmentGroupList, context: __SerdeContext): any => {
  return {
    ...(input.Groups !== undefined &&
      input.Groups !== null && { Groups: serializeAws_restJson1ListOfSegmentGroup(input.Groups, context) }),
    ...(input.Include !== undefined && input.Include !== null && { Include: input.Include }),
  };
};

const serializeAws_restJson1SegmentLocation = (input: SegmentLocation, context: __SerdeContext): any => {
  return {
    ...(input.Country !== undefined &&
      input.Country !== null && { Country: serializeAws_restJson1SetDimension(input.Country, context) }),
    ...(input.GPSPoint !== undefined &&
      input.GPSPoint !== null && { GPSPoint: serializeAws_restJson1GPSPointDimension(input.GPSPoint, context) }),
  };
};

const serializeAws_restJson1SegmentReference = (input: SegmentReference, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1SendUsersMessageRequest = (
  input: SendUsersMessageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context !== undefined &&
      input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.MessageConfiguration !== undefined &&
      input.MessageConfiguration !== null && {
        MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
      }),
    ...(input.TemplateConfiguration !== undefined &&
      input.TemplateConfiguration !== null && {
        TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
      }),
    ...(input.TraceId !== undefined && input.TraceId !== null && { TraceId: input.TraceId }),
    ...(input.Users !== undefined &&
      input.Users !== null && { Users: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Users, context) }),
  };
};

const serializeAws_restJson1Session = (input: Session, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.StartTimestamp !== undefined &&
      input.StartTimestamp !== null && { StartTimestamp: input.StartTimestamp }),
    ...(input.StopTimestamp !== undefined && input.StopTimestamp !== null && { StopTimestamp: input.StopTimestamp }),
  };
};

const serializeAws_restJson1SetDimension = (input: SetDimension, context: __SerdeContext): any => {
  return {
    ...(input.DimensionType !== undefined && input.DimensionType !== null && { DimensionType: input.DimensionType }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1SimpleCondition = (input: SimpleCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventCondition !== undefined &&
      input.EventCondition !== null && {
        EventCondition: serializeAws_restJson1EventCondition(input.EventCondition, context),
      }),
    ...(input.SegmentCondition !== undefined &&
      input.SegmentCondition !== null && {
        SegmentCondition: serializeAws_restJson1SegmentCondition(input.SegmentCondition, context),
      }),
    ...(input.SegmentDimensions !== undefined &&
      input.SegmentDimensions !== null && {
        segmentDimensions: serializeAws_restJson1SegmentDimensions(input.SegmentDimensions, context),
      }),
  };
};

const serializeAws_restJson1SimpleEmail = (input: SimpleEmail, context: __SerdeContext): any => {
  return {
    ...(input.HtmlPart !== undefined &&
      input.HtmlPart !== null && { HtmlPart: serializeAws_restJson1SimpleEmailPart(input.HtmlPart, context) }),
    ...(input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_restJson1SimpleEmailPart(input.Subject, context) }),
    ...(input.TextPart !== undefined &&
      input.TextPart !== null && { TextPart: serializeAws_restJson1SimpleEmailPart(input.TextPart, context) }),
  };
};

const serializeAws_restJson1SimpleEmailPart = (input: SimpleEmailPart, context: __SerdeContext): any => {
  return {
    ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
    ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
  };
};

const serializeAws_restJson1SMSChannelRequest = (input: SMSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
    ...(input.ShortCode !== undefined && input.ShortCode !== null && { ShortCode: input.ShortCode }),
  };
};

const serializeAws_restJson1SMSMessage = (input: SMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
    ...(input.Keyword !== undefined && input.Keyword !== null && { Keyword: input.Keyword }),
    ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber !== undefined &&
      input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1SMSMessageActivity = (input: SMSMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined &&
      input.MessageConfig !== null && {
        MessageConfig: serializeAws_restJson1JourneySMSMessage(input.MessageConfig, context),
      }),
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined &&
      input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1SMSTemplateRequest = (input: SMSTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.DefaultSubstitutions !== undefined &&
      input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription !== undefined &&
      input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1StartCondition = (input: StartCondition, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventStartCondition !== undefined &&
      input.EventStartCondition !== null && {
        EventStartCondition: serializeAws_restJson1EventStartCondition(input.EventStartCondition, context),
      }),
    ...(input.SegmentStartCondition !== undefined &&
      input.SegmentStartCondition !== null && {
        SegmentStartCondition: serializeAws_restJson1SegmentCondition(input.SegmentStartCondition, context),
      }),
  };
};

const serializeAws_restJson1TagsModel = (input: TagsModel, context: __SerdeContext): any => {
  return {
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateActiveVersionRequest = (
  input: TemplateActiveVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EmailTemplate !== undefined &&
      input.EmailTemplate !== null && { EmailTemplate: serializeAws_restJson1Template(input.EmailTemplate, context) }),
    ...(input.PushTemplate !== undefined &&
      input.PushTemplate !== null && { PushTemplate: serializeAws_restJson1Template(input.PushTemplate, context) }),
    ...(input.SMSTemplate !== undefined &&
      input.SMSTemplate !== null && { SMSTemplate: serializeAws_restJson1Template(input.SMSTemplate, context) }),
    ...(input.VoiceTemplate !== undefined &&
      input.VoiceTemplate !== null && { VoiceTemplate: serializeAws_restJson1Template(input.VoiceTemplate, context) }),
  };
};

const serializeAws_restJson1UpdateAttributesRequest = (
  input: UpdateAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blacklist !== undefined &&
      input.Blacklist !== null && { Blacklist: serializeAws_restJson1ListOf__string(input.Blacklist, context) }),
  };
};

const serializeAws_restJson1UpdateRecommenderConfigurationShape = (
  input: UpdateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecommendationProviderIdType !== undefined &&
      input.RecommendationProviderIdType !== null && {
        RecommendationProviderIdType: input.RecommendationProviderIdType,
      }),
    ...(input.RecommendationProviderRoleArn !== undefined &&
      input.RecommendationProviderRoleArn !== null && {
        RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
      }),
    ...(input.RecommendationProviderUri !== undefined &&
      input.RecommendationProviderUri !== null && { RecommendationProviderUri: input.RecommendationProviderUri }),
    ...(input.RecommendationTransformerUri !== undefined &&
      input.RecommendationTransformerUri !== null && {
        RecommendationTransformerUri: input.RecommendationTransformerUri,
      }),
    ...(input.RecommendationsDisplayName !== undefined &&
      input.RecommendationsDisplayName !== null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
    ...(input.RecommendationsPerMessage !== undefined &&
      input.RecommendationsPerMessage !== null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
  };
};

const serializeAws_restJson1VoiceChannelRequest = (input: VoiceChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1VoiceMessage = (input: VoiceMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.OriginationNumber !== undefined &&
      input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
    ...(input.Substitutions !== undefined &&
      input.Substitutions !== null && {
        Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
      }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
  };
};

const serializeAws_restJson1VoiceTemplateRequest = (input: VoiceTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
    ...(input.DefaultSubstitutions !== undefined &&
      input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.TemplateDescription !== undefined &&
      input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WaitActivity = (input: WaitActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    ...(input.WaitTime !== undefined &&
      input.WaitTime !== null && { WaitTime: serializeAws_restJson1WaitTime(input.WaitTime, context) }),
  };
};

const serializeAws_restJson1WaitTime = (input: WaitTime, context: __SerdeContext): any => {
  return {
    ...(input.WaitFor !== undefined && input.WaitFor !== null && { WaitFor: input.WaitFor }),
    ...(input.WaitUntil !== undefined && input.WaitUntil !== null && { WaitUntil: input.WaitUntil }),
  };
};

const serializeAws_restJson1WriteApplicationSettingsRequest = (
  input: WriteApplicationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CampaignHook !== undefined &&
      input.CampaignHook !== null && { CampaignHook: serializeAws_restJson1CampaignHook(input.CampaignHook, context) }),
    ...(input.CloudWatchMetricsEnabled !== undefined &&
      input.CloudWatchMetricsEnabled !== null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.EventTaggingEnabled !== undefined &&
      input.EventTaggingEnabled !== null && { EventTaggingEnabled: input.EventTaggingEnabled }),
    ...(input.Limits !== undefined &&
      input.Limits !== null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.QuietTime !== undefined &&
      input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
  };
};

const serializeAws_restJson1WriteCampaignRequest = (input: WriteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalTreatments !== undefined &&
      input.AdditionalTreatments !== null && {
        AdditionalTreatments: serializeAws_restJson1ListOfWriteTreatmentResource(input.AdditionalTreatments, context),
      }),
    ...(input.CustomDeliveryConfiguration !== undefined &&
      input.CustomDeliveryConfiguration !== null && {
        CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
          input.CustomDeliveryConfiguration,
          context
        ),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.HoldoutPercent !== undefined &&
      input.HoldoutPercent !== null && { HoldoutPercent: input.HoldoutPercent }),
    ...(input.Hook !== undefined &&
      input.Hook !== null && { Hook: serializeAws_restJson1CampaignHook(input.Hook, context) }),
    ...(input.IsPaused !== undefined && input.IsPaused !== null && { IsPaused: input.IsPaused }),
    ...(input.Limits !== undefined &&
      input.Limits !== null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.MessageConfiguration !== undefined &&
      input.MessageConfiguration !== null && {
        MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Schedule !== undefined &&
      input.Schedule !== null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion !== undefined &&
      input.SegmentVersion !== null && { SegmentVersion: input.SegmentVersion }),
    ...(input.TemplateConfiguration !== undefined &&
      input.TemplateConfiguration !== null && {
        TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
      }),
    ...(input.TreatmentDescription !== undefined &&
      input.TreatmentDescription !== null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName !== undefined && input.TreatmentName !== null && { TreatmentName: input.TreatmentName }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteEventStream = (input: WriteEventStream, context: __SerdeContext): any => {
  return {
    ...(input.DestinationStreamArn !== undefined &&
      input.DestinationStreamArn !== null && { DestinationStreamArn: input.DestinationStreamArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1WriteJourneyRequest = (input: WriteJourneyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Activities !== undefined &&
      input.Activities !== null && { Activities: serializeAws_restJson1MapOfActivity(input.Activities, context) }),
    ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
    ...(input.LastModifiedDate !== undefined &&
      input.LastModifiedDate !== null && { LastModifiedDate: input.LastModifiedDate }),
    ...(input.Limits !== undefined &&
      input.Limits !== null && { Limits: serializeAws_restJson1JourneyLimits(input.Limits, context) }),
    ...(input.LocalTime !== undefined && input.LocalTime !== null && { LocalTime: input.LocalTime }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.QuietTime !== undefined &&
      input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.RefreshFrequency !== undefined &&
      input.RefreshFrequency !== null && { RefreshFrequency: input.RefreshFrequency }),
    ...(input.RefreshOnSegmentUpdate !== undefined &&
      input.RefreshOnSegmentUpdate !== null && { RefreshOnSegmentUpdate: input.RefreshOnSegmentUpdate }),
    ...(input.Schedule !== undefined &&
      input.Schedule !== null && { Schedule: serializeAws_restJson1JourneySchedule(input.Schedule, context) }),
    ...(input.StartActivity !== undefined && input.StartActivity !== null && { StartActivity: input.StartActivity }),
    ...(input.StartCondition !== undefined &&
      input.StartCondition !== null && {
        StartCondition: serializeAws_restJson1StartCondition(input.StartCondition, context),
      }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.WaitForQuietTime !== undefined &&
      input.WaitForQuietTime !== null && { WaitForQuietTime: input.WaitForQuietTime }),
  };
};

const serializeAws_restJson1WriteSegmentRequest = (input: WriteSegmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_restJson1SegmentDimensions(input.Dimensions, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SegmentGroups !== undefined &&
      input.SegmentGroups !== null && {
        SegmentGroups: serializeAws_restJson1SegmentGroupList(input.SegmentGroups, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteTreatmentResource = (input: WriteTreatmentResource, context: __SerdeContext): any => {
  return {
    ...(input.CustomDeliveryConfiguration !== undefined &&
      input.CustomDeliveryConfiguration !== null && {
        CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
          input.CustomDeliveryConfiguration,
          context
        ),
      }),
    ...(input.MessageConfiguration !== undefined &&
      input.MessageConfiguration !== null && {
        MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
      }),
    ...(input.Schedule !== undefined &&
      input.Schedule !== null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SizePercent !== undefined && input.SizePercent !== null && { SizePercent: input.SizePercent }),
    ...(input.TemplateConfiguration !== undefined &&
      input.TemplateConfiguration !== null && {
        TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
      }),
    ...(input.TreatmentDescription !== undefined &&
      input.TreatmentDescription !== null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName !== undefined && input.TreatmentName !== null && { TreatmentName: input.TreatmentName }),
  };
};

const deserializeAws_restJson1ActivitiesResponse = (output: any, context: __SerdeContext): ActivitiesResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfActivityResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    CUSTOM:
      output.CUSTOM !== undefined && output.CUSTOM !== null
        ? deserializeAws_restJson1CustomMessageActivity(output.CUSTOM, context)
        : undefined,
    ConditionalSplit:
      output.ConditionalSplit !== undefined && output.ConditionalSplit !== null
        ? deserializeAws_restJson1ConditionalSplitActivity(output.ConditionalSplit, context)
        : undefined,
    Description: __expectString(output.Description),
    EMAIL:
      output.EMAIL !== undefined && output.EMAIL !== null
        ? deserializeAws_restJson1EmailMessageActivity(output.EMAIL, context)
        : undefined,
    Holdout:
      output.Holdout !== undefined && output.Holdout !== null
        ? deserializeAws_restJson1HoldoutActivity(output.Holdout, context)
        : undefined,
    MultiCondition:
      output.MultiCondition !== undefined && output.MultiCondition !== null
        ? deserializeAws_restJson1MultiConditionalSplitActivity(output.MultiCondition, context)
        : undefined,
    PUSH:
      output.PUSH !== undefined && output.PUSH !== null
        ? deserializeAws_restJson1PushMessageActivity(output.PUSH, context)
        : undefined,
    RandomSplit:
      output.RandomSplit !== undefined && output.RandomSplit !== null
        ? deserializeAws_restJson1RandomSplitActivity(output.RandomSplit, context)
        : undefined,
    SMS:
      output.SMS !== undefined && output.SMS !== null
        ? deserializeAws_restJson1SMSMessageActivity(output.SMS, context)
        : undefined,
    Wait:
      output.Wait !== undefined && output.Wait !== null
        ? deserializeAws_restJson1WaitActivity(output.Wait, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActivityResponse = (output: any, context: __SerdeContext): ActivityResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignId: __expectString(output.CampaignId),
    End: __expectString(output.End),
    Id: __expectString(output.Id),
    Result: __expectString(output.Result),
    ScheduledStart: __expectString(output.ScheduledStart),
    Start: __expectString(output.Start),
    State: __expectString(output.State),
    SuccessfulEndpointCount: __expectNumber(output.SuccessfulEndpointCount),
    TimezonesCompletedCount: __expectNumber(output.TimezonesCompletedCount),
    TimezonesTotalCount: __expectNumber(output.TimezonesTotalCount),
    TotalEndpointCount: __expectNumber(output.TotalEndpointCount),
    TreatmentId: __expectString(output.TreatmentId),
  } as any;
};

const deserializeAws_restJson1ADMChannelResponse = (output: any, context: __SerdeContext): ADMChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1AndroidPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): AndroidPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    ImageIconUrl: __expectString(output.ImageIconUrl),
    ImageUrl: __expectString(output.ImageUrl),
    RawContent: __expectString(output.RawContent),
    SmallImageIconUrl: __expectString(output.SmallImageIconUrl),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1APNSChannelResponse = (output: any, context: __SerdeContext): APNSChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1APNSPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): APNSPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    MediaUrl: __expectString(output.MediaUrl),
    RawContent: __expectString(output.RawContent),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1APNSSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSSandboxChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1APNSVoipChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1APNSVoipSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipSandboxChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1ApplicationDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): ApplicationDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationSettingsResource = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignHook:
      output.CampaignHook !== undefined && output.CampaignHook !== null
        ? deserializeAws_restJson1CampaignHook(output.CampaignHook, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
        : undefined,
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationsResponse = (output: any, context: __SerdeContext): ApplicationsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfApplicationResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1AttributeDimension = (output: any, context: __SerdeContext): AttributeDimension => {
  return {
    AttributeType: __expectString(output.AttributeType),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOf__string(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AttributesResource = (output: any, context: __SerdeContext): AttributesResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    AttributeType: __expectString(output.AttributeType),
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1ListOf__string(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BaiduChannelResponse = (output: any, context: __SerdeContext): BaiduChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Credential: __expectString(output.Credential),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1BaseKpiResult = (output: any, context: __SerdeContext): BaseKpiResult => {
  return {
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_restJson1ListOfResultRow(output.Rows, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignCustomMessage = (output: any, context: __SerdeContext): CampaignCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

const deserializeAws_restJson1CampaignDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): CampaignDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignId: __expectString(output.CampaignId),
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignEmailMessage = (output: any, context: __SerdeContext): CampaignEmailMessage => {
  return {
    Body: __expectString(output.Body),
    FromAddress: __expectString(output.FromAddress),
    HtmlBody: __expectString(output.HtmlBody),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_restJson1CampaignEventFilter = (output: any, context: __SerdeContext): CampaignEventFilter => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
        : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

const deserializeAws_restJson1CampaignHook = (output: any, context: __SerdeContext): CampaignHook => {
  return {
    LambdaFunctionName: __expectString(output.LambdaFunctionName),
    Mode: __expectString(output.Mode),
    WebUrl: __expectString(output.WebUrl),
  } as any;
};

const deserializeAws_restJson1CampaignLimits = (output: any, context: __SerdeContext): CampaignLimits => {
  return {
    Daily: __expectNumber(output.Daily),
    MaximumDuration: __expectNumber(output.MaximumDuration),
    MessagesPerSecond: __expectNumber(output.MessagesPerSecond),
    Total: __expectNumber(output.Total),
  } as any;
};

const deserializeAws_restJson1CampaignResponse = (output: any, context: __SerdeContext): CampaignResponse => {
  return {
    AdditionalTreatments:
      output.AdditionalTreatments !== undefined && output.AdditionalTreatments !== null
        ? deserializeAws_restJson1ListOfTreatmentResource(output.AdditionalTreatments, context)
        : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    DefaultState:
      output.DefaultState !== undefined && output.DefaultState !== null
        ? deserializeAws_restJson1CampaignState(output.DefaultState, context)
        : undefined,
    Description: __expectString(output.Description),
    HoldoutPercent: __expectNumber(output.HoldoutPercent),
    Hook:
      output.Hook !== undefined && output.Hook !== null
        ? deserializeAws_restJson1CampaignHook(output.Hook, context)
        : undefined,
    Id: __expectString(output.Id),
    IsPaused: __expectBoolean(output.IsPaused),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
        : undefined,
    MessageConfiguration:
      output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1Schedule(output.Schedule, context)
        : undefined,
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectNumber(output.SegmentVersion),
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1CampaignState(output.State, context)
        : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
    Version: __expectNumber(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignSmsMessage = (output: any, context: __SerdeContext): CampaignSmsMessage => {
  return {
    Body: __expectString(output.Body),
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1CampaignsResponse = (output: any, context: __SerdeContext): CampaignsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfCampaignResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1CampaignState = (output: any, context: __SerdeContext): CampaignState => {
  return {
    CampaignStatus: __expectString(output.CampaignStatus),
  } as any;
};

const deserializeAws_restJson1ChannelResponse = (output: any, context: __SerdeContext): ChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1ChannelsResponse = (output: any, context: __SerdeContext): ChannelsResponse => {
  return {
    Channels:
      output.Channels !== undefined && output.Channels !== null
        ? deserializeAws_restJson1MapOfChannelResponse(output.Channels, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Conditions:
      output.Conditions !== undefined && output.Conditions !== null
        ? deserializeAws_restJson1ListOfSimpleCondition(output.Conditions, context)
        : undefined,
    Operator: __expectString(output.Operator),
  } as any;
};

const deserializeAws_restJson1ConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): ConditionalSplitActivity => {
  return {
    Condition:
      output.Condition !== undefined && output.Condition !== null
        ? deserializeAws_restJson1Condition(output.Condition, context)
        : undefined,
    EvaluationWaitTime:
      output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
    FalseActivity: __expectString(output.FalseActivity),
    TrueActivity: __expectString(output.TrueActivity),
  } as any;
};

const deserializeAws_restJson1CreateTemplateMessageBody = (
  output: any,
  context: __SerdeContext
): CreateTemplateMessageBody => {
  return {
    Arn: __expectString(output.Arn),
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1CustomDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDeliveryConfiguration => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes !== undefined && output.EndpointTypes !== null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomMessageActivity = (output: any, context: __SerdeContext): CustomMessageActivity => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes !== undefined && output.EndpointTypes !== null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyCustomMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1DefaultPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): DefaultPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1EmailChannelResponse = (output: any, context: __SerdeContext): EmailChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ConfigurationSet: __expectString(output.ConfigurationSet),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    FromAddress: __expectString(output.FromAddress),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    Identity: __expectString(output.Identity),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    MessagesPerSecond: __expectNumber(output.MessagesPerSecond),
    Platform: __expectString(output.Platform),
    RoleArn: __expectString(output.RoleArn),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1EmailMessageActivity = (output: any, context: __SerdeContext): EmailMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyEmailMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1EmailTemplateResponse = (output: any, context: __SerdeContext): EmailTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    HtmlPart: __expectString(output.HtmlPart),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    Subject: __expectString(output.Subject),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    TextPart: __expectString(output.TextPart),
    Version: __expectString(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointDemographic = (output: any, context: __SerdeContext): EndpointDemographic => {
  return {
    AppVersion: __expectString(output.AppVersion),
    Locale: __expectString(output.Locale),
    Make: __expectString(output.Make),
    Model: __expectString(output.Model),
    ModelVersion: __expectString(output.ModelVersion),
    Platform: __expectString(output.Platform),
    PlatformVersion: __expectString(output.PlatformVersion),
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_restJson1EndpointItemResponse = (output: any, context: __SerdeContext): EndpointItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectNumber(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1EndpointLocation = (output: any, context: __SerdeContext): EndpointLocation => {
  return {
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    Latitude: __expectNumber(output.Latitude),
    Longitude: __expectNumber(output.Longitude),
    PostalCode: __expectString(output.PostalCode),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1EndpointMessageResult = (output: any, context: __SerdeContext): EndpointMessageResult => {
  return {
    Address: __expectString(output.Address),
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectNumber(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

const deserializeAws_restJson1EndpointResponse = (output: any, context: __SerdeContext): EndpointResponse => {
  return {
    Address: __expectString(output.Address),
    ApplicationId: __expectString(output.ApplicationId),
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfListOf__string(output.Attributes, context)
        : undefined,
    ChannelType: __expectString(output.ChannelType),
    CohortId: __expectString(output.CohortId),
    CreationDate: __expectString(output.CreationDate),
    Demographic:
      output.Demographic !== undefined && output.Demographic !== null
        ? deserializeAws_restJson1EndpointDemographic(output.Demographic, context)
        : undefined,
    EffectiveDate: __expectString(output.EffectiveDate),
    EndpointStatus: __expectString(output.EndpointStatus),
    Id: __expectString(output.Id),
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1EndpointLocation(output.Location, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__double(output.Metrics, context)
        : undefined,
    OptOut: __expectString(output.OptOut),
    RequestId: __expectString(output.RequestId),
    User:
      output.User !== undefined && output.User !== null
        ? deserializeAws_restJson1EndpointUser(output.User, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointsResponse = (output: any, context: __SerdeContext): EndpointsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfEndpointResponse(output.Item, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointUser = (output: any, context: __SerdeContext): EndpointUser => {
  return {
    UserAttributes:
      output.UserAttributes !== undefined && output.UserAttributes !== null
        ? deserializeAws_restJson1MapOfListOf__string(output.UserAttributes, context)
        : undefined,
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1EventCondition = (output: any, context: __SerdeContext): EventCondition => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
        : undefined,
    MessageActivity: __expectString(output.MessageActivity),
  } as any;
};

const deserializeAws_restJson1EventDimensions = (output: any, context: __SerdeContext): EventDimensions => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    EventType:
      output.EventType !== undefined && output.EventType !== null
        ? deserializeAws_restJson1SetDimension(output.EventType, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventFilter = (output: any, context: __SerdeContext): EventFilter => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
        : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

const deserializeAws_restJson1EventItemResponse = (output: any, context: __SerdeContext): EventItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectNumber(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1EventsResponse = (output: any, context: __SerdeContext): EventsResponse => {
  return {
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_restJson1MapOfItemResponse(output.Results, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventStartCondition = (output: any, context: __SerdeContext): EventStartCondition => {
  return {
    EventFilter:
      output.EventFilter !== undefined && output.EventFilter !== null
        ? deserializeAws_restJson1EventFilter(output.EventFilter, context)
        : undefined,
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

const deserializeAws_restJson1EventStream = (output: any, context: __SerdeContext): EventStream => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    DestinationStreamArn: __expectString(output.DestinationStreamArn),
    ExternalId: __expectString(output.ExternalId),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1ExportJobResource = (output: any, context: __SerdeContext): ExportJobResource => {
  return {
    RoleArn: __expectString(output.RoleArn),
    S3UrlPrefix: __expectString(output.S3UrlPrefix),
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectNumber(output.SegmentVersion),
  } as any;
};

const deserializeAws_restJson1ExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectNumber(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_restJson1ExportJobResource(output.Definition, context)
        : undefined,
    FailedPieces: __expectNumber(output.FailedPieces),
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_restJson1ListOf__string(output.Failures, context)
        : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectNumber(output.TotalFailures),
    TotalPieces: __expectNumber(output.TotalPieces),
    TotalProcessed: __expectNumber(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ExportJobsResponse = (output: any, context: __SerdeContext): ExportJobsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfExportJobResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1GCMChannelResponse = (output: any, context: __SerdeContext): GCMChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Credential: __expectString(output.Credential),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1GPSCoordinates = (output: any, context: __SerdeContext): GPSCoordinates => {
  return {
    Latitude: __expectNumber(output.Latitude),
    Longitude: __expectNumber(output.Longitude),
  } as any;
};

const deserializeAws_restJson1GPSPointDimension = (output: any, context: __SerdeContext): GPSPointDimension => {
  return {
    Coordinates:
      output.Coordinates !== undefined && output.Coordinates !== null
        ? deserializeAws_restJson1GPSCoordinates(output.Coordinates, context)
        : undefined,
    RangeInKilometers: __expectNumber(output.RangeInKilometers),
  } as any;
};

const deserializeAws_restJson1HoldoutActivity = (output: any, context: __SerdeContext): HoldoutActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectNumber(output.Percentage),
  } as any;
};

const deserializeAws_restJson1ImportJobResource = (output: any, context: __SerdeContext): ImportJobResource => {
  return {
    DefineSegment: __expectBoolean(output.DefineSegment),
    ExternalId: __expectString(output.ExternalId),
    Format: __expectString(output.Format),
    RegisterEndpoints: __expectBoolean(output.RegisterEndpoints),
    RoleArn: __expectString(output.RoleArn),
    S3Url: __expectString(output.S3Url),
    SegmentId: __expectString(output.SegmentId),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

const deserializeAws_restJson1ImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectNumber(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_restJson1ImportJobResource(output.Definition, context)
        : undefined,
    FailedPieces: __expectNumber(output.FailedPieces),
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_restJson1ListOf__string(output.Failures, context)
        : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectNumber(output.TotalFailures),
    TotalPieces: __expectNumber(output.TotalPieces),
    TotalProcessed: __expectNumber(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ImportJobsResponse = (output: any, context: __SerdeContext): ImportJobsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfImportJobResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    EndpointItemResponse:
      output.EndpointItemResponse !== undefined && output.EndpointItemResponse !== null
        ? deserializeAws_restJson1EndpointItemResponse(output.EndpointItemResponse, context)
        : undefined,
    EventsItemResponse:
      output.EventsItemResponse !== undefined && output.EventsItemResponse !== null
        ? deserializeAws_restJson1MapOfEventItemResponse(output.EventsItemResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyCustomMessage = (output: any, context: __SerdeContext): JourneyCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

const deserializeAws_restJson1JourneyDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): JourneyDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    JourneyId: __expectString(output.JourneyId),
    KpiName: __expectString(output.KpiName),
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyEmailMessage = (output: any, context: __SerdeContext): JourneyEmailMessage => {
  return {
    FromAddress: __expectString(output.FromAddress),
  } as any;
};

const deserializeAws_restJson1JourneyExecutionActivityMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionActivityMetricsResponse => {
  return {
    ActivityType: __expectString(output.ActivityType),
    ApplicationId: __expectString(output.ApplicationId),
    JourneyActivityId: __expectString(output.JourneyActivityId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyExecutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionMetricsResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyLimits = (output: any, context: __SerdeContext): JourneyLimits => {
  return {
    DailyCap: __expectNumber(output.DailyCap),
    EndpointReentryCap: __expectNumber(output.EndpointReentryCap),
    EndpointReentryInterval: __expectString(output.EndpointReentryInterval),
    MessagesPerSecond: __expectNumber(output.MessagesPerSecond),
  } as any;
};

const deserializeAws_restJson1JourneyPushMessage = (output: any, context: __SerdeContext): JourneyPushMessage => {
  return {
    TimeToLive: __expectString(output.TimeToLive),
  } as any;
};

const deserializeAws_restJson1JourneyResponse = (output: any, context: __SerdeContext): JourneyResponse => {
  return {
    Activities:
      output.Activities !== undefined && output.Activities !== null
        ? deserializeAws_restJson1MapOfActivity(output.Activities, context)
        : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Id: __expectString(output.Id),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1JourneyLimits(output.Limits, context)
        : undefined,
    LocalTime: __expectBoolean(output.LocalTime),
    Name: __expectString(output.Name),
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
    RefreshFrequency: __expectString(output.RefreshFrequency),
    RefreshOnSegmentUpdate: __expectBoolean(output.RefreshOnSegmentUpdate),
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1JourneySchedule(output.Schedule, context)
        : undefined,
    StartActivity: __expectString(output.StartActivity),
    StartCondition:
      output.StartCondition !== undefined && output.StartCondition !== null
        ? deserializeAws_restJson1StartCondition(output.StartCondition, context)
        : undefined,
    State: __expectString(output.State),
    WaitForQuietTime: __expectBoolean(output.WaitForQuietTime),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneySchedule = (output: any, context: __SerdeContext): JourneySchedule => {
  return {
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_restJson1JourneySMSMessage = (output: any, context: __SerdeContext): JourneySMSMessage => {
  return {
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1JourneysResponse = (output: any, context: __SerdeContext): JourneysResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfJourneyResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1ListOf__EndpointTypesElement = (
  output: any,
  context: __SerdeContext
): (__EndpointTypesElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOfActivityResponse = (output: any, context: __SerdeContext): ActivityResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActivityResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfApplicationResponse = (
  output: any,
  context: __SerdeContext
): ApplicationResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfCampaignResponse = (output: any, context: __SerdeContext): CampaignResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CampaignResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfEndpointResponse = (output: any, context: __SerdeContext): EndpointResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EndpointResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExportJobResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportJobResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfJourneyResponse = (output: any, context: __SerdeContext): JourneyResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JourneyResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfMultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MultiConditionalBranch(entry, context);
    });
};

const deserializeAws_restJson1ListOfRandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RandomSplitEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfRecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommenderConfigurationResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfResultRow = (output: any, context: __SerdeContext): ResultRow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRow(entry, context);
    });
};

const deserializeAws_restJson1ListOfResultRowValue = (output: any, context: __SerdeContext): ResultRowValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRowValue(entry, context);
    });
};

const deserializeAws_restJson1ListOfSegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentDimensions(entry, context);
    });
};

const deserializeAws_restJson1ListOfSegmentGroup = (output: any, context: __SerdeContext): SegmentGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentGroup(entry, context);
    });
};

const deserializeAws_restJson1ListOfSegmentReference = (output: any, context: __SerdeContext): SegmentReference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentReference(entry, context);
    });
};

const deserializeAws_restJson1ListOfSegmentResponse = (output: any, context: __SerdeContext): SegmentResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfSimpleCondition = (output: any, context: __SerdeContext): SimpleCondition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimpleCondition(entry, context);
    });
};

const deserializeAws_restJson1ListOfTemplateResponse = (output: any, context: __SerdeContext): TemplateResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfTemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateVersionResponse(entry, context);
    });
};

const deserializeAws_restJson1ListOfTreatmentResource = (output: any, context: __SerdeContext): TreatmentResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TreatmentResource(entry, context);
    });
};

const deserializeAws_restJson1ListRecommenderConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListRecommenderConfigurationsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfRecommenderConfigurationResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1MapOf__double = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectNumber(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1MapOf__integer = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectNumber(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1MapOfActivity = (output: any, context: __SerdeContext): { [key: string]: Activity } => {
  return Object.entries(output).reduce((acc: { [key: string]: Activity }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Activity(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfAttributeDimension = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeDimension } => {
  return Object.entries(output).reduce((acc: { [key: string]: AttributeDimension }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1AttributeDimension(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfChannelResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: ChannelResponse } => {
  return Object.entries(output).reduce((acc: { [key: string]: ChannelResponse }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ChannelResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: EndpointMessageResult } => {
  return Object.entries(output).reduce((acc: { [key: string]: EndpointMessageResult }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1EndpointMessageResult(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfEventItemResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: EventItemResponse } => {
  return Object.entries(output).reduce((acc: { [key: string]: EventItemResponse }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1EventItemResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfItemResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: ItemResponse } => {
  return Object.entries(output).reduce((acc: { [key: string]: ItemResponse }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ItemResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfListOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ListOf__string(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfMapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: EndpointMessageResult } } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: { [key: string]: EndpointMessageResult } }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1MapOfEndpointMessageResult(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1MapOfMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: MessageResult } => {
  return Object.entries(output).reduce((acc: { [key: string]: MessageResult }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MessageResult(value, context),
    };
  }, {});
};

const deserializeAws_restJson1MapOfMetricDimension = (
  output: any,
  context: __SerdeContext
): { [key: string]: MetricDimension } => {
  return Object.entries(output).reduce((acc: { [key: string]: MetricDimension }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MetricDimension(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    ImageIconUrl: __expectString(output.ImageIconUrl),
    ImageSmallIconUrl: __expectString(output.ImageSmallIconUrl),
    ImageUrl: __expectString(output.ImageUrl),
    JsonBody: __expectString(output.JsonBody),
    MediaUrl: __expectString(output.MediaUrl),
    RawContent: __expectString(output.RawContent),
    SilentPush: __expectBoolean(output.SilentPush),
    TimeToLive: __expectNumber(output.TimeToLive),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1MessageBody = (output: any, context: __SerdeContext): MessageBody => {
  return {
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1MessageConfiguration = (output: any, context: __SerdeContext): MessageConfiguration => {
  return {
    ADMMessage:
      output.ADMMessage !== undefined && output.ADMMessage !== null
        ? deserializeAws_restJson1Message(output.ADMMessage, context)
        : undefined,
    APNSMessage:
      output.APNSMessage !== undefined && output.APNSMessage !== null
        ? deserializeAws_restJson1Message(output.APNSMessage, context)
        : undefined,
    BaiduMessage:
      output.BaiduMessage !== undefined && output.BaiduMessage !== null
        ? deserializeAws_restJson1Message(output.BaiduMessage, context)
        : undefined,
    CustomMessage:
      output.CustomMessage !== undefined && output.CustomMessage !== null
        ? deserializeAws_restJson1CampaignCustomMessage(output.CustomMessage, context)
        : undefined,
    DefaultMessage:
      output.DefaultMessage !== undefined && output.DefaultMessage !== null
        ? deserializeAws_restJson1Message(output.DefaultMessage, context)
        : undefined,
    EmailMessage:
      output.EmailMessage !== undefined && output.EmailMessage !== null
        ? deserializeAws_restJson1CampaignEmailMessage(output.EmailMessage, context)
        : undefined,
    GCMMessage:
      output.GCMMessage !== undefined && output.GCMMessage !== null
        ? deserializeAws_restJson1Message(output.GCMMessage, context)
        : undefined,
    SMSMessage:
      output.SMSMessage !== undefined && output.SMSMessage !== null
        ? deserializeAws_restJson1CampaignSmsMessage(output.SMSMessage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResponse = (output: any, context: __SerdeContext): MessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndpointResult:
      output.EndpointResult !== undefined && output.EndpointResult !== null
        ? deserializeAws_restJson1MapOfEndpointMessageResult(output.EndpointResult, context)
        : undefined,
    RequestId: __expectString(output.RequestId),
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_restJson1MapOfMessageResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResult = (output: any, context: __SerdeContext): MessageResult => {
  return {
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectNumber(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

const deserializeAws_restJson1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Value: __expectNumber(output.Value),
  } as any;
};

const deserializeAws_restJson1MultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch => {
  return {
    Condition:
      output.Condition !== undefined && output.Condition !== null
        ? deserializeAws_restJson1SimpleCondition(output.Condition, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
  } as any;
};

const deserializeAws_restJson1MultiConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): MultiConditionalSplitActivity => {
  return {
    Branches:
      output.Branches !== undefined && output.Branches !== null
        ? deserializeAws_restJson1ListOfMultiConditionalBranch(output.Branches, context)
        : undefined,
    DefaultActivity: __expectString(output.DefaultActivity),
    EvaluationWaitTime:
      output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NumberValidateResponse = (
  output: any,
  context: __SerdeContext
): NumberValidateResponse => {
  return {
    Carrier: __expectString(output.Carrier),
    City: __expectString(output.City),
    CleansedPhoneNumberE164: __expectString(output.CleansedPhoneNumberE164),
    CleansedPhoneNumberNational: __expectString(output.CleansedPhoneNumberNational),
    Country: __expectString(output.Country),
    CountryCodeIso2: __expectString(output.CountryCodeIso2),
    CountryCodeNumeric: __expectString(output.CountryCodeNumeric),
    County: __expectString(output.County),
    OriginalCountryCodeIso2: __expectString(output.OriginalCountryCodeIso2),
    OriginalPhoneNumber: __expectString(output.OriginalPhoneNumber),
    PhoneType: __expectString(output.PhoneType),
    PhoneTypeCode: __expectNumber(output.PhoneTypeCode),
    Timezone: __expectString(output.Timezone),
    ZipCode: __expectString(output.ZipCode),
  } as any;
};

const deserializeAws_restJson1PushMessageActivity = (output: any, context: __SerdeContext): PushMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyPushMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1PushNotificationTemplateResponse = (
  output: any,
  context: __SerdeContext
): PushNotificationTemplateResponse => {
  return {
    ADM:
      output.ADM !== undefined && output.ADM !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.ADM, context)
        : undefined,
    APNS:
      output.APNS !== undefined && output.APNS !== null
        ? deserializeAws_restJson1APNSPushNotificationTemplate(output.APNS, context)
        : undefined,
    Arn: __expectString(output.Arn),
    Baidu:
      output.Baidu !== undefined && output.Baidu !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.Baidu, context)
        : undefined,
    CreationDate: __expectString(output.CreationDate),
    Default:
      output.Default !== undefined && output.Default !== null
        ? deserializeAws_restJson1DefaultPushNotificationTemplate(output.Default, context)
        : undefined,
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    GCM:
      output.GCM !== undefined && output.GCM !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.GCM, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QuietTime = (output: any, context: __SerdeContext): QuietTime => {
  return {
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

const deserializeAws_restJson1RandomSplitActivity = (output: any, context: __SerdeContext): RandomSplitActivity => {
  return {
    Branches:
      output.Branches !== undefined && output.Branches !== null
        ? deserializeAws_restJson1ListOfRandomSplitEntry(output.Branches, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectNumber(output.Percentage),
  } as any;
};

const deserializeAws_restJson1RecencyDimension = (output: any, context: __SerdeContext): RecencyDimension => {
  return {
    Duration: __expectString(output.Duration),
    RecencyType: __expectString(output.RecencyType),
  } as any;
};

const deserializeAws_restJson1RecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOf__string(output.Attributes, context)
        : undefined,
    CreationDate: __expectString(output.CreationDate),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    RecommendationProviderIdType: __expectString(output.RecommendationProviderIdType),
    RecommendationProviderRoleArn: __expectString(output.RecommendationProviderRoleArn),
    RecommendationProviderUri: __expectString(output.RecommendationProviderUri),
    RecommendationTransformerUri: __expectString(output.RecommendationTransformerUri),
    RecommendationsDisplayName: __expectString(output.RecommendationsDisplayName),
    RecommendationsPerMessage: __expectNumber(output.RecommendationsPerMessage),
  } as any;
};

const deserializeAws_restJson1ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    GroupedBys:
      output.GroupedBys !== undefined && output.GroupedBys !== null
        ? deserializeAws_restJson1ListOfResultRowValue(output.GroupedBys, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOfResultRowValue(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultRowValue = (output: any, context: __SerdeContext): ResultRowValue => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    EndTime: __expectString(output.EndTime),
    EventFilter:
      output.EventFilter !== undefined && output.EventFilter !== null
        ? deserializeAws_restJson1CampaignEventFilter(output.EventFilter, context)
        : undefined,
    Frequency: __expectString(output.Frequency),
    IsLocalTime: __expectBoolean(output.IsLocalTime),
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
    StartTime: __expectString(output.StartTime),
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_restJson1SegmentBehaviors = (output: any, context: __SerdeContext): SegmentBehaviors => {
  return {
    Recency:
      output.Recency !== undefined && output.Recency !== null
        ? deserializeAws_restJson1RecencyDimension(output.Recency, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentCondition = (output: any, context: __SerdeContext): SegmentCondition => {
  return {
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

const deserializeAws_restJson1SegmentDemographics = (output: any, context: __SerdeContext): SegmentDemographics => {
  return {
    AppVersion:
      output.AppVersion !== undefined && output.AppVersion !== null
        ? deserializeAws_restJson1SetDimension(output.AppVersion, context)
        : undefined,
    Channel:
      output.Channel !== undefined && output.Channel !== null
        ? deserializeAws_restJson1SetDimension(output.Channel, context)
        : undefined,
    DeviceType:
      output.DeviceType !== undefined && output.DeviceType !== null
        ? deserializeAws_restJson1SetDimension(output.DeviceType, context)
        : undefined,
    Make:
      output.Make !== undefined && output.Make !== null
        ? deserializeAws_restJson1SetDimension(output.Make, context)
        : undefined,
    Model:
      output.Model !== undefined && output.Model !== null
        ? deserializeAws_restJson1SetDimension(output.Model, context)
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? deserializeAws_restJson1SetDimension(output.Platform, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    Behavior:
      output.Behavior !== undefined && output.Behavior !== null
        ? deserializeAws_restJson1SegmentBehaviors(output.Behavior, context)
        : undefined,
    Demographic:
      output.Demographic !== undefined && output.Demographic !== null
        ? deserializeAws_restJson1SegmentDemographics(output.Demographic, context)
        : undefined,
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1SegmentLocation(output.Location, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
        : undefined,
    UserAttributes:
      output.UserAttributes !== undefined && output.UserAttributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.UserAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1ListOfSegmentDimensions(output.Dimensions, context)
        : undefined,
    SourceSegments:
      output.SourceSegments !== undefined && output.SourceSegments !== null
        ? deserializeAws_restJson1ListOfSegmentReference(output.SourceSegments, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1SegmentGroupList = (output: any, context: __SerdeContext): SegmentGroupList => {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_restJson1ListOfSegmentGroup(output.Groups, context)
        : undefined,
    Include: __expectString(output.Include),
  } as any;
};

const deserializeAws_restJson1SegmentImportResource = (output: any, context: __SerdeContext): SegmentImportResource => {
  return {
    ChannelCounts:
      output.ChannelCounts !== undefined && output.ChannelCounts !== null
        ? deserializeAws_restJson1MapOf__integer(output.ChannelCounts, context)
        : undefined,
    ExternalId: __expectString(output.ExternalId),
    Format: __expectString(output.Format),
    RoleArn: __expectString(output.RoleArn),
    S3Url: __expectString(output.S3Url),
    Size: __expectNumber(output.Size),
  } as any;
};

const deserializeAws_restJson1SegmentLocation = (output: any, context: __SerdeContext): SegmentLocation => {
  return {
    Country:
      output.Country !== undefined && output.Country !== null
        ? deserializeAws_restJson1SetDimension(output.Country, context)
        : undefined,
    GPSPoint:
      output.GPSPoint !== undefined && output.GPSPoint !== null
        ? deserializeAws_restJson1GPSPointDimension(output.GPSPoint, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentReference = (output: any, context: __SerdeContext): SegmentReference => {
  return {
    Id: __expectString(output.Id),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1SegmentResponse = (output: any, context: __SerdeContext): SegmentResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1SegmentDimensions(output.Dimensions, context)
        : undefined,
    Id: __expectString(output.Id),
    ImportDefinition:
      output.ImportDefinition !== undefined && output.ImportDefinition !== null
        ? deserializeAws_restJson1SegmentImportResource(output.ImportDefinition, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    SegmentGroups:
      output.SegmentGroups !== undefined && output.SegmentGroups !== null
        ? deserializeAws_restJson1SegmentGroupList(output.SegmentGroups, context)
        : undefined,
    SegmentType: __expectString(output.SegmentType),
    Version: __expectNumber(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentsResponse = (output: any, context: __SerdeContext): SegmentsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfSegmentResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1SendUsersMessageResponse = (
  output: any,
  context: __SerdeContext
): SendUsersMessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    RequestId: __expectString(output.RequestId),
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_restJson1MapOfMapOfEndpointMessageResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SetDimension = (output: any, context: __SerdeContext): SetDimension => {
  return {
    DimensionType: __expectString(output.DimensionType),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOf__string(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleCondition = (output: any, context: __SerdeContext): SimpleCondition => {
  return {
    EventCondition:
      output.EventCondition !== undefined && output.EventCondition !== null
        ? deserializeAws_restJson1EventCondition(output.EventCondition, context)
        : undefined,
    SegmentCondition:
      output.SegmentCondition !== undefined && output.SegmentCondition !== null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentCondition, context)
        : undefined,
    SegmentDimensions:
      output.segmentDimensions !== undefined && output.segmentDimensions !== null
        ? deserializeAws_restJson1SegmentDimensions(output.segmentDimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SMSChannelResponse = (output: any, context: __SerdeContext): SMSChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    PromotionalMessagesPerSecond: __expectNumber(output.PromotionalMessagesPerSecond),
    SenderId: __expectString(output.SenderId),
    ShortCode: __expectString(output.ShortCode),
    TransactionalMessagesPerSecond: __expectNumber(output.TransactionalMessagesPerSecond),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1SMSMessageActivity = (output: any, context: __SerdeContext): SMSMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneySMSMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1SMSTemplateResponse = (output: any, context: __SerdeContext): SMSTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Body: __expectString(output.Body),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StartCondition = (output: any, context: __SerdeContext): StartCondition => {
  return {
    Description: __expectString(output.Description),
    EventStartCondition:
      output.EventStartCondition !== undefined && output.EventStartCondition !== null
        ? deserializeAws_restJson1EventStartCondition(output.EventStartCondition, context)
        : undefined,
    SegmentStartCondition:
      output.SegmentStartCondition !== undefined && output.SegmentStartCondition !== null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentStartCondition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagsModel = (output: any, context: __SerdeContext): TagsModel => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Template = (output: any, context: __SerdeContext): Template => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return {
    EmailTemplate:
      output.EmailTemplate !== undefined && output.EmailTemplate !== null
        ? deserializeAws_restJson1Template(output.EmailTemplate, context)
        : undefined,
    PushTemplate:
      output.PushTemplate !== undefined && output.PushTemplate !== null
        ? deserializeAws_restJson1Template(output.PushTemplate, context)
        : undefined,
    SMSTemplate:
      output.SMSTemplate !== undefined && output.SMSTemplate !== null
        ? deserializeAws_restJson1Template(output.SMSTemplate, context)
        : undefined,
    VoiceTemplate:
      output.VoiceTemplate !== undefined && output.VoiceTemplate !== null
        ? deserializeAws_restJson1Template(output.VoiceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateResponse = (output: any, context: __SerdeContext): TemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplatesResponse = (output: any, context: __SerdeContext): TemplatesResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfTemplateResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1TemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1TemplateVersionsResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionsResponse => {
  return {
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfTemplateVersionResponse(output.Item, context)
        : undefined,
    Message: __expectString(output.Message),
    NextToken: __expectString(output.NextToken),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1TreatmentResource = (output: any, context: __SerdeContext): TreatmentResource => {
  return {
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
    MessageConfiguration:
      output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1Schedule(output.Schedule, context)
        : undefined,
    SizePercent: __expectNumber(output.SizePercent),
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1CampaignState(output.State, context)
        : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
  } as any;
};

const deserializeAws_restJson1VoiceChannelResponse = (output: any, context: __SerdeContext): VoiceChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectNumber(output.Version),
  } as any;
};

const deserializeAws_restJson1VoiceTemplateResponse = (output: any, context: __SerdeContext): VoiceTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Body: __expectString(output.Body),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    VoiceId: __expectString(output.VoiceId),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WaitActivity = (output: any, context: __SerdeContext): WaitActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    WaitTime:
      output.WaitTime !== undefined && output.WaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.WaitTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WaitTime = (output: any, context: __SerdeContext): WaitTime => {
  return {
    WaitFor: __expectString(output.WaitFor),
    WaitUntil: __expectString(output.WaitUntil),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
