import { Injectable, Scope } from "graphql-modules";
import { SyncApiClient } from "#clients/sync-api-client.js";
import type { AutomaticSyncStatus, SyncResults } from "#generated-types/graphql.js";
import { triggerSyncToSyncResults } from "./transformer/trigger-sync-to-sync-results.js";
import { DateTimeToZonedDateString } from "./transformer/date-time-to-zoned-date-string.js";

@Injectable({
	scope: Scope.Operation
})
export class SyncProvider {
	public constructor(private syncApiClient: SyncApiClient) {}

	public async getAutomaticSyncStatus(): Promise<AutomaticSyncStatus> {
		const isActive = await this.syncApiClient.getSyncStatus();
		return { active: isActive };
	}

	public async setAutomaticSyncStatus(state: boolean): Promise<void> {
		await this.syncApiClient.setAutomaticSync(state);
	}

	public async triggerSync(startDate: string, endDate: string): Promise<SyncResults> {
		const start = DateTimeToZonedDateString(new Date(startDate));
		const end = DateTimeToZonedDateString(new Date(endDate));

		console.log(start, end);
		const results = await this.syncApiClient.triggerManualSync(start, end);
		return triggerSyncToSyncResults(results);
	}
}
