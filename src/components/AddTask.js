import React, { useState } from 'react'
import "./AddTask.css"

const AddTask = () => {

    const[taskValue, setTaskValue] = useState("")


    const handleChange = (event) =>{

        setTaskValue(event.target.value);


    }

    const handleReset = () => {

        setTaskValue("")

    }
  return (
    <section className='addtask'>
        <form>
            <label htmlFor=" ">Task Name</label>
            <input onChange={handleChange} type='text' name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue} />
            <button  type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset' color='red'>Reset</span>
        </form>
        <p>{taskValue}</p>


    </section>
  )
}

export default AddTask
