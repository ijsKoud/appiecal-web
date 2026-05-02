import { Injectable, Scope } from "graphql-modules";
import { CaldavCalendarListEntry, CaldavLinkStatus } from "#generated-types/graphql.js";
import { CalendarApiClient } from "#clients/calendar-api-client.js";

@Injectable({
	scope: Scope.Operation
})
export class CalendarProvider {
	public constructor(private calendarApiClient: CalendarApiClient) {}

	public async getCaldavLinkStatus(): Promise<CaldavLinkStatus> {
		const isActive = await this.calendarApiClient.getCaldavLinkStatus();
		return { active: isActive };
	}

	public async unlinkCaldav(): Promise<boolean> {
		const result = await this.calendarApiClient.unlinkCaldav();
		return result;
	}

	public async linkCaldav(baseUrl: string, authScope: string, authToken: string): Promise<boolean> {
		const result = await this.calendarApiClient.linkCaldav(baseUrl, authScope, authToken);
		return result;
	}

	public async getCalendarList(): Promise<CaldavCalendarListEntry[]> {
		const list = await this.calendarApiClient.getCalendarList();
		return list;
	}

	public async setCalendar(href: string): Promise<boolean> {
		const result = await this.calendarApiClient.setCalendar(href);
		return result;
	}
}
