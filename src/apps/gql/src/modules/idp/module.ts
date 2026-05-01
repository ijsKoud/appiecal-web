import { createModule } from "graphql-modules";
import { IdpProvider } from "./provider.js";
import { loadFilesSync } from "@graphql-tools/load-files";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { IdpApiClient } from "#clients/idp-api-client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const idpModule = createModule({
	id: "idp-module",
	providers: [IdpProvider, IdpApiClient],
	dirname: __dirname,
	typeDefs: loadFilesSync(join(__dirname, "./graphql/*.graphql")),
	resolvers: loadFilesSync(join(__dirname, "./resolvers/*.js"))
});
