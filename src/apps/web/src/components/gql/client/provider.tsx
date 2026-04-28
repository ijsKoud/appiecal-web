"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import type { FC, PropsWithChildren } from "react";
import { getClient } from "./server";

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => (
	<ApolloNextAppProvider makeClient={getClient}>{children}</ApolloNextAppProvider>
);
