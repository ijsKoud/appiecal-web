export const DateTimeToZonedDateString = (date: Date): string => {
	date.setUTCHours(0, 0, 0, 0);
	const hoursOffset = date.getTimezoneOffset() / 60;
	const offsetString = (hoursOffset < 0 ? hoursOffset * -1 : hoursOffset).toString().padStart(2, "0");

	return date.toISOString().replace("Z", `+${offsetString}:00`);
};
