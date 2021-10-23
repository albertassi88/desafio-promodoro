import React from 'react';
import PropTypes from "prop-types";
import "../styles/NewTask.css";

function NewTasks(props){
  const { setTaskInput, taskInput, SaveTask } = props;
  return (
    <div className="container-new-task">
      <input 
        placeholder="Digite sua tarefa" 
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <button 
        data-testid="btn-save" 
        type="button" 
        onClick={() => SaveTask(taskInput)}
      >
        Salvar
      </button>
    </div>
  )
}

export default NewTasks;

NewTasks.propTypes = {
  setTaskInput: PropTypes.string,
  taskInput: PropTypes.string,
  SaveTask: PropTypes.func,
};