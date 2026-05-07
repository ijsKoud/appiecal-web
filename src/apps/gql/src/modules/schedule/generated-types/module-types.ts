/* eslint-disable */
import * as Types from "../../../generated-types/graphql.js";
import * as gm from "graphql-modules";
export namespace ScheduleModule {
  interface DefinedFields {
    Query: 'getSyncedShifts';
    Shift: 'id' | 'storeId' | 'startDate' | 'endDate' | 'departments';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Shift = Pick<Types.Shift, DefinedFields['Shift']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type ShiftResolvers = Pick<Types.ShiftResolvers, DefinedFields['Shift']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Shift?: ShiftResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getSyncedShifts?: gm.Middleware[];
    };
    Shift?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      storeId?: gm.Middleware[];
      startDate?: gm.Middleware[];
      endDate?: gm.Middleware[];
      departments?: gm.Middleware[];
    };
  };
}