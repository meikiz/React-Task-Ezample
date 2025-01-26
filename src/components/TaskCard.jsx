import { useContext} from "react"
import {TaskContext} from '../context/TaskContext'   


function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext)
  

    return (
              
                <div className="bg-gray-800 text-white p-4 rounded-md">
              <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
              <p className="text-gray-500 text-sm">{task.description}</p>
              <button onClick={()=>deleteTask(task.id)} className="bg-red-500 rounded-md px-2 py-1 mt-4 hover:bg-red-400">eliminar tarea</button>
            </div>
            
             
            
          )}
    
export default TaskCard
