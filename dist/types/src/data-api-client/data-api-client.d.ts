import { ExecuteStatementCommandInput, CommitTransactionCommandInput, BatchExecuteStatementCommandInput, RollbackTransactionCommandInput, BeginTransactionCommandInput } from '@aws-sdk/client-rds-data';
/** ***************************************************************** */
/**  INSTANTIATION                                                 * */
/** ***************************************************************** */
/**
 * Create a Data API client instance
 * @param {object} params
 * @param {'mysql'|'pg'} [params.engine=mysql] The type of database (MySQL or Postgres)
 * @param {string} params.resourceArn The ARN of your Aurora Serverless Cluster
 * @param {string} params.secretArn The ARN of the secret associated with your
 *   database credentials
 * @param {string} [params.database] The name of the database
 * @param {boolean} [params.hydrateColumnNames=true] Return objects with column
 *   names as keys
 * @param {object} [params.options={}] Configuration object passed directly
 *   into RDSDataService
 * @param {object} [params.formatOptions] Date-related formatting options
 * @param {boolean} [params.formatOptions.deserializeDate=false]
 * @param {boolean} [params.formatOptions.treatAsLocalDate=false]
 * @param {boolean} [params.keepAlive] DEPRECATED
 * @param {boolean} [params.sslEnabled=true] DEPRECATED
 * @param {string} [params.region] DEPRECATED
 *
 */
export declare const createDataApiClient: (params?: any) => {
    query: (...x: any[]) => Promise<any>;
    transaction: (x: any) => {
        query(...args: any[]): any;
        rollback(fn: any): any;
        commit(): Promise<any[]>;
    };
    batchExecuteStatement: (args: Exclude<BatchExecuteStatementCommandInput, 'resourceArn' | 'secretArn' | 'database'>) => Promise<import("@aws-sdk/client-rds-data").BatchExecuteStatementCommandOutput>;
    beginTransaction: (args: Exclude<BeginTransactionCommandInput, 'resourceArn' | 'secretArn' | 'database'>) => Promise<import("@aws-sdk/client-rds-data").BeginTransactionCommandOutput>;
    commitTransaction: (args: Exclude<CommitTransactionCommandInput, 'resourceArn' | 'secretArn' | 'database'>) => Promise<import("@aws-sdk/client-rds-data").CommitTransactionCommandOutput>;
    executeStatement: (args: Exclude<ExecuteStatementCommandInput, 'resourceArn' | 'secretArn' | 'database'>) => Promise<import("@aws-sdk/client-rds-data").ExecuteStatementCommandOutput>;
    rollbackTransaction: (args: Exclude<RollbackTransactionCommandInput, 'resourceArn' | 'secretArn' | 'database'>) => Promise<import("@aws-sdk/client-rds-data").RollbackTransactionCommandOutput>;
};
