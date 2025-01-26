import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); // Changed from descripcion
    const { createTask } = useContext(TaskContext) // Changed from CreateTask
    
    const handleSubmit = (e) => { // Fixed typo in handleSubmit
        e.preventDefault();
     
        createTask({
            title,
            description // Using corrected variable name
        });
        
        setTitle('');
        setDescription(''); // Changed from setDescripcion
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className='bg-slate-800 p-4 rounded-md'>
                <div className='flex justify-center'>
                <h1 className='text-2xl font-bold text-white mb-2 '>Crear Tarea</h1>
                </div>
                <input 
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md'
                    autoFocus
                />
                <textarea 
                    placeholder="Escribe la descripción"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md'
                />
                <div className='flex justify-center'>
                    <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400'>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
