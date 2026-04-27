import { Inject, Injectable, Scope } from "graphql-modules";
import type { paths } from "../types/sync.js";
import { BaseClient } from "./base-client.js";
import { ClientOptions } from "openapi-fetch";
import { SYNC_API_FETCH_CLIENT_OPTIONS } from "#providers/api-fetch-client-options/token.js";
import { USER_AUTH_TOKEN } from "#providers/user-auth-token/token.js";

@Injectable({ scope: Scope.Operation })
export class SyncApiClient extends BaseClient<paths> {
	public constructor(@Inject(SYNC_API_FETCH_CLIENT_OPTIONS) clientOptions: ClientOptions, @Inject(USER_AUTH_TOKEN) userAuthToken: string | null) {
		super(clientOptions, userAuthToken);
	}
	public async getSyncStatus(): Promise<paths["/v1/sync/automatic/status"]["get"]["responses"]["200"]["content"]["*/*"]> {
		const response = await this.client.GET("/v1/sync/automatic/status", { headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		return response.data!;
	}

	public async setAutomaticSync(state: boolean) {
		const response = await this.client.POST("/v1/sync/automatic/set", { params: { query: { state } }, headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);
	}

	public async triggerManualSync(
		startDate: string,
		endDate: string
	): Promise<paths["/v1/sync/manual"]["get"]["responses"]["200"]["content"]["*/*"]> {
		const response = await this.client.GET("/v1/sync/manual", {
			params: { query: { startDate, endDate } },
			headers: { ...this.userAuthHeaders }
		});
		if (response.error) this.errorHandling(response.error);

		return response.data!;
	}
}
