import React from "react";
import "./Task.css";

function Task(props) {
  return (
    <div className="task">
      <input type="checkbox" />
      <label>{props.task}</label>
    </div>
  );
}

export default Task;
