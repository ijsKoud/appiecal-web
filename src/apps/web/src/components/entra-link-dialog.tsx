import { FC } from "react";
import { DialogContent, Dialog, DialogHeader, DialogDescription, DialogTitle, DialogFooter, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldError, FieldGroup } from "./ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./ui/label";
import { z } from "zod";
import { Input } from "./ui/input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { LinkEntraUserMutation } from "./gql/_generated";
import { ApolloClient } from "@apollo/client";
import { Spinner } from "./ui/spinner";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;

	authorizationUrl: string;
	linkEntraUser: (code: string) => Promise<ApolloClient.MutateResult<LinkEntraUserMutation>>;
};

const formSchema = z.object({
	url: z.url("This field cannot be empty").nonempty()
});

export const EntraLinkDialog: FC<Props> = ({ open, onOpenChange, authorizationUrl, linkEntraUser }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: ""
		}
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const { searchParams } = new URL(data.url);
		const code = searchParams.get("code")!;

		const result = await linkEntraUser(code);
		if (result.error?.message) {
			form.setError("url", { message: result.error?.message });
			return;
		}

		onOpenChange(false);
		toast("@AH Account linked");
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader className="mb-4">
						<DialogTitle>Link your @AH account</DialogTitle>
						<DialogDescription>Follow the steps below to link your account.</DialogDescription>
					</DialogHeader>

					<FieldGroup>
						<Field>
							<Label>1. Login at @AH</Label>
							<FieldDescription>
								Click on the button below to start the login process. Come back when you have reached an empty page.
							</FieldDescription>
							<Button variant="secondary" onClick={() => window.open(authorizationUrl)}>
								Login at @AH
							</Button>
						</Field>
						<Controller
							name="url"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field>
									<Label htmlFor="authorization-results">2. Copy-And-Paste</Label>
									<FieldDescription>
										Reached a page that doesn't load or is empty? Copy the URL and paste it below!
									</FieldDescription>

									<Input
										{...field}
										aria-invalid={fieldState.invalid}
										id="authorization-results"
										placeholder="http://localhost?code=..."
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>
					</FieldGroup>

					<DialogFooter className="mt-4">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						{form.formState.isLoading ? (
							<Button disabled>
								<Spinner /> Linking @AH Account...
							</Button>
						) : (
							<Button type="submit" disabled={!form.formState.isValid}>
								Link my @AH Account
							</Button>
						)}
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
