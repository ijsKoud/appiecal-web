import NextAuth from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		AuthentikProvider({
			clientId: process.env.AUTHENTIK_CLIENT_ID!,
			clientSecret: process.env.AUTHENTIK_CLIENT_SECRET!,
			issuer: process.env.AUTHENTIK_ISSUER!,
			authorization: {
				params: {
					scope: "openid profile email https://klrnbk.nl/projects/appiecal:use"
				}
			}
		})
	]
});

export { handler as GET, handler as POST };
