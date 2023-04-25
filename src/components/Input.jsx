import "./Input.css";
import React, { useRef, useContext, useState } from "react";
import TaskContext from "../TaskContext";

function Input() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useContext(TaskContext);
  const inputRef = useRef(null);

  // const createNewTask = (event) => {
  //   setNewTaskText(event.target.value);
  //   let newTaskText = inputRef.current.value;
  //   // alert("Se hizo clic en el botón");
  //   // alert(newTaskText);
  // };

  const createNewTask = () => {
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  };

  const handleInput = (event) => {
    setNewTaskText(event.target.value);
  };

  return (
    <div className="input__component">
      <input
        type="text"
        placeholder="Introduce aquí una nueva tarea"
        ref={inputRef}
        value={newTaskText}
        onChange={handleInput}
      />
      <button className="new-task-button" onClick={createNewTask}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Input;
