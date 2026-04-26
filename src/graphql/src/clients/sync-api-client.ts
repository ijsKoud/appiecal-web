import { singleton } from "tsyringe";
import type { paths } from "../types/sync.js";
import { BaseClient } from "./base-client.js";

@singleton()
export class SyncApiClient extends BaseClient<paths> {
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
