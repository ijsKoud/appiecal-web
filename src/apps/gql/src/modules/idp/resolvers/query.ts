import { IdpModule } from "../generated-types/module-types.js";
import { IdpProvider } from "../provider.js";

const QuerySyncResolver: IdpModule.Resolvers = {
	Query: {
		getEntraLinkStatus: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(IdpProvider);
			return resolver.getEntraLinkStatus();
		},
		getAuthorizationUrl: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(IdpProvider);
			return resolver.getAuthorizationUrl();
		}
	}
};

export default QuerySyncResolver;
