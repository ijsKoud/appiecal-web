import type { ClientOptions } from "openapi-fetch";

export const getApiClientOptions = (module: string) =>
	({
		baseUrl: process.env.BASE_API_URL!.replaceAll("{module}", module)
	}) satisfies ClientOptions;
