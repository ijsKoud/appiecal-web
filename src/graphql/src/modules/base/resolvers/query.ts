import type { BaseModule } from "../generated-types/module-types.js";
import { BaseProvider } from "../provider.js";

const BaseResolver: BaseModule.Resolvers = {
	Query: {
		version: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(BaseProvider);
			return resolver.getVersion();
		}
	}
};

export default BaseResolver;
