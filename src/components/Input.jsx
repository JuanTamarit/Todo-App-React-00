import "./Input.css";
import React, { useRef } from "react";

function Input() {
  const inputRef = useRef(null);
  const createNewTask = (event) => {
    let newTaskText = inputRef.current.value;
    alert("Se hizo clic en el botón");
    alert(newTaskText);
  };
  return (
    <div className="input__component">
      <input
        type="text"
        placeholder="Introduce aquí una nueva tarea"
        ref={inputRef}
      />
      <button className="new-task-button" onClick={createNewTask}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
