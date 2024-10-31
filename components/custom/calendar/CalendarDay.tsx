// src/components/CalendarDay.tsx
import { CalendarDay as CalendarDayType } from '@/types/Calendar'
import { Checkbox } from "@/components/ui/checkbox"

type CalendarDayProps = {
  day: CalendarDayType
  onTaskToggle: (taskId: string) => void
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ day, onTaskToggle }) => {
  return (
    <div className="border p-2 rounded-md">
      <h4 className="text-sm font-semibold">{day.date.toDateString()}</h4>
      <div className="mt-2 space-y-1">
        {day.tasks.map(task => (
          <div key={task.id} className="flex items-center">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => onTaskToggle(task.id)}
              className="mr-2"
            />
            <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
