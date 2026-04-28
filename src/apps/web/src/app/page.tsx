import { MainContent } from "@/components/main-content";
import { ActionHeader } from "@/components/navigation/action-header";
import { SignOutButton } from "@/components/navigation/sign-out-button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await getServerSession();
	if (!session) redirect("/login");
	if (!session.user) throw new Error("Session user is null");

	return (
		<MainContent>
			<div className="min-h-screen">
				<div className="flex justify-between items-center mb-10">
					<div className="flex flex-col gap-y-2 mt-8">
						<h1 className="text-xl font-bold">Welcome back, {session.user.name}!</h1>
						<ActionHeader />
					</div>

					<SignOutButton />
				</div>

				<div className="flex flex-col gap-16">
					<div>
						<h2 className="text-xl font-bold">Status</h2>
						<p>Missing @AH account and calendar link</p>
					</div>

					<div>
						<h2 className="text-xl font-bold">Synced shifts</h2>
						<p>Missing @AH account and calendar link</p>
					</div>
				</div>
			</div>
		</MainContent>
	);
}
