import React from "react";
import "./Task.css";

function Task(props) {
  return (
    <div className="task">
      <input type="checkbox" />
      <span>{props.task}</span>
    </div>
  );
}

export default Task;
