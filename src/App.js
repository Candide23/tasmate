import './App.css'
import Header from "./components/Header"
import { TaskList } from './components/TaskList'

const App = () => {


 
  return (
        <div className="App">
            <Header/>
            <TaskList title="Random" subtitle="title"/>
           
        </div>


  )
}

export default App


