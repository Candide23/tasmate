import React,{useState} from 'react';
import './App.css'
import Header from "./components/Header"
import { TaskList } from './components/TaskList'
import Footer from './components/Footer'
import AddTask from './components/AddTask'


const App = () => {

    const [tasks, setTasks] = useState([]);

 
  return (
        <div className="App">
            <Header/>
            <main>
            <AddTask  tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks}/>
            </main>
            <Footer/>
           
        </div>


  )
}

export default App


