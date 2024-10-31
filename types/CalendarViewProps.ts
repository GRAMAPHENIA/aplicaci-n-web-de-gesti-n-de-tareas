import { Task } from "./Task";

export interface CalendarViewProps {
  days: {
    date: Date;
    tasks: Task[];
    hasTasks: boolean;
  }[];
  selectedDate: Date | undefined;
  onDateChange: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
