import { Task } from '../model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


interface Props{
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({task, tasks, setTasks}: Props) => {

    const handleDone = (id: number) =>{
        setTasks(
            tasks.map((task)=>
                task.id === id?{...task, isDone:!task.isDone} : task
            ))
    };
    
  return (
    <form className='flex lg:w-40 md:w-40 w-90 rounded-md p-6 mt-3 bg-yellow-400'>
        {
            task.isDone ? (
                <s className=" flex-1 p-1 border-none text-lg focus:outline-none">
                    {task.task}
                </s>
            ):(
                <span className=" flex-1 p-1 border-none text-lg focus:outline-none">
                    {task.task}
                </span>
            )
        }
        
        <div> 
            <span className=" ml-5 text-lg cursor-pointer"> <FontAwesomeIcon icon={faPenToSquare} /> </span>
            <span className="ml-5 text-lg cursor-pointer"> <FontAwesomeIcon icon={faTrash} /> </span>
            <span className="ml-5 text-lg cursor-pointer" onClick={()=>handleDone(task.id)}> <FontAwesomeIcon icon={faCheck} /> </span>

        </div>
    </form>
  )
}

export default SingleTask