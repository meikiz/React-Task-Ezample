import TaskCard from "./TaskCard"
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskList( ) {
const{tasks}=useContext(TaskContext)


if (tasks.length === 0){
 return <h1 className="text-3xl font-bold text-white mb-2 text-center">no hay tareas aun</h1>

}

  return (
    <div className="grid grid-cols-5 gap-2 p-4">
      {tasks.map(task => (
      <TaskCard key={task.id}  task={task}/>
      ))}
    </div>
  )
}

export default TaskList

