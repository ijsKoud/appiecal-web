import { Inject, Injectable, Scope } from "graphql-modules";
import type { paths } from "../types/idp.js";
import { BaseClient } from "./base-client.js";
import { ClientOptions } from "openapi-fetch";
import { IDP_API_FETCH_CLIENT_OPTIONS } from "#providers/api-fetch-client-options/token.js";
import { USER_AUTH_TOKEN } from "#providers/user-auth-token/token.js";

@Injectable({ scope: Scope.Operation })
export class IdpApiClient extends BaseClient<paths> {
	public constructor(@Inject(IDP_API_FETCH_CLIENT_OPTIONS) clientOptions: ClientOptions, @Inject(USER_AUTH_TOKEN) userAuthToken: string | null) {
		super(clientOptions, userAuthToken);
	}

	public async getAuthorizationUrl(): Promise<string> {
		const response = await this.client.GET("/v1/entra/start", { parseAs: "text" });
		if (response.error) this.errorHandling(response.error);
		if (!response.data) throw new Error("Invalid URL returned from IDP back-end");

		return response.data;
	}

	public async linkEntraUser(code: string): Promise<boolean> {
		const response = await this.client.POST("/v1/entra/end", {
			params: { query: { code: code } },
			headers: { ...this.userAuthHeaders }
		});
		if (response.error) this.errorHandling(response.error);

		return true;
	}

	public async unlinkEntraUser(): Promise<boolean> {
		const response = await this.client.DELETE("/v1/token/revoke-tokens", { headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		return true;
	}

	public async getEntraLinkStatus(): Promise<boolean> {
		const response = await this.client.GET("/v1/entra/status", { parseAs: "text", headers: { ...this.userAuthHeaders } });
		if (response.error) this.errorHandling(response.error);

		if (response?.data === "linked") return true;
		return false;
	}
}
