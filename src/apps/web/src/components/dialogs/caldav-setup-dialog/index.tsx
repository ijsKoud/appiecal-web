import { FC } from "react";
import { DialogContent, Dialog, DialogHeader, DialogDescription, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ApolloClient } from "@apollo/client";
import { Spinner } from "@/components/ui/spinner";
import { LinkCaldavMutation } from "@/components/gql/_generated";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	linkCaldav: (baseUrl: string, authScope: string, authToken: string) => Promise<ApolloClient.MutateResult<LinkCaldavMutation>>;
};

const formSchema = z.object({
	baseUrl: z.url("This field cannot be empty").nonempty(),
	authScope: z.string("This field cannot be empty").nonempty(),
	authToken: z.string("This field cannot be empty").nonempty()
});

export const CaldavSetupDialog: FC<Props> = ({ open, onOpenChange, linkCaldav }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			baseUrl: "",
			authScope: "",
			authToken: ""
		}
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const result = await linkCaldav(data.baseUrl, data.authScope, data.authToken);
		if (result.error?.message) {
			form.setError("baseUrl", { message: result.error?.message });
			return;
		}

		onOpenChange(false);
		toast("Calendar Account linked", {
			description: "Please select a calendar (Calendar -> Calendar for schedule) to enable work schedule syncing"
		});
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader className="mb-4">
						<DialogTitle>Link your calendar account</DialogTitle>
						<DialogDescription>Follow the steps below to link your calendar account.</DialogDescription>
					</DialogHeader>

					<FieldGroup>
						<Field>
							<Label>1. Check supported calendars</Label>
							<FieldDescription>
								Click the button below to check a list of supported calendars together with their instructions on how to get the right
								information.
							</FieldDescription>
							<Button variant="secondary" onClick={() => window.open("")}>
								Check supported calendars
							</Button>
						</Field>
						<Controller
							name="baseUrl"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field>
									<Label htmlFor="base-url">1. Base URL</Label>
									<FieldDescription>Below provide the base URL of the calendar service.</FieldDescription>

									<Input {...field} aria-invalid={fieldState.invalid} id="base-url" placeholder="https://caldav.icloud.com" />
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>
						<Controller
							name="authScope"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field>
									<Label htmlFor="auth-scope">2. Scope</Label>
									<FieldDescription>Below provide the authorization scope of the calendar service.</FieldDescription>

									<Input {...field} aria-invalid={fieldState.invalid} id="auth-scope" placeholder="Basic" />
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>
						<Controller
							name="authToken"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field>
									<Label htmlFor="auth-token">3. Token</Label>
									<FieldDescription>Below provide the generated token for the calendar service.</FieldDescription>

									<Input {...field} type="password" aria-invalid={fieldState.invalid} id="auth-token" placeholder="xxx-xxx-xxx" />
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
								<Spinner /> Linking Calendar Account...
							</Button>
						) : (
							<Button type="submit" disabled={!form.formState.isValid}>
								Link my Calendar Account
							</Button>
						)}
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
