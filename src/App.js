
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React , {useState, useEffect} from 'react'
import AddTask from './components/AddTask';
import Tasks  from './components/Tasks';
function App() {
  const baseUrl = "http://localhost:5000/tasks"
  const [showAddTask, setShowAddTask] = useState('')
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTasks = async() => 
    {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  
  
}, []);

  // fetch tasks

  const fetchTasks = async () => {
    const res = await fetch(baseUrl);
    const data = res.json();
    return data;
  };

  //fetch task

  const fetchTask = async (id) => {
    const res = await fetch(baseUrl + `/${id}`);
    const data = res.json();
    return data;
  };

  const addTask = async (task) => 
  {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json()

    setTasks([...tasks, data]);
  }
  


  

  // delete task

  const deleteTask = async (id) => {

    const res = await fetch(baseUrl + `/${id}`, {

      method : 'DELETE'
    })
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error deleting this task"); 

  };


  const toogleReminder = async (id) =>
  {
   
    const taskToToggle = await fetchTask(id); 
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(baseUrl + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });


    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === data.id ? { ...task, reminder: data.reminder } : task
      )
    );

  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToogle = {toogleReminder}/>
    </div>
  );
}

export default App;