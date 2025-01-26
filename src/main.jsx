import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskcontextProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskcontextProvider>
          <App />
    </TaskcontextProvider>
  </StrictMode>
)
