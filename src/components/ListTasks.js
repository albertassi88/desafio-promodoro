import React from "react";
import PropTypes from "prop-types";
import RemoveTask from  './RemoveTask';

export default function ListTasks(props) {
  const { listTasks, setListTasks } = props;
  return (
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
  )
}

ListTasks.propTypes = {
  listTasks: PropTypes.string,
  setListTasks: PropTypes.string,
};