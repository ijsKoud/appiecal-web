import { Menubar, MenubarContent, MenubarGroup, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { SyncTab } from "./sync-tab";
import { EntraTab } from "./entra-tab";
import { CalendarTab } from "./calendar-tab";

export const ActionHeader = () => {
	return (
		<Menubar className="w-fit">
			<EntraTab />
			<CalendarTab />
			<SyncTab />
		</Menubar>
	);
};
