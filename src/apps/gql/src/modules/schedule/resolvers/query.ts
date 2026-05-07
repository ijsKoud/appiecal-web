import { ScheduleModule } from "../generated-types/module-types.js";
import { ScheduleProvider } from "../provider.js";

const QuerySyncResolver: ScheduleModule.Resolvers = {
	Query: {
		getSyncedShifts: (_, { startDate, endDate }, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(ScheduleProvider);
			return resolver.getSyncedShifts(startDate, endDate);
		}
	}
};

export default QuerySyncResolver;
