"use client";

import {
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarTrigger
} from "@/components/ui/menubar";
import { FC } from "react";
import { useAutomaticSyncStatus } from "./hooks/automatic-sync-hook";

export const SyncTab: FC = () => {
	const { isActive, loading } = useAutomaticSyncStatus();

	return (
		<MenubarMenu>
			<MenubarTrigger>Sync</MenubarTrigger>
			<MenubarContent>
				<MenubarGroup>
					<MenubarRadioGroup value={isActive ? "auto" : "manual"}>
						<MenubarRadioItem disabled={loading} value="auto">
							Automatic
						</MenubarRadioItem>
						<MenubarRadioItem disabled={loading} value="manual">
							Manual
						</MenubarRadioItem>
					</MenubarRadioGroup>
				</MenubarGroup>
				<MenubarSeparator />
				<MenubarGroup>
					<MenubarItem disabled>Sync now</MenubarItem>
				</MenubarGroup>
			</MenubarContent>
		</MenubarMenu>
	);
};
