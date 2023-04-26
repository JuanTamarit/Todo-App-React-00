import "./Input.css";
import React, { useRef, useContext } from "react";
import TaskContext from "../TaskContext";

function Input() {
  const inputRef = useRef(null);
  const { tasksArray, setTasksArray } = useContext(TaskContext);

  function saveTask() {
    const inputText = inputRef.current.value;
    tasksArray.push(inputText);
    console.log(tasksArray);
    setTasksArray(tasksArray);
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
