import React from "react";
import PropTypes from "prop-types";
import RemoveTask from  './RemoveTask';
import "../styles/ListTasks.css";

export default function ListTasks(props) {
  const { listTasks, setListTasks } = props;
  return (
    <div className="container-list-tasks">
      <ul>
        {listTasks.map((e, index) => (
          <div key={index} className="box-tasks">
            <li key={index}>{e}</li>
            <label htmlFor="pomodoro">Pomodoros:</label>
            <select id="pomodoro">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <button 
              className="btnremove" 
              onClick={() => RemoveTask(index, setListTasks, listTasks)}
            >
              Remover
            </button>
          </div>
        ))}        
      </ul>
    </div>  
  )
}

ListTasks.propTypes = {
  listTasks: PropTypes.array,
  setListTasks: PropTypes.func,
};