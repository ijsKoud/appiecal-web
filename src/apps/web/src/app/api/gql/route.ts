import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const BACKEND_GRAPHQL_URL = process.env.GRAPHQL_BACKEND_URL!;

export async function POST(req: NextRequest) {
	try {
		const token = await getToken({
			secret: process.env.NEXTAUTH_SECRET,
			req: req as any // FIX: typing issues
		});

		const idToken = token?.idToken ?? "";
		const body = await req.text();

		const response = await fetch(BACKEND_GRAPHQL_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Authorization": idToken
			},
			body,
			cache: "no-store"
		});

		const data = await response.text();

		return new NextResponse(data, {
			status: response.status,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		console.error("GraphQL proxy error:", error);
		return NextResponse.json({ error: "Proxy request failed" }, { status: 500 });
	}
}
