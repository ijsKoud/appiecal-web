import { createModule } from "graphql-modules";
import { BaseProvider } from "./provider.js";
import { loadFilesSync } from "@graphql-tools/load-files";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const baseModule = createModule({
	id: "base-module",
	providers: [BaseProvider],
	dirname: __dirname,
	typeDefs: loadFilesSync(join(__dirname, "./graphql/*.graphql")),
	resolvers: loadFilesSync(join(__dirname, "./resolvers/*.js"))
});
