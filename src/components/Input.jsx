import React from "react";
import "./Input.css";

function Input() {
  const createNewTask = (event) => {
    alert("Se hizo clic en el botón");
  };
  return (
    <div className="input__component">
      <input type="text" placeholder="Introduce aquí una nueva tarea" />
      <button className="new-task-button" onClick={createNewTask}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
