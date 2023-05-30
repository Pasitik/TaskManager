import './App.css'
import TextField from './components/TextField'
import {useState} from "react"
import { Task } from './model'
import TaskList from './components/TaskList'

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(tasks){
      setTasks([...tasks, {id: Date.now(), task, isDone: false}]);
      setTask("");
    }
  }

  console.log(tasks);
  return (
    <div className ="App w-screen h-screen flex flex-col items-center bg-sky-500 font-neuchaCurve">
      <span className ="uppercase w-full text-xl md:text-3xl lg:text-5xl mx-0 my-6 lg:my-8 text-white z-1 text-center">Taskify</span>
      <TextField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
