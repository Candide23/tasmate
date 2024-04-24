import React, { useRef, useState } from 'react'
import "./AddTask.css"

const AddTask = ({tasks, setTasks}) => {

    //const[taskValue, setTaskValue] = useState("");
    const[progress, setProgress] = useState(false);
    const taskRef = useRef("");


    const handleChange = (event) =>{

        console.log(taskRef.current.value);
    }

    const handleReset = () => {
        //setTaskValue("");
        taskRef.current.value="";
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();  //prevents page
        const task = {
            id: Math.floor(Math.random() * 1000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task])
        handleReset();
    }


  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}> 
            <label htmlFor=" ">Task Name</label>
            <input onChange={handleChange} type='text' name='task' id='task' placeholder='Task Name' autoComplete='off' ref={taskRef} />
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
            </select>
            <button  type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset' color='red'>Reset</span>
        </form>
        <p></p>


    </section>
  )
}

export default AddTask
