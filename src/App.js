
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React , {useState} from 'react'
import AddTask from './components/AddTask';
import Tasks  from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "AMS-2900 do export",
      reminder: false,
    },
    {
      id: 2,
      text: "Get new task from Dauke",
      reminder: true,
    },
    {
      id: 3,
      text: "React 2 hours",
      reminder: false,
    },
  ]);

  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    
    setTasks([...tasks, task])
  
  };

  return (
    <div className="App">
      <Header />
      <AddTask onAdd = {addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;