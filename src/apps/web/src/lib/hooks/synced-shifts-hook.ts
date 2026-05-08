import { GetSyncedShiftsDocument } from "@/components/gql/_generated";
import { useQuery } from "@apollo/client/react";
import { useMemo, useState } from "react";
import { getMondays } from "../utils";

export const useSyncedShifts = () => {
	const [startDate, setStartDate] = useState(getMondays().thisMonday);
	const [endDate, setEndDate] = useState(getMondays().mondayPlus3Weeks);

	const getSyncedShifts = useQuery(GetSyncedShiftsDocument, { variables: { startDate: startDate.toISOString(), endDate: endDate.toISOString() } });
	const shifts = useMemo(() => {
		const shiftData = getSyncedShifts.data?.getSyncedShifts ?? [];
		return Array.from(shiftData).sort((a, b) => +new Date(a.startDate) - +new Date(b.startDate));
	}, [getSyncedShifts]);

	const changeDates = (newStartDate: Date, newEndDate: Date) => {
		setStartDate(newStartDate);
		setEndDate(newEndDate);
		getSyncedShifts.refetch({ startDate: newStartDate.toISOString(), endDate: newEndDate.toISOString() });
	};

	return {
		changeDates,
		startDate,
		endDate,
		shifts
	};
};
