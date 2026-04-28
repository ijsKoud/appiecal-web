"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "sonner";
import { ApolloProvider } from "@/components/gql/client/provider";
import { ToasterProvider } from "@/components/ui/toaster-provider";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class" enableSystem defaultTheme="dark">
				<ToasterProvider />
				<ApolloProvider>{children}</ApolloProvider>
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
