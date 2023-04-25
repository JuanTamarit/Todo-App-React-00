import React from "react";
import "./Task.css";

export default function (props) {
  return (
    <div className="task">
      <input type="checkbox" />
      <span>{props.name}</span>
    </div>
  );
}
