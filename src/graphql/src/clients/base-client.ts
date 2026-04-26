import type { Client, ClientOptions } from "openapi-fetch";
import createClient from "openapi-fetch";
import { getAuthHeaders } from "../utils/get-auth-headers.js";
import type { components } from "../types/sync.js";
import { ApiClientOptions } from "../constants.js";

export class BaseClient<P extends {}> {
	protected client: Client<P, `${string}/${string}`>;
	private userAuthToken: string | null = null;

	public constructor(clientOptions: ClientOptions = ApiClientOptions) {
		this.client = createClient(clientOptions);
	}

	public setUserAuthToken(token: string | null) {
		this.userAuthToken = token;
	}

	protected get userAuthHeaders(): Record<string, string> {
		if (!this.userAuthToken) throw new Error("Unable to set auth headers because of missing userAuthToken");
		return getAuthHeaders(this.userAuthToken);
	}

	protected errorHandling(error: components["schemas"]["ErrorResponse"]) {
		throw new Error(`Request failed with status ${error.status}, message=${error.message}`, {
			cause: error.instance
		});
	}
}
