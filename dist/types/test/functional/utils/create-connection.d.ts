import { DataSource, DataSourceOptions } from 'typeorm';
export type DbType = 'mysql' | 'postgres';
export declare const createConnection: (dbType: DbType, partialOptions?: any) => Promise<DataSource>;
export declare const createConnectionAndResetData: (dbType: DbType, partialOptions?: Partial<DataSourceOptions>) => Promise<DataSource>;
export declare const useCleanDatabase: (dbType: DbType, partialOptions?: Partial<DataSourceOptions>, invoke?: (connection: DataSource) => Promise<void>) => Promise<void>;
