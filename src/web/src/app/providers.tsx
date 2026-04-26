"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "sonner";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class" enableSystem defaultTheme="dark">
				<Toaster />
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
