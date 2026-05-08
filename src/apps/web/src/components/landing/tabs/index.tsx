"use client";

import { Status } from "@/components/status";
import { SyncedShifts } from "./synced-shifts/index";
import { useIsAllowedToSync } from "@/lib/hooks/is-allowed-to-sync-hook";
import { FC } from "react";

export type LandingTabProps = {
	isAllowedToSync: boolean;
};

export const LandingTabs: FC = () => {
	const isAllowedToSync = useIsAllowedToSync();

	return (
		<div className="flex flex-col gap-16">
			<Status isAllowedToSync={isAllowedToSync} />
			<SyncedShifts isAllowedToSync={isAllowedToSync} />
		</div>
	);
};
