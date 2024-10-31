// src/types/Task.ts
export type Task = {
  id: string
  title: string
  completed: boolean
  category: 'personal' | 'work' | 'urgent'
  date: Date  // Agrega la propiedad date aquí
}
