import { createContext, useState, useEffect } from 'react'
import { tasks as Data } from '../data/task';

export const TaskContext = createContext()

export function TaskcontextProvider({ children }) {
  const [tasks, setTasks] = useState([])

  const createTask = (taskData) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskData.title,
      description: taskData.description
    }])
  }

  const deleteTask = (taskid) => {
    setTasks(tasks.filter(task => task.id !== taskid))
  }

  useEffect(() => {
    setTasks(Data)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}
