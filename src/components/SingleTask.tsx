import { Task } from '../model'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


interface Props{
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({task, tasks, setTasks}: Props) => {

    const [edit, setEdit] =useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);

    const handleDone = (id: number) =>{
        setTasks(
            tasks.map((task)=>
                task.id === id?{...task, isDone:!task.isDone} : task
            ))
    };

    const handleDelete = (id: number) =>{
        setTasks(tasks.filter((task)=>task.id !== id));
    }

    const handleEdit = (e:React.FormEvent, id:number) =>{
        e.preventDefault();

        setTasks(tasks.map((task)=>task.id === id?{...task, task:editTask} : task));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])
    
  return (
    <form onSubmit={(e)=>handleEdit(e, task.id)} className='flex lg:w-40 md:w-40 w-90 rounded-md p-6 mt-3 bg-yellow-400'>
        {
            edit ? (
                <input type="text" ref={inputRef} value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
            ):
            (
                task.isDone ? (
                    <s className=" flex-1 p-1 border-none text-lg focus:outline-none">
                        {task.task}
                    </s>
                ):
                (
                    <span className=" flex-1 p-1 border-none text-lg focus:outline-none">
                        {task.task}
                    </span>
                )
            )
        }
        
        <div> 
            <span className=" ml-5 text-lg cursor-pointer" onClick= {() => {
                if (!edit && !task.isDone){
                    setEdit(!edit);
                }
            }}> <FontAwesomeIcon icon={faPenToSquare} /> </span>
            <span className="ml-5 text-lg cursor-pointer" onClick={() => handleDelete(task.id)}> <FontAwesomeIcon icon={faTrash} /> </span>
            <span className="ml-5 text-lg cursor-pointer" onClick={()=>handleDone(task.id)}> <FontAwesomeIcon icon={faCheck} /> </span>

        </div>
    </form>
  )
}

export default SingleTask