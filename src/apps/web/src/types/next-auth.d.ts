import NextAuth from "next-auth";

declare module "next-auth" {
	interface Session {
		idToken?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		idToken?: string;
		access_token: string;
		expires_at: number;
		refresh_token?: string;
		error?: "RefreshTokenError";
	}
}

declare module "next-auth" {
	interface Session {
		error?: "RefreshTokenError";
	}
}
