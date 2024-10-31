// src/components/TaskList.tsx
import { Task } from "@/types/Task"
import { TaskItem } from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  onToggle: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}
