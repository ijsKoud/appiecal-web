import "reflect-metadata";
import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createApplication } from "graphql-modules";
import { syncModule } from "./modules/sync/module.js";
import { getAuthFromHeaders } from "./utils/get-auth-from-header.js";
import { UserAuthTokenProvider } from "#providers/user-auth-token/provider.js";
import { baseModule } from "#modules/base/module.js";
import {
	SyncApiFetchClientOptionsProvider,
	ScheduleApiFetchClientOptionsProvider,
	CalendarApiFetchClientOptionsProvider,
	IdpApiFetchClientOptionsProvider
} from "#providers/api-fetch-client-options/provider.js";

interface Context {
	token?: String;
}

const application = createApplication({
	providers: [
		UserAuthTokenProvider,
		SyncApiFetchClientOptionsProvider,
		ScheduleApiFetchClientOptionsProvider,
		CalendarApiFetchClientOptionsProvider,
		IdpApiFetchClientOptionsProvider
	],
	modules: [baseModule, syncModule]
});

// Workaround until official Apollo 4 support: https://github.com/graphql-hive/graphql-modules/issues/2270#issuecomment-1365000062
const server = new ApolloServer<Context>({
	introspection: true,
	gateway: {
		async load() {
			return { executor: application.createApolloExecutor(), introspection: true };
		},
		onSchemaLoadOrUpdate(callback) {
			callback({ apiSchema: application.schema } as any);
			return () => {};
		},
		async stop() {}
	}
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
	context: async ({ req }) => ({ token: getAuthFromHeaders(req) })
});

console.log(`🚀  Server ready at: ${url}`);
