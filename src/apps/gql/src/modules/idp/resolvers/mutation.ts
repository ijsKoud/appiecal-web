import type { IdpModule } from "../generated-types/module-types.js";
import { IdpProvider } from "../provider.js";

const MutationIdpResolver: IdpModule.Resolvers = {
	Mutation: {
		unlinkEntraUser: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(IdpProvider);
			return resolver.unlinkEntraUser();
		},
		linkEntraUser: (_, { code }, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(IdpProvider);
			return resolver.linkEntraUser(code);
		}
	}
};

export default MutationIdpResolver;
