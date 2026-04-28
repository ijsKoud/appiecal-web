import type { Client, ClientOptions } from "openapi-fetch";
import createClient from "openapi-fetch";
import { getAuthHeaders } from "../utils/get-auth-headers.js";
import type { components } from "../types/sync.js";
import z from "zod";

export class BaseClient<P extends {}> {
	protected client: Client<P, `${string}/${string}`>;

	public constructor(
		clientOptions: ClientOptions,
		protected userAuthToken: string | null
	) {
		this.client = createClient(clientOptions);
	}

	protected get userAuthHeaders(): Record<string, string> {
		const zodSchema = z.string("Missing x-authorization header").nonempty("Missing x-authorization header value");
		const token = zodSchema.parse(this.userAuthToken);

		return getAuthHeaders(token);
	}

	protected errorHandling(error: components["schemas"]["ErrorResponse"]) {
		throw new Error(`Request failed with status ${error.status}, message=${error.message}`, {
			cause: error.instance
		});
	}
}
