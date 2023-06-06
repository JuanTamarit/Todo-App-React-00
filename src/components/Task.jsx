import "./Task.css";
import React, { useState, useRef } from "react";

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);
  const labelRef = useRef(null);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    handleLabelClass();
  }

  function handleLabelClass() {
    if (labelRef.current) {
      labelRef.current.classList.toggle("completed-task", !isChecked);
    }
  }

  return (
    <div className="task">
      <input
        type="checkbox"
        id={props.task.id}
        checked={props.task.status == "completed"}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={props.task.id} ref={labelRef}>
        {props.task.text}
      </label>
    </div>
  );
}

export default Task;
