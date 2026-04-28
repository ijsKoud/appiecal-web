import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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


export const GetAutomaticSyncStatusDocument = gql`
    query getAutomaticSyncStatus {
  getAutomaticSyncStatus {
    active
  }
}
    `;

/**
 * __useGetAutomaticSyncStatusQuery__
 *
 * To run a query within a React component, call `useGetAutomaticSyncStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAutomaticSyncStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAutomaticSyncStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAutomaticSyncStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>(GetAutomaticSyncStatusDocument, options);
      }
export function useGetAutomaticSyncStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>(GetAutomaticSyncStatusDocument, options);
        }
// @ts-ignore
export function useGetAutomaticSyncStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>;
export function useGetAutomaticSyncStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAutomaticSyncStatusQuery | undefined, GetAutomaticSyncStatusQueryVariables>;
export function useGetAutomaticSyncStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>(GetAutomaticSyncStatusDocument, options);
        }
export type GetAutomaticSyncStatusQueryHookResult = ReturnType<typeof useGetAutomaticSyncStatusQuery>;
export type GetAutomaticSyncStatusLazyQueryHookResult = ReturnType<typeof useGetAutomaticSyncStatusLazyQuery>;
export type GetAutomaticSyncStatusSuspenseQueryHookResult = ReturnType<typeof useGetAutomaticSyncStatusSuspenseQuery>;
export type GetAutomaticSyncStatusQueryResult = ApolloReactCommon.QueryResult<GetAutomaticSyncStatusQuery, GetAutomaticSyncStatusQueryVariables>;