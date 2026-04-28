import NextAuth from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.idToken = account.id_token;
				token.accessToken = account.access_token;
			}

			return token;
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
