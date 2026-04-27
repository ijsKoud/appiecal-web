import type { SyncModule } from "../generated-types/module-types.js";
import { SyncProvider } from "../provider.js";

const MutationSyncResolver: SyncModule.Resolvers = {
	Mutation: {
		setAutomaticSync: async (_, { state }, { injector }: GraphQLModules.Context) => {
			const provider = injector.get(SyncProvider);
			await provider.setAutomaticSyncStatus(state);

			return null;
		},
		triggerSync: (_, { startDate, endDate }, { injector }: GraphQLModules.Context) => {
			const provider = injector.get(SyncProvider);
			return provider.triggerSync(startDate, endDate);
		}
	}
};

export default MutationSyncResolver;
