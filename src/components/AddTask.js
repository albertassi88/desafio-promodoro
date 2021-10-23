import React, {useState} from "react";
import "../styles/AddTask.css";

function AddTask() {
  const [tasks, setTasks ] = useState(false);  
  const [taskInput, setTaskInput] = useState("");    
  const [array, setArray] = useState([]);  

  function NewTask() {
    return (
      setTasks(true)
    )
  }

  function SaveTask(add) {
    setTasks(false);
    setArray([...array, add]);
  }

  function Oi(){
    return (
      <div>
        <input placeholder="Digite sua tarefa" onChange={({target}) => setTaskInput(target.value)}/>
        <button type="button" onClick={() => SaveTask(taskInput)}>Salvar</button>
      </div>
    )
  }

  function RemoveTask(index) {
    let newTasks = [...array]
    newTasks.splice(index, 1)
    setArray(newTasks)
  }

  return (
    <div className="container-task">  
      <div className="box-task"/>  
      {tasks && Oi()}
      <ul>
        {array.map((e, index) => (
          <div key={index} className="box-tasks">
            <li key={index}>{e}</li>
            <label htmlFor="pomodoro">Pomodoros:</label>
            <select id="pomodoro">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <button className="btnremove" onClick={() => RemoveTask(index)}>Remover</button>
          </div>
        ))}        
      </ul>
      <button 
        onClick={() => NewTask()}
        type="button"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;