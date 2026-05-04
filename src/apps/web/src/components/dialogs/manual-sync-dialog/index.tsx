import { FC } from "react";
import { DialogContent, Dialog, DialogHeader, DialogDescription, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ApolloClient } from "@apollo/client";
import { ManualSyncMutation } from "@/components/gql/_generated";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	triggerSync: (startDate: string, endDate: string) => Promise<ApolloClient.MutateResult<ManualSyncMutation>>;
};

const formSchema = z.object({
	dates: z.object(
		{
			from: z.date(),
			to: z.date()
		},
		"This field cannot be empty"
	)
});

export const ManualSyncDialog: FC<Props> = ({ open, onOpenChange, triggerSync }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			dates: {
				from: undefined,
				to: undefined
			}
		}
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const result = await triggerSync(data.dates.from.toISOString(), data.dates.to.toISOString());
		if (result.error?.message) {
			form.setError("dates", { message: result.error?.message });
			return;
		}

		onOpenChange(false);
		toast("Schedule synced to calendar");
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogHeader className="mb-4">
						<DialogTitle>Manually syncing your schedule</DialogTitle>
						<DialogDescription>Select between which dates your schedule schould be synced.</DialogDescription>
					</DialogHeader>

					<FieldGroup>
						<Controller
							name="dates"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field>
									<Popover>
										<PopoverTrigger asChild>
											<Button variant="outline" id="date-picker-range" className="justify-start px-2.5 font-normal">
												<CalendarIcon />
												{field.value.from ? (
													field.value.to ? (
														<>
															{format(field.value.from, "LLL dd, y")} - {format(field.value.to, "LLL dd, y")}
														</>
													) : (
														format(field.value.from, "LLL dd, y")
													)
												) : (
													<span>Pick a date</span>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="range"
												showWeekNumber
												weekStartsOn={1}
												selected={field.value}
												onSelect={field.onChange}
												numberOfMonths={2}
											/>
										</PopoverContent>
									</Popover>

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
								<Spinner /> Syncing your schedule...
							</Button>
						) : (
							<Button type="submit" disabled={!form.formState.isValid}>
								Sync your schedule
							</Button>
						)}
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
