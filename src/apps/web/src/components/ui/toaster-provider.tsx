import { useTheme } from "next-themes";
import { FC } from "react";
import { Toaster } from "sonner";

export const ToasterProvider: FC = () => {
	const { theme } = useTheme();

	return <Toaster theme={(theme as any) ?? "dark"} />;
};
