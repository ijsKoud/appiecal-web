import { Scope, type Provider } from "graphql-modules";
import {
	CALENDAR_API_FETCH_CLIENT_OPTIONS,
	IDP_API_FETCH_CLIENT_OPTIONS,
	SCHEDULE_API_FETCH_CLIENT_OPTIONS,
	SYNC_API_FETCH_CLIENT_OPTIONS
} from "./token.js";
import { getApiClientOptions } from "#constants.js";

export const SyncApiFetchClientOptionsProvider: Provider = {
	provide: SYNC_API_FETCH_CLIENT_OPTIONS,
	scope: Scope.Operation,
	useFactory: () => getApiClientOptions("sync")
};

export const CalendarApiFetchClientOptionsProvider: Provider = {
	provide: CALENDAR_API_FETCH_CLIENT_OPTIONS,
	scope: Scope.Operation,
	useFactory: () => getApiClientOptions("calendar")
};

export const ScheduleApiFetchClientOptionsProvider: Provider = {
	provide: SCHEDULE_API_FETCH_CLIENT_OPTIONS,
	scope: Scope.Operation,
	useFactory: () => getApiClientOptions("schedule")
};

export const IdpApiFetchClientOptionsProvider: Provider = {
	provide: IDP_API_FETCH_CLIENT_OPTIONS,
	scope: Scope.Operation,
	useFactory: () => getApiClientOptions("idp")
};
