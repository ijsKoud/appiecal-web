/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AutomaticSyncStatus: ResolverTypeWrapper<AutomaticSyncStatus>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CaldavCalendarListEntry: ResolverTypeWrapper<CaldavCalendarListEntry>;
  CaldavLinkStatus: ResolverTypeWrapper<CaldavLinkStatus>;
  EntraLinkStatus: ResolverTypeWrapper<EntraLinkStatus>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SyncResults: ResolverTypeWrapper<SyncResults>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AutomaticSyncStatus: AutomaticSyncStatus;
  Boolean: Scalars['Boolean']['output'];
  CaldavCalendarListEntry: CaldavCalendarListEntry;
  CaldavLinkStatus: CaldavLinkStatus;
  EntraLinkStatus: EntraLinkStatus;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  SyncResults: SyncResults;
};

export type AutomaticSyncStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutomaticSyncStatus'] = ResolversParentTypes['AutomaticSyncStatus']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type CaldavCalendarListEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaldavCalendarListEntry'] = ResolversParentTypes['CaldavCalendarListEntry']> = {
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CaldavLinkStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaldavLinkStatus'] = ResolversParentTypes['CaldavLinkStatus']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type EntraLinkStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntraLinkStatus'] = ResolversParentTypes['EntraLinkStatus']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  linkCaldav?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLinkCaldavArgs, 'authScope' | 'authToken' | 'baseUrl'>>;
  linkEntraUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLinkEntraUserArgs, 'code'>>;
  setAutomaticSync?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetAutomaticSyncArgs, 'state'>>;
  setCalendar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetCalendarArgs, 'href'>>;
  triggerSync?: Resolver<ResolversTypes['SyncResults'], ParentType, ContextType, RequireFields<MutationTriggerSyncArgs, 'endDate' | 'startDate'>>;
  unlinkCaldav?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  unlinkEntraUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAuthorizationUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  getAutomaticSyncStatus?: Resolver<ResolversTypes['AutomaticSyncStatus'], ParentType, ContextType>;
  getCaldavLinkStatus?: Resolver<ResolversTypes['CaldavLinkStatus'], ParentType, ContextType>;
  getCalendarList?: Resolver<Array<Maybe<ResolversTypes['CaldavCalendarListEntry']>>, ParentType, ContextType>;
  getEntraLinkStatus?: Resolver<ResolversTypes['EntraLinkStatus'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SyncResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SyncResults'] = ResolversParentTypes['SyncResults']> = {
  deletedShifts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  newShifts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedShifts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AutomaticSyncStatus?: AutomaticSyncStatusResolvers<ContextType>;
  CaldavCalendarListEntry?: CaldavCalendarListEntryResolvers<ContextType>;
  CaldavLinkStatus?: CaldavLinkStatusResolvers<ContextType>;
  EntraLinkStatus?: EntraLinkStatusResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SyncResults?: SyncResultsResolvers<ContextType>;
};

