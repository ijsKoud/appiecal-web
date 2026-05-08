import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getMondays() {
	const today = new Date();

	const day = today.getDay();
	const diffToMonday = day === 0 ? -6 : 1 - day;

	const thisMonday = new Date(today);
	thisMonday.setDate(today.getDate() + diffToMonday);

	const mondayPlus3Weeks = new Date(thisMonday);
	mondayPlus3Weeks.setDate(thisMonday.getDate() + 21);

	return { thisMonday, mondayPlus3Weeks };
}
