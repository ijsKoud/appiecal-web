import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache, registerApolloClient } from "@apollo/client-integration-nextjs";

const baseUrl: string = process.env.NEXTAUTH_URL ?? "";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: `${baseUrl}/graphql`
		})
	});
});
