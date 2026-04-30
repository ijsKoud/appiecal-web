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

export type Mutation = {
  __typename?: 'Mutation';
  setAutomaticSync?: Maybe<Scalars['Boolean']['output']>;
  triggerSync: SyncResults;
  version?: Maybe<Scalars['Boolean']['output']>;
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
  getAutomaticSyncStatus: AutomaticSyncStatus;
  version?: Maybe<Scalars['String']['output']>;
};

export type SyncResults = {
  __typename?: 'SyncResults';
  deletedShifts: Array<Scalars['String']['output']>;
  newShifts: Array<Scalars['String']['output']>;
  updatedShifts: Array<Scalars['String']['output']>;
};

export type GetAutomaticSyncStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAutomaticSyncStatusQuery = { __typename?: 'Query', getAutomaticSyncStatus: { __typename?: 'AutomaticSyncStatus', active: boolean } };


export const GetAutomaticSyncStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAutomaticSyncStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>;