import { createModule } from "graphql-modules";
import { ScheduleProvider } from "./provider.js";
import { loadFilesSync } from "@graphql-tools/load-files";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { ScheduleApiClient } from "#clients/schedule-api-client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const scheduleModule = createModule({
	id: "schedule-module",
	providers: [ScheduleProvider, ScheduleApiClient],
	dirname: __dirname,
	typeDefs: loadFilesSync(join(__dirname, "./graphql/*.graphql")),
	resolvers: loadFilesSync(join(__dirname, "./resolvers/*.js"))
});
