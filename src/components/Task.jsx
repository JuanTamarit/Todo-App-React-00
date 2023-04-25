import React from "react";
import "./Task.css";
import { useContext } from "react";
import TaskContext from "../TaskContext";

function Task() {
  const [newTaskText, setNewTaskText] = useContext(TaskContext);
  return (
    <div className="task">
      <input type="checkbox" />
      <span>{newTaskText}</span>
    </div>
  );
}

export default Task;
