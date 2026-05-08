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
import { FC, useState } from "react";
import { useAutomaticSyncStatus } from "@/lib/hooks/automatic-sync-hook";
import { useIsAllowedToSync } from "@/lib/hooks/is-allowed-to-sync-hook";
import { ManualSyncDialog } from "@/components/dialogs/manual-sync-dialog";

export const SyncTab: FC = () => {
	const { isActive, loading, setAutomaticSync, triggerManualSync } = useAutomaticSyncStatus();
	const isAllowedToSync = useIsAllowedToSync();

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<>
			<ManualSyncDialog
				triggerSync={(startDate, endDate) => triggerManualSync({ variables: { startDate, endDate } })}
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}
			/>
			<MenubarMenu>
				<MenubarTrigger>Sync</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarRadioGroup value={isActive ? "auto" : "manual"}>
							<MenubarRadioItem onClick={() => setAutomaticSync(true)} disabled={loading} value="auto">
								Automatic
							</MenubarRadioItem>
							<MenubarRadioItem onClick={() => setAutomaticSync(false)} disabled={loading} value="manual">
								Manual
							</MenubarRadioItem>
						</MenubarRadioGroup>
					</MenubarGroup>
					<MenubarSeparator />
					<MenubarGroup>
						<MenubarItem disabled={!isAllowedToSync} onClick={() => setIsDialogOpen(true)}>
							Sync now
						</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</>
	);
};
