import { SyncApiClient } from "#clients/sync-api-client.js";
import { SyncResults } from "#generated-types/graphql.js";

export const triggerSyncToSyncResults = (results: Awaited<ReturnType<SyncApiClient["triggerManualSync"]>>): SyncResults => {
	return {
		newShifts: results.shifts.new,
		deletedShifts: results.shifts.delete,
		updatedShifts: results.shifts.update
	};
};
