import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutBackupVaultNotificationsInput shape
 */
export interface PutBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.</p>
   */
  SNSTopicArn: string;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p>
   */
  BackupVaultEvents:
    | Array<
        | "BACKUP_JOB_STARTED"
        | "BACKUP_JOB_COMPLETED"
        | "RESTORE_JOB_STARTED"
        | "RESTORE_JOB_COMPLETED"
        | "RECOVERY_POINT_MODIFIED"
        | "BACKUP_PLAN_CREATED"
        | "BACKUP_PLAN_MODIFIED"
        | string
      >
    | Iterable<
        | "BACKUP_JOB_STARTED"
        | "BACKUP_JOB_COMPLETED"
        | "RESTORE_JOB_STARTED"
        | "RESTORE_JOB_COMPLETED"
        | "RECOVERY_POINT_MODIFIED"
        | "BACKUP_PLAN_CREATED"
        | "BACKUP_PLAN_MODIFIED"
        | string
      >;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
