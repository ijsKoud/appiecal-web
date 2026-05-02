/* eslint-disable */
import * as Types from "../../../generated-types/graphql.js";
import * as gm from "graphql-modules";
export namespace CalendarModule {
  interface DefinedFields {
    Mutation: 'linkCaldav' | 'unlinkCaldav' | 'setCalendar';
    Query: 'getCalendarList' | 'getCaldavLinkStatus';
    CaldavLinkStatus: 'active';
    CaldavCalendarListEntry: 'name' | 'href';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type CaldavCalendarListEntry = Pick<Types.CaldavCalendarListEntry, DefinedFields['CaldavCalendarListEntry']>;
  export type CaldavLinkStatus = Pick<Types.CaldavLinkStatus, DefinedFields['CaldavLinkStatus']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type CaldavLinkStatusResolvers = Pick<Types.CaldavLinkStatusResolvers, DefinedFields['CaldavLinkStatus']>;
  export type CaldavCalendarListEntryResolvers = Pick<Types.CaldavCalendarListEntryResolvers, DefinedFields['CaldavCalendarListEntry']>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
    CaldavLinkStatus?: CaldavLinkStatusResolvers;
    CaldavCalendarListEntry?: CaldavCalendarListEntryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      linkCaldav?: gm.Middleware[];
      unlinkCaldav?: gm.Middleware[];
      setCalendar?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getCalendarList?: gm.Middleware[];
      getCaldavLinkStatus?: gm.Middleware[];
    };
    CaldavLinkStatus?: {
      '*'?: gm.Middleware[];
      active?: gm.Middleware[];
    };
    CaldavCalendarListEntry?: {
      '*'?: gm.Middleware[];
      name?: gm.Middleware[];
      href?: gm.Middleware[];
    };
  };
}