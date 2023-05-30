import { useRef } from "react";

interface Props{
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const TextField = ({task, setTask, handleAdd}: Props) => {
    const InputRef = useRef<HTMLInputElement>(null);
  return (
        <form onSubmit={(e) =>{ 
            handleAdd(e)
            InputRef.current?.blur();
            }} 
            className='flex w-5/6 relative items-center'>
            <input ref={InputRef} type="input" placeholder='Enter a task' className=' w-full transition duration-200 shadow inset-0 0 5px black 
            border-none rounded-full py-5 px-5 text-lg focus:shadow-custom'
            value={task} 
            onChange={(e) => {
            setTask(e.target.value)
            }} />
            <button className='absolute w-12 h-12 m-3 right-0 border-none shadow-addBtn rounded-full
             bg-sky-400 text-lg text-white transition-all duration-200 hover:bg-sky-300 active:transform active:scale-40
             active:shadow-addBtnA' type='submit'>
                Add
            </button>
        </form>
  )
}

export default TextField