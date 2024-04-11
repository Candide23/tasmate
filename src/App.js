import React, { useState } from 'react'
import './App.css'

const App = () => {

 const [count, setCount]  = useState(0);

    function handleAdd() {
    setCount(count+1)
    }
    function handleSub() {
        setCount(count -1)

    }

    function handleReset() {
        setCount(0 )

    }
  return (
    <div>
        <h1 className="App">
            <div className='box'>
               <p> {count} </p>
               <button onClick={handleAdd} className='add'>ADD</button>
               <button onClick={handleSub} className='sub'>SUB</button>
               <button onClick={handleReset} className='sub'>RESET</button>

            </div>
        </h1>

      
    </div>
  )
}

export default App


