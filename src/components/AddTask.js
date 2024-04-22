import React, { useState } from 'react'
import "./AddTask.css"

const AddTask = () => {

    const[taskValue, setTaskValue] = useState("");
    const[progress, setProgress] = useState(false);


    const handleChange = (event) =>{
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();  //prevents page
        const task = {
            id: Math.floor(Math.random() * 1000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task)
        handleReset();
    }


  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}> 
            <label htmlFor=" ">Task Name</label>
            <input onChange={handleChange} type='text' name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue} />
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
            </select>
            <button  type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset' color='red'>Reset</span>
        </form>
        <p>{taskValue}</p>


    </section>
  )
}

export default AddTask
