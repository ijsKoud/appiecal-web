import type { FC, PropsWithChildren } from "react";
import { ScrollElementIntoView } from "./navigation/scroll-element-into-view";
import { cn } from "@/lib/utils";

export const MainContent: FC<PropsWithChildren<MainContentProps>> = ({ children, className }) => {
	return (
		<main className={cn("grid place-items-center", className)}>
			<div className="w-full max-w-5xl px-2">{children}</div>
			<ScrollElementIntoView />
		</main>
	);
};

type MainContentProps = {
	className?: string;
};
