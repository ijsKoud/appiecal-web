/* eslint-disable */
import * as Types from "../../../generated-types/graphql.js";
import * as gm from "graphql-modules";
export namespace BaseModule {
  interface DefinedFields {
    Mutation: 'version';
    Query: 'version';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      version?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      version?: gm.Middleware[];
    };
  };
}