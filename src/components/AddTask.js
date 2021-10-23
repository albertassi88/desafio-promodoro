import React, {useState} from "react";
import NewTasks from "./NewTask";
import AddNewTask from "./AddNewTask";
import ListTasks from "./ListTasks";
import "../styles/AddTask.css";

function AddTask() {
  const [tasks, setTasks ] = useState(false);  
  const [taskInput, setTaskInput] = useState("");    
  const [listTasks, setListTasks] = useState([]);  

  function SaveTask(add) {
    setTasks(false);
    setListTasks([...listTasks, add]);
  }

  return (
    <div className="container-task">  
      <div className="box-task"/>  
      {tasks && NewTasks(setTaskInput, taskInput, SaveTask)}
      <ListTasks listTasks={listTasks} setListTasks={setListTasks}/>
      <button 
        data-testid="add-task" 
        onClick={() => AddNewTask(setTasks)}
        type="button"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;