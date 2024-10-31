import { Task } from "@/types/CalendarDay";

export const generateCalendarDays = (tasks: Task[]) => {
  // Lógica para generar días con tareas
  const days = [];
  const taskMap = new Map();

  // Mapeamos las tareas por fecha
  tasks.forEach((task) => {
    const date = task.date.toDateString();
    if (!taskMap.has(date)) {
      taskMap.set(date, []);
    }
    taskMap.get(date).push(task);
  });

  // Generar los días del calendario (ejemplo simplificado)
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = date.toDateString();
    days.push({
      date,
      tasks: taskMap.get(dateString) || [],
      hasTasks: taskMap.has(dateString), // Marcar si tiene tareas
    });
  }

  return days;
};
