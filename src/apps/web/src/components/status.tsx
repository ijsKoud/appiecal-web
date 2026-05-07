"use client";

import { FC } from "react";
import { useIsAllowedToSync } from "../lib/hooks/is-allowed-to-sync-hook";

export const Status: FC = () => {
	const isAllowedToSync = useIsAllowedToSync();

	return (
		<div>
			<h2 className="text-xl font-bold">Status</h2>
			<p>{isAllowedToSync ? "@AH Account and calendar linked" : "Missing @AH account and calendar link"}</p>
		</div>
	);
};
