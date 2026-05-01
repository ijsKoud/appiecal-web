import NextAuth from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				if (!account.access_token || !account.expires_at) {
					throw new TypeError("Missing access_token or expires_at");
				}

				if (account) {
					token.idToken = account.id_token;
					token.accessToken = account.access_token;
				}

				return {
					...token,
					access_token: account.access_token,
					expires_at: account.expires_at,
					refresh_token: account.refresh_token
				};
			}

			// Token is still valid at time of check
			if (Date.now() < token.expires_at * 1e3) {
				return token;
			}

			// Subsequent logins, but the `access_token` has expired, try to refresh it
			if (!token.refresh_token) throw new TypeError("Missing refresh_token");

			try {
				const response = await fetch(process.env.AUTHENTIK_TOKEN_URL!, {
					method: "POST",
					body: new URLSearchParams({
						client_id: process.env.AUTHENTIK_CLIENT_ID!,
						client_secret: process.env.AUTHENTIK_CLIENT_SECRET!,
						grant_type: "refresh_token",
						refresh_token: token.refresh_token!
					})
				});

				const tokensOrError = await response.json();
				if (!response.ok) throw tokensOrError;

				const newTokens = tokensOrError as {
					access_token: string;
					expires_in: number;
					refresh_token?: string;
				};

				return {
					...token,
					access_token: newTokens.access_token,
					expires_at: Math.floor(Date.now() / 1000 + newTokens.expires_in),
					// Some providers only issue refresh tokens once, so preserve if we did not get a new one
					refresh_token: newTokens.refresh_token ? newTokens.refresh_token : token.refresh_token
				};
			} catch (error) {
				console.error("Error refreshing access_token", error);
				token.error = "RefreshTokenError";
				return token;
			}
		},

		async session({ session, token }) {
			session.idToken = token.idToken as string;
			return session;
		}
	},
	providers: [
		AuthentikProvider({
			clientId: process.env.AUTHENTIK_CLIENT_ID!,
			clientSecret: process.env.AUTHENTIK_CLIENT_SECRET!,
			issuer: process.env.AUTHENTIK_ISSUER!,
			authorization: {
				params: {
					scope: "openid scope profile email https://klrnbk.nl/projects/appiecal:use"
				}
			}
		})
	]
});

export { handler as GET, handler as POST };
