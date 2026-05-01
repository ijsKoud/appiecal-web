import { FC } from "react";
import {
	AlertDialog as BaseAlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction
} from "./ui/alert-dialog";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;

	description: string;
	continueAction: () => void;
};

export const AlertDialog: FC<Props> = ({ open, onOpenChange, description, continueAction }) => {
	return (
		<BaseAlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction variant="destructive" onClick={continueAction}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</BaseAlertDialog>
	);
};
