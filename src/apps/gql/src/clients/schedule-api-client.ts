import { Inject, Injectable, Scope } from "graphql-modules";
import type { paths } from "../types/schedule.js";
import { BaseClient } from "./base-client.js";
import { ClientOptions } from "openapi-fetch";
import { SCHEDULE_API_FETCH_CLIENT_OPTIONS } from "#providers/api-fetch-client-options/token.js";
import { USER_AUTH_TOKEN } from "#providers/user-auth-token/token.js";

@Injectable({ scope: Scope.Operation })
export class ScheduleApiClient extends BaseClient<paths> {
	public constructor(
		@Inject(SCHEDULE_API_FETCH_CLIENT_OPTIONS) clientOptions: ClientOptions,
		@Inject(USER_AUTH_TOKEN) userAuthToken: string | null
	) {
		super(clientOptions, userAuthToken);
	}
	public async getSyncedShifts(
		startDate: string,
		endDate: string
	): Promise<paths["/v1/schedule/me"]["get"]["responses"]["200"]["content"]["application/json"]> {
		const response = await this.client.GET("/v1/schedule/me", {
			params: { query: { "start-date": startDate, "end-date": endDate } },
			headers: { ...this.userAuthHeaders }
		});
		if (response.error) this.errorHandling(response.error);

		return response.data!;
	}
}
