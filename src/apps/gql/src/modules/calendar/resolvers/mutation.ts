import type { CalendarModule } from "../generated-types/module-types.js";
import { CalendarProvider } from "../provider.js";

const MutationCalendarResolver: CalendarModule.Resolvers = {
	Mutation: {
		unlinkCaldav: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(CalendarProvider);
			return resolver.unlinkCaldav();
		},
		linkCaldav: (_, { baseUrl, authScope, authToken }, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(CalendarProvider);
			return resolver.linkCaldav(baseUrl, authScope, authToken);
		},
		setCalendar: (_, { href }, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(CalendarProvider);
			return resolver.setCalendar(href);
		}
	}
};

export default MutationCalendarResolver;
