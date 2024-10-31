// Dashboard.tsx
"use client";

import { useState } from "react";
import { PlusCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CalendarView from "@/components/custom/calendar/CalendarView";
import { Task } from "@/types/Task";
import { generateCalendarDays } from "@/data/calendar";
import { DatePicker } from "@/components/custom/datepicker/DatePicker";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const addTask = () => {
    if (newTaskTitle.trim() !== "" && selectedDate) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle,
        completed: false,
        category: "personal",
        date: selectedDate,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setSelectedDate(undefined);
    }
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const calendarDays = generateCalendarDays(tasks);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Administrador</h1>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => setShowCalendar(false)}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Tareas
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => setShowCalendar(true)}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Calendario
          </Button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">
          {showCalendar ? "Calendario de Tareas" : "Mis Tareas"}
        </h2>

        {/* Alterna entre la entrada de tareas o la vista de calendario */}
        {showCalendar ? (
          <CalendarView
            days={calendarDays}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        ) : (
          <>
            {/* Formulario para agregar nueva tarea */}
            <div className="flex mb-4 items-center space-x-2">
              <Input
                type="text"
                placeholder="Agregar nueva tarea"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
              <Button onClick={addTask}>Agregar Tarea</Button>
            </div>

            {/* Lista de tareas */}
            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center bg-white p-4 rounded-lg shadow"
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                    className="mr-2"
                  />
                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title} -{" "}
                    {format(task.date!, "EEE, dd 'de' MMMM", { locale: es })}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
