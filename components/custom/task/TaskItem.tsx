// src/components/TaskItem.tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Task } from "@/types/Task"

type TaskItemProps = {
  task: Task
  onToggle: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="mr-2"
      />
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.title}
      </span>
      <Button variant="ghost" size="sm" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  )
}
