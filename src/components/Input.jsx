import "./Input.css";
import React, { useRef, useContext } from "react";
import { TaskContext } from "../TaskContext";

function Input() {
  const inputRef = useRef(null);
  const { tasksArray, setTasksArray } = useContext(TaskContext);

  function saveTask() {
    const newTasksArray = [...tasksArray, inputRef.current.value];
    setTasksArray(newTasksArray);
    localStorage.setItem("tasksArray", JSON.stringify(newTasksArray));
    inputRef.current.value = "";
  }

  return (
    <div className="input__component">
      <input
        type="text"
        placeholder="Introduce una nueva tarea"
        ref={inputRef}
      />
      <button className="new-task-button" onClick={saveTask}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
