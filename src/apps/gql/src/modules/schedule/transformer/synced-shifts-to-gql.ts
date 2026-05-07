import { ScheduleApiClient } from "#clients/schedule-api-client.js";
import { Shift } from "#generated-types/graphql.js";

export const syncedShiftsToGql = (shift: Awaited<ReturnType<ScheduleApiClient["getSyncedShifts"]>>["shifts"][0]): Shift => {
	return {
		id: shift.id,
		departments: shift.departments,
		storeId: shift.storeId,
		startDate: shift.startDate,
		endDate: shift.endDate
	};
};
