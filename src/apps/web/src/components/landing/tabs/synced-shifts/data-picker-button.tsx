import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { FC, useCallback } from "react";
import { DateRange } from "react-day-picker";

type DatePickerButtonProps = {
	startDate: Date;
	endDate: Date;
	onChange: (start: Date, end: Date) => void;
};

export const DatePickerButton: FC<DatePickerButtonProps> = ({ startDate, endDate, onChange }) => {
	const onSelect = useCallback((data?: DateRange) => onChange(data?.from ?? startDate, data?.to ?? endDate), [startDate, endDate]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" id="date-picker-range" className="justify-start px-2.5 font-normal">
					<CalendarIcon />
					{startDate ? (
						endDate ? (
							<>
								{format(startDate, "LLL dd, y")} - {format(endDate, "LLL dd, y")}
							</>
						) : (
							format(startDate, "LLL dd, y")
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
					selected={{ from: startDate, to: endDate }}
					onSelect={onSelect}
					numberOfMonths={2}
				/>
			</PopoverContent>
		</Popover>
	);
};
