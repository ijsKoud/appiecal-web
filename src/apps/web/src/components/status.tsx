import { FC } from "react";
import { LandingTabProps } from "./landing/tabs";

export const Status: FC<LandingTabProps> = ({ isAllowedToSync }) => {
	return (
		<div>
			<h2 className="text-xl font-bold">Status</h2>
			<p>{isAllowedToSync ? "@AH Account and calendar linked" : "Missing @AH account and calendar link"}</p>
		</div>
	);
};
