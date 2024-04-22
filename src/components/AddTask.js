import React, { useState } from 'react'
import "./AddTask.css"

const AddTask = () => {

    const[taskValue, setTaskValue] = useState("")

  
  return (
    <section className='addtask'>
        <form>
            <label htmlFor=" ">Task Name</label>
            <input onChange={(event) => setTaskValue(event.target.value)} type='text' name='task' id='task' placeholder='Task Name' autoComplete='off' /><br/>
            <button  type='submit'>Add Task</button>
        </form>
        <p>{taskValue.length}</p>


    </section>
  )
}

export default AddTask
