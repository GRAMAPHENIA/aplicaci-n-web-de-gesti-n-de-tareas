// src/types/Calendar.ts
import { Task } from "./Task";

export type CalendarDay = {
  date: Date;
  tasks: Task[];
};
