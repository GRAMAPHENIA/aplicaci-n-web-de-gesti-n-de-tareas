// src/components/AddTaskForm.tsx
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type AddTaskFormProps = {
  onAdd: (title: string) => void
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      onAdd(newTaskTitle)
      setNewTaskTitle('')
    }
  }

  return (
    <div className="flex mb-4">
      <Input
        type="text"
        placeholder="Add a new task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        className="mr-2"
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  )
}
