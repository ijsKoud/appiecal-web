"use client";

import { FC } from "react";
import { useSyncedShifts } from "@/lib/hooks/synced-shifts-hook";
import { LandingTabProps } from "..";
import { DatePickerButton } from "./data-picker-button";
import { Shift } from "@/components/gql/_generated";
import { format } from "date-fns/format";

export const SyncedShifts: FC<LandingTabProps> = ({ isAllowedToSync }) => {
	return (
		<div>
			<h2 className="text-xl font-bold">Synced shifts</h2>
			{isAllowedToSync ? <SyncedShiftsDetails /> : <p>"Missing @AH account and calendar link"</p>}
		</div>
	);
};

export const SyncedShiftsDetails: FC = () => {
	const { shifts, startDate, endDate, changeDates } = useSyncedShifts();
	return (
		<div className="flex flex-col gap-4 mt-2">
			<DatePickerButton startDate={startDate} endDate={endDate} onChange={changeDates} />
			<div>
				{shifts.map((data) => (
					<SyncedShift key={data.id} {...data} />
				))}
			</div>
		</div>
	);
};

export const SyncedShift: FC<Shift> = ({ startDate, endDate, storeId, departments }) => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4">
				<span>{storeId}</span>
				<div>
					<span>{format(startDate, "LLL dd, hh:mm:ss a")}</span>
					<span> - </span>
					<span>{format(endDate, "LLL dd, hh:mm:ss a")}</span>
				</div>
			</div>
			<span>{departments.join(", ")}</span>
		</div>
	);
};
