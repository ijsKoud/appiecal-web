import { createModule } from "graphql-modules";
import { CalendarProvider } from "./provider.js";
import { loadFilesSync } from "@graphql-tools/load-files";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { CalendarApiClient } from "#clients/calendar-api-client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calendarModule = createModule({
	id: "calendar-module",
	providers: [CalendarProvider, CalendarApiClient],
	dirname: __dirname,
	typeDefs: loadFilesSync(join(__dirname, "./graphql/*.graphql")),
	resolvers: loadFilesSync(join(__dirname, "./resolvers/*.js"))
});
