import React, { useState } from 'react'
import './App.css'

const App = () => {

    const[tasks, setTasks] = useState([
        {id:1, name: "Record Lectures", completed: true},
        {id:2, name: "Edit React Lectures", completed: false}, 
        {id:3, name: "Watch Lectures", completed: false}
    ])

 
  return (
        <div className="App">
            <h1>My Tasks List</h1>
            <ul>
                {tasks.map( (task, index) => (
                    <li key={index} >
                        <span>{task.id}{task.name}</span>
                        <button className='delete'>Delete</button>
                        </li>
                ))}
            </ul>
           
        </div>


  )
}

export default App


