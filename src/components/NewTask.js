import React from 'react';
import "../styles/NewTask.css";

function NewTasks(setTaskInput, taskInput, SaveTask){
  return (
    <div className="container-new-task">
      <input 
        data-testid="field-task" 
        placeholder="Digite sua tarefa" 
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <button 
        type="button" 
        onClick={() => SaveTask(taskInput)}
      >
        Salvar
      </button>
    </div>
  )
}

export default NewTasks;