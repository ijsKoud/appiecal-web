import { CalendarModule } from "../generated-types/module-types.js";
import { CalendarProvider } from "../provider.js";

const QueryCalendarResolver: CalendarModule.Resolvers = {
	Query: {
		getCaldavLinkStatus: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(CalendarProvider);
			return resolver.getCaldavLinkStatus();
		},
		getCalendarList: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(CalendarProvider);
			return resolver.getCalendarList();
		}
	}
};

export default QueryCalendarResolver;
