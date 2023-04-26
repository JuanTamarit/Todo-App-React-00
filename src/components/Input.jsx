import "./Input.css";
import React, { useRef } from "react";

function Input(props) {
  const inputRef = useRef(null);

  function saveTask() {
    const inputText = inputRef.current.value;
    props.setTasksArray([...props.tasksArray, inputText]);
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
