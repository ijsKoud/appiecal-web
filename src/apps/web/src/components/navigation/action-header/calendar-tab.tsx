"use client";

import {
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger
} from "@/components/ui/menubar";
import { FC, useState } from "react";
import { useCaldav } from "./hooks/caldav-hook";
import { AlertDialog } from "@/components/alert-dialog";
import { CaldavSetupDialog } from "@/components/dialogs/caldav-setup-dialog";

export const CalendarTab: FC = () => {
	const { isActive, linkCaldav, unlinkCaldav, calendars, setCalendar } = useCaldav();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

	return (
		<>
			<CaldavSetupDialog
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}
				linkCaldav={(baseUrl, authScope, authToken) => linkCaldav({ variables: { baseUrl, authScope, authToken } })}
			/>
			<AlertDialog
				open={isDeleteDialogOpen}
				onOpenChange={setIsDeleteDialogOpen}
				description="Unlinking your calendar disables the syncing of your work schedule."
				continueAction={unlinkCaldav}
			/>
			<MenubarMenu>
				<MenubarTrigger>Calendar</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						{isActive && (
							<>
								<MenubarSub>
									<MenubarSubTrigger>Calendar for schedule</MenubarSubTrigger>
									<MenubarSubContent>
										<MenubarRadioGroup value="">
											{calendars.map((calendar) => (
												<MenubarRadioItem onClick={() => setCalendar(calendar.href)} value={calendar.href}>
													{calendar.name}
												</MenubarRadioItem>
											))}
										</MenubarRadioGroup>
									</MenubarSubContent>
								</MenubarSub>
								<MenubarSeparator />
							</>
						)}

						{isActive ? (
							<MenubarItem variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
								Unlink calendar
							</MenubarItem>
						) : (
							<MenubarItem onClick={() => setIsDialogOpen(true)}>Link via CALDAV</MenubarItem>
						)}
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</>
	);
};
