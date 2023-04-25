import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div className="input__component">
      <input type="text" placeholder="Introduce aquí una nueva tarea" />
      <button className="new-task-button">Añadir tarea</button>
    </div>
  );
}
