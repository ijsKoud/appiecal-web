import { Injectable, Scope } from "graphql-modules";
import { ScheduleApiClient } from "#clients/schedule-api-client.js";
import { Shift } from "#generated-types/graphql.js";
import { DateTimeToZonedDateString } from "#modules/sync/transformer/date-time-to-zoned-date-string.js";
import { syncedShiftsToGql } from "./transformer/synced-shifts-to-gql.js";

@Injectable({
	scope: Scope.Operation
})
export class ScheduleProvider {
	public constructor(private scheduleApiClient: ScheduleApiClient) {}

	public async getSyncedShifts(startDate: string, endDate: string): Promise<Shift[]> {
		const start = DateTimeToZonedDateString(new Date(startDate));
		const end = DateTimeToZonedDateString(new Date(endDate));

		const results = await this.scheduleApiClient.getSyncedShifts(start, end);
		return results.shifts.map(syncedShiftsToGql);
	}
}
