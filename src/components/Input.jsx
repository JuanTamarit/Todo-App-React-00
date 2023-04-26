import "./Input.css";
import React, { useRef, useContext, useState } from "react";
import TaskContext from "../TaskContext";

function Input() {
  const inputRef = useRef(null);
  let tasksArray = [];

  return (
    <div className="input__component">
      <input
        type="text"
        placeholder="Introduce una nueva tarea"
        ref={inputRef}
      />
      <button className="new-task-button" onClick={""}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
