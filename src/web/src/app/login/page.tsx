"use client";

import { MainContent } from "@/components/main-content";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@uidotdev/usehooks";
import { signIn } from "next-auth/react";

export default function Login() {
	useDebounce(() => {
		signIn("authentik", { callbackUrl: "/" });
	}, 1e3);

	return (
		<MainContent className="h-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-4">Redirecting to login...</h1>
				<p className="text-lg text-gray-600">If you are not redirected, click the button below.</p>
				<Button
					onClick={() => signIn("authentik", { callbackUrl: "/" })}
					className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
				>
					Login with Authentik
				</Button>
			</div>
		</MainContent>
	);
}
