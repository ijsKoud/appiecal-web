import { Injectable, Scope } from "graphql-modules";
import { SyncApiClient } from "#clients/sync-api-client.js";
import type { AutomaticSyncStatus } from "#generated-types/graphql.js";

@Injectable({
	scope: Scope.Operation
})
export class SyncProvider {
	public constructor(private syncApiClient: SyncApiClient) {}

	public async getAutomaticSyncStatus(): Promise<AutomaticSyncStatus> {
		const isActive = await this.syncApiClient.getSyncStatus();
		return { active: isActive };
	}
}
