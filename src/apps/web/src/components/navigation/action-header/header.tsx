import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger
} from "@/components/ui/menubar";
import { SyncTab } from "./sync-tab";

export const ActionHeader = () => {
	return (
		<Menubar className="w-fit">
			<MenubarMenu>
				<MenubarTrigger>@AH Account</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarItem>Link account</MenubarItem>
						{/* <MenubarItem variant="destructive">Unlink account</MenubarItem> */}
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>

			<MenubarMenu>
				<MenubarTrigger>Calendar</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						{/* <MenubarSub>
							<MenubarSubTrigger>Calendar for schedule</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarRadioGroup value="">
									<MenubarRadioItem value="">Albert Heijn</MenubarRadioItem>
								</MenubarRadioGroup>
							</MenubarSubContent>
						</MenubarSub> */}

						<MenubarItem>Link via CALDAV</MenubarItem>
						{/* <MenubarItem variant="destructive">Unlink calendar</MenubarItem> */}
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>

			<SyncTab />
		</Menubar>
	);
};
