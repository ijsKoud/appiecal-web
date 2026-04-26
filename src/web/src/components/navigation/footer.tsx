import { FC } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Footer: FC = () => {
	return (
		<footer className="grid place-items-center">
			<div className="max-w-5xl w-full flex flex-col gap-y-8 py-24 px-2">
				<div className="flex items-center gap-x-2 justify-between max-md:flex-col">
					<div className="flex items-center gap-x-8 max-md:flex-col">
						<Button variant="ghost" asChild>
							<Link href="/">Home</Link>
						</Button>
					</div>

					<div className="flex items-center gap-x-8">
						<Button variant="ghost" size="icon" asChild>
							<Link href={`https://github.com/ijskoud/appiecal`}>
								<SiGithub />
							</Link>
						</Button>
					</div>
				</div>

				<Separator />

				<div className="flex items-center justify-center">
					<span className="text-base leading-normal font-normal text-muted-foreground">
						Copyright {new Date().getFullYear()} © klrnbk.nl
					</span>
				</div>
			</div>
		</footer>
	);
};
