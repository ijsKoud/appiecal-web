import {
	CaldavCalendarListEntry,
	GetActiveCalendarDocument,
	GetCaldavLinkStatusDocument,
	GetCalendarListDocument,
	LinkCaldavDocument,
	SetCalendarDocument,
	UnlinkCaldavDocument
} from "@/components/gql/_generated";
import { useMutation, useQuery } from "@apollo/client/react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

export const useCaldav = () => {
	const caldavLinkStatus = useQuery(GetCaldavLinkStatusDocument);
	const calendarList = useQuery(GetCalendarListDocument);
	const activeCalendar = useQuery(GetActiveCalendarDocument, { errorPolicy: "all" });

	const [linkCaldav, { data: linkCaldavData }] = useMutation(LinkCaldavDocument, { errorPolicy: "all" });
	const [unlinkCaldavFn, { data: unlinkCaldavData }] = useMutation(UnlinkCaldavDocument, { errorPolicy: "all" });
	const [setCalendarFn] = useMutation(SetCalendarDocument, { errorPolicy: "all" });

	const isActive = useMemo(() => caldavLinkStatus.data?.getCaldavLinkStatus.active ?? false, [caldavLinkStatus.data]);
	const calendars = useMemo(() => (calendarList.data?.getCalendarList ?? []).filter(Boolean) as CaldavCalendarListEntry[], [calendarList]);

	useEffect(() => {
		caldavLinkStatus.refetch();
		calendarList.refetch();
		activeCalendar.refetch();
	}, [linkCaldavData, unlinkCaldavData]);

	useEffect(() => {
		if (caldavLinkStatus.error)
			toast("Unable to get CALDAV status", {
				description: caldavLinkStatus.error.message
			});
	}, [caldavLinkStatus.error]);

	useEffect(() => {
		if (calendarList.error)
			toast("Unable to get CALDAV status", {
				description: calendarList.error.message
			});
	}, [calendarList.error]);

	const unlinkCaldav = async () => {
		const result = await unlinkCaldavFn();
		if (result.error?.message) {
			toast("Could not unlink calendar", { description: result.error?.message });
			return;
		}
	};

	const setCalendar = async (href: string) => {
		const result = await setCalendarFn({ variables: { href } });
		activeCalendar.refetch();

		if (result.error?.message) {
			toast("Could not set calendar", { description: result.error?.message });
			return;
		}

		toast("Calendar updated!");
	};

	return {
		isActive,
		calendars,
		activeCalendar,
		setCalendar,
		linkCaldav,
		unlinkCaldav
	};
};
