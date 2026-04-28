import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";

const baseUrl: string = process.env.NEXTAUTH_URL ?? "";

export const createClient = () => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: `${baseUrl}/api/gql`
		})
	});
};
