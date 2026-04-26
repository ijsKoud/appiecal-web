"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" enableSystem defaultTheme="dark">
			<Toaster />
			{children}
		</ThemeProvider>
	);
};

export default Providers;
