import { CONTEXT, Scope, type Provider } from "graphql-modules";
import { USER_AUTH_TOKEN } from "./token.js";

export const UserAuthTokenProvider: Provider = {
	provide: USER_AUTH_TOKEN,
	scope: Scope.Operation,
	deps: [CONTEXT],
	useFactory: (context) => {
		return context.token;
	}
};
