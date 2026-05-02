import { Injectable, Scope } from "graphql-modules";
import { IdpApiClient } from "#clients/idp-api-client.js";
import { EntraLinkStatus } from "#generated-types/graphql.js";

@Injectable({
	scope: Scope.Operation
})
export class IdpProvider {
	public constructor(private idpApiClient: IdpApiClient) {}

	public async getEntraLinkStatus(): Promise<EntraLinkStatus> {
		const isActive = await this.idpApiClient.getEntraLinkStatus();
		return { active: isActive };
	}

	public async getAuthorizationUrl(): Promise<string> {
		const url = await this.idpApiClient.getAuthorizationUrl();
		return url;
	}

	public async unlinkEntraUser(): Promise<boolean> {
		const result = await this.idpApiClient.unlinkEntraUser();
		return result;
	}

	public async linkEntraUser(code: string): Promise<boolean> {
		const result = await this.idpApiClient.linkEntraUser(code);
		return result;
	}
}
