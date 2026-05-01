"use client";

import { MenubarContent, MenubarGroup, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { FC, useState } from "react";
import { useEntraLink } from "./hooks/entra-link-hook";
import { EntraLinkDialog } from "@/components/entra-link-dialog";
import { AlertDialog } from "@/components/alert-dialog";

export const EntraTab: FC = () => {
	const { isActive, authorizationUrl, linkEntraUser, unlinkEntraUser } = useEntraLink();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

	return (
		<>
			<EntraLinkDialog
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}
				authorizationUrl={authorizationUrl}
				linkEntraUser={(code) => linkEntraUser({ variables: { code } })}
			/>
			<AlertDialog
				open={isDeleteDialogOpen}
				onOpenChange={setIsDeleteDialogOpen}
				description="Unlinking your @AH Account disables the syncing of your work schedule."
				continueAction={unlinkEntraUser}
			/>
			<MenubarMenu>
				<MenubarTrigger>@AH Account</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						{isActive ? (
							<MenubarItem variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
								Unlink account
							</MenubarItem>
						) : (
							<MenubarItem onClick={() => setIsDialogOpen(true)}>Link account</MenubarItem>
						)}
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</>
	);
};
