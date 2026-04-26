import { MainContent } from "@/components/main-content";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
	return (
		<MainContent className="min-h-screen">
			<div className="flex flex-col items-center gap-y-4">
				<div className="flex items-center gap-x-4 max-md:flex-col">
					<h1 className="text-2xl leading-none font-bold">404</h1>
					<span className="text-xl leading-none font-normal text-muted-foreground text-center">This page could not be found.</span>
				</div>
				<div>
					<Button asChild>
						<Link href="/">Home</Link>
					</Button>
				</div>
			</div>
		</MainContent>
	);
};

export default NotFoundPage;
