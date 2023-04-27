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
        className=""
        type="text"
        placeholder="¡Vamos, haz algo útil con tu vida!"
        ref={inputRef}
      />
      <button className="btn-primary" onClick={saveTask}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
