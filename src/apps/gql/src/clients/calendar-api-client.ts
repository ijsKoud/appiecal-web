import { Inject, Injectable, Scope } from "graphql-modules";
import type { paths } from "../types/calendar.js";
import { BaseClient } from "./base-client.js";
import { ClientOptions } from "openapi-fetch";
import { CALENDAR_API_FETCH_CLIENT_OPTIONS } from "#providers/api-fetch-client-options/token.js";
import { USER_AUTH_TOKEN } from "#providers/user-auth-token/token.js";

@Injectable({ scope: Scope.Operation })
export class CalendarApiClient extends BaseClient<paths> {
	public constructor(
		@Inject(CALENDAR_API_FETCH_CLIENT_OPTIONS) clientOptions: ClientOptions,
		@Inject(USER_AUTH_TOKEN) userAuthToken: string | null
	) {
		super(clientOptions, userAuthToken);
	}

	public async getCaldavLinkStatus(): Promise<boolean> {
		const response = await this.client.GET("/v1/credentials/status", { parseAs: "text", headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		if (response?.data === "linked") return true;
		return false;
	}

	public async linkCaldav(baseUrl: string, authScope: string, authToken: string): Promise<boolean> {
		const response = await this.client.POST("/v1/credentials/link", {
			params: { query: { "base-url": baseUrl, "auth-scope": authScope, "auth-token": authToken } },
			headers: { ...this.userAuthHeaders }
		});

		if (response.error) this.errorHandling(response.error);

		return true;
	}

	public async unlinkCaldav(): Promise<boolean> {
		const response = await this.client.DELETE("/v1/credentials/unlink", { headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		return true;
	}

	public async getCalendarList(): Promise<paths["/v1/calendar/list"]["get"]["responses"]["200"]["content"]["application/json"]> {
		const response = await this.client.GET("/v1/calendar/list", { headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		return response.data ?? [];
	}

	public async setCalendar(href: string): Promise<boolean> {
		const response = await this.client.POST("/v1/calendar/set", { params: { query: { href } }, headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		return true;
	}
}
