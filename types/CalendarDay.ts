// src/types/CalendarDay.ts
export interface Task {
  date: any;
  id: string;
  title: string;
  completed: boolean;
}

export interface CalendarDay {
  hasTasks: any;
  date: Date; // Fecha del día
  tasks: Task[]; // Tareas de ese día
}
