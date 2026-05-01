import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AutomaticSyncStatus = {
  __typename?: 'AutomaticSyncStatus';
  active: Scalars['Boolean']['output'];
};

export type EntraLinkStatus = {
  __typename?: 'EntraLinkStatus';
  active: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  linkEntraUser: Scalars['Boolean']['output'];
  setAutomaticSync?: Maybe<Scalars['Boolean']['output']>;
  triggerSync: SyncResults;
  unlinkEntraUser: Scalars['Boolean']['output'];
  version?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationLinkEntraUserArgs = {
  code: Scalars['String']['input'];
};


export type MutationSetAutomaticSyncArgs = {
  state: Scalars['Boolean']['input'];
};


export type MutationTriggerSyncArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAuthorizationUrl: Scalars['String']['output'];
  getAutomaticSyncStatus: AutomaticSyncStatus;
  getEntraLinkStatus: EntraLinkStatus;
  version?: Maybe<Scalars['String']['output']>;
};

export type SyncResults = {
  __typename?: 'SyncResults';
  deletedShifts: Array<Scalars['String']['output']>;
  newShifts: Array<Scalars['String']['output']>;
  updatedShifts: Array<Scalars['String']['output']>;
};

export type LinkEntraUserMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LinkEntraUserMutation = { __typename?: 'Mutation', linkEntraUser: boolean };

export type UnlinkEntraUserMutationVariables = Exact<{ [key: string]: never; }>;


export type UnlinkEntraUserMutation = { __typename?: 'Mutation', unlinkEntraUser: boolean };

export type GetAuthorizationUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorizationUrlQuery = { __typename?: 'Query', getAuthorizationUrl: string };

export type GetEntraLinkStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntraLinkStatusQuery = { __typename?: 'Query', getEntraLinkStatus: { __typename?: 'EntraLinkStatus', active: boolean } };

export type GetAutomaticSyncStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAutomaticSyncStatusQuery = { __typename?: 'Query', getAutomaticSyncStatus: { __typename?: 'AutomaticSyncStatus', active: boolean } };


export const LinkEntraUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"linkEntraUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkEntraUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<LinkEntraUserMutation, LinkEntraUserMutationVariables>;
export const UnlinkEntraUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unlinkEntraUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkEntraUser"}}]}}]} as unknown as DocumentNode<UnlinkEntraUserMutation, UnlinkEntraUserMutationVariables>;
export const GetAuthorizationUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthorizationUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthorizationUrl"}}]}}]} as unknown as DocumentNode<GetAuthorizationUrlQuery, GetAuthorizationUrlQueryVariables>;
export const GetEntraLinkStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntraLinkStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntraLinkStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetEntraLinkStatusQuery, GetEntraLinkStatusQueryVariables>;
export const GetAutomaticSyncStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>;