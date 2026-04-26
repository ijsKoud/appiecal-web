import type { ClientOptions } from "openapi-fetch";

export const ApiClientOptions: ClientOptions = {
	baseUrl: process.env.BASE_API_URL
};
