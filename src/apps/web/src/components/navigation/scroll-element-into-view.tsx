"use client";

import { FC, useEffect } from "react";

export const ScrollElementIntoView: FC = () => {
	useEffect(() => {
		const path = window.location.hash;
		if (path.includes("#")) {
			const hash = path.split("#")[1];
			const element = document.getElementById(hash);

			if (element) element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return <></>;
};
