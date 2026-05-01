/* eslint-disable */
import * as Types from "../../../generated-types/graphql.js";
import * as gm from "graphql-modules";
export namespace IdpModule {
  interface DefinedFields {
    Mutation: 'linkEntraUser' | 'unlinkEntraUser';
    Query: 'getEntraLinkStatus' | 'getAuthorizationUrl';
    EntraLinkStatus: 'active';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type EntraLinkStatus = Pick<Types.EntraLinkStatus, DefinedFields['EntraLinkStatus']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type EntraLinkStatusResolvers = Pick<Types.EntraLinkStatusResolvers, DefinedFields['EntraLinkStatus']>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
    EntraLinkStatus?: EntraLinkStatusResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      linkEntraUser?: gm.Middleware[];
      unlinkEntraUser?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getEntraLinkStatus?: gm.Middleware[];
      getAuthorizationUrl?: gm.Middleware[];
    };
    EntraLinkStatus?: {
      '*'?: gm.Middleware[];
      active?: gm.Middleware[];
    };
  };
}