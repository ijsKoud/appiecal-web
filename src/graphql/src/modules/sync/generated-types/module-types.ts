/* eslint-disable */
import * as Types from "../../../generated-types/graphql.js";
import * as gm from "graphql-modules";
export namespace SyncModule {
  interface DefinedFields {
    Mutation: 'setAutomaticSync' | 'triggerSync';
    Query: 'getAutomaticSyncStatus';
    AutomaticSyncStatus: 'active';
    SyncResults: 'newShifts' | 'updatedShifts' | 'deletedShifts';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type SyncResults = Pick<Types.SyncResults, DefinedFields['SyncResults']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type AutomaticSyncStatus = Pick<Types.AutomaticSyncStatus, DefinedFields['AutomaticSyncStatus']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type AutomaticSyncStatusResolvers = Pick<Types.AutomaticSyncStatusResolvers, DefinedFields['AutomaticSyncStatus']>;
  export type SyncResultsResolvers = Pick<Types.SyncResultsResolvers, DefinedFields['SyncResults']>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
    AutomaticSyncStatus?: AutomaticSyncStatusResolvers;
    SyncResults?: SyncResultsResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      setAutomaticSync?: gm.Middleware[];
      triggerSync?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getAutomaticSyncStatus?: gm.Middleware[];
    };
    AutomaticSyncStatus?: {
      '*'?: gm.Middleware[];
      active?: gm.Middleware[];
    };
    SyncResults?: {
      '*'?: gm.Middleware[];
      newShifts?: gm.Middleware[];
      updatedShifts?: gm.Middleware[];
      deletedShifts?: gm.Middleware[];
    };
  };
}