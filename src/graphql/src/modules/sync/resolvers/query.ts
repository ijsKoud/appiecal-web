import type { SyncModule } from "../generated-types/module-types.js";
import { SyncProvider } from "../provider.js";

const SyncResolver: SyncModule.Resolvers = {
	Query: {
		getAutomaticSyncStatus: (_, {}, { injector }: GraphQLModules.Context) => {
			const resolver = injector.get(SyncProvider);
			return resolver.getAutomaticSyncStatus();
		}
	}
};

export default SyncResolver;
