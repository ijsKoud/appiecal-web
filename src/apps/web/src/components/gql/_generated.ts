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

export type CaldavCalendarListEntry = {
  __typename?: 'CaldavCalendarListEntry';
  href: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CaldavLinkStatus = {
  __typename?: 'CaldavLinkStatus';
  active: Scalars['Boolean']['output'];
};

export type EntraLinkStatus = {
  __typename?: 'EntraLinkStatus';
  active: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  linkCaldav: Scalars['Boolean']['output'];
  linkEntraUser: Scalars['Boolean']['output'];
  setAutomaticSync?: Maybe<Scalars['Boolean']['output']>;
  setCalendar: Scalars['Boolean']['output'];
  triggerSync: SyncResults;
  unlinkCaldav: Scalars['Boolean']['output'];
  unlinkEntraUser: Scalars['Boolean']['output'];
  version?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationLinkCaldavArgs = {
  authScope: Scalars['String']['input'];
  authToken: Scalars['String']['input'];
  baseUrl: Scalars['String']['input'];
};


export type MutationLinkEntraUserArgs = {
  code: Scalars['String']['input'];
};


export type MutationSetAutomaticSyncArgs = {
  state: Scalars['Boolean']['input'];
};


export type MutationSetCalendarArgs = {
  href: Scalars['String']['input'];
};


export type MutationTriggerSyncArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAuthorizationUrl: Scalars['String']['output'];
  getAutomaticSyncStatus: AutomaticSyncStatus;
  getCaldavLinkStatus: CaldavLinkStatus;
  getCalendarList: Array<Maybe<CaldavCalendarListEntry>>;
  getEntraLinkStatus: EntraLinkStatus;
  version?: Maybe<Scalars['String']['output']>;
};

export type SyncResults = {
  __typename?: 'SyncResults';
  deletedShifts: Array<Scalars['String']['output']>;
  newShifts: Array<Scalars['String']['output']>;
  updatedShifts: Array<Scalars['String']['output']>;
};

export type SetCalendarMutationVariables = Exact<{
  href: Scalars['String']['input'];
}>;


export type SetCalendarMutation = { __typename?: 'Mutation', setCalendar: boolean };

export type LinkCaldavMutationVariables = Exact<{
  baseUrl: Scalars['String']['input'];
  authScope: Scalars['String']['input'];
  authToken: Scalars['String']['input'];
}>;


export type LinkCaldavMutation = { __typename?: 'Mutation', linkCaldav: boolean };

export type UnlinkCaldavMutationVariables = Exact<{ [key: string]: never; }>;


export type UnlinkCaldavMutation = { __typename?: 'Mutation', unlinkCaldav: boolean };

export type GetCalendarListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCalendarListQuery = { __typename?: 'Query', getCalendarList: Array<{ __typename?: 'CaldavCalendarListEntry', href: string, name: string } | null> };

export type GetCaldavStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCaldavStatusQuery = { __typename?: 'Query', getEntraLinkStatus: { __typename?: 'EntraLinkStatus', active: boolean } };

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


export const SetCalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setCalendar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"href"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCalendar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"href"},"value":{"kind":"Variable","name":{"kind":"Name","value":"href"}}}]}]}}]} as unknown as DocumentNode<SetCalendarMutation, SetCalendarMutationVariables>;
export const LinkCaldavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"linkCaldav"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authScope"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkCaldav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"authScope"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authScope"}}},{"kind":"Argument","name":{"kind":"Name","value":"authToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authToken"}}}]}]}}]} as unknown as DocumentNode<LinkCaldavMutation, LinkCaldavMutationVariables>;
export const UnlinkCaldavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unlinkCaldav"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkCaldav"}}]}}]} as unknown as DocumentNode<UnlinkCaldavMutation, UnlinkCaldavMutationVariables>;
export const GetCalendarListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCalendarList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCalendarList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCalendarListQuery, GetCalendarListQueryVariables>;
export const GetCaldavStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCaldavStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntraLinkStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetCaldavStatusQuery, GetCaldavStatusQueryVariables>;
export const LinkEntraUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"linkEntraUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkEntraUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<LinkEntraUserMutation, LinkEntraUserMutationVariables>;
export const UnlinkEntraUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unlinkEntraUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkEntraUser"}}]}}]} as unknown as DocumentNode<UnlinkEntraUserMutation, UnlinkEntraUserMutationVariables>;
export const GetAuthorizationUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthorizationUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthorizationUrl"}}]}}]} as unknown as DocumentNode<GetAuthorizationUrlQuery, GetAuthorizationUrlQueryVariables>;
export const GetEntraLinkStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntraLinkStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntraLinkStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetEntraLinkStatusQuery, GetEntraLinkStatusQueryVariables>;
export const GetAutomaticSyncStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>;