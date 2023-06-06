import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import Nav from "./components/Nav";
import Completed from "./components/Completed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskContext from "./TaskContext";

function App() {
  const [tasksArray, setTasksArray] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAllClick = () => {
    setFilter("all");
  };

  const handleActiveClick = () => {
    setFilter("active");
  };

  const handleCompletedClick = () => {
    setFilter("completed");
  };

  return (
    <>
      <Header />
      <ul className="nav">
        <li>
          <button onClick={handleAllClick}>All</button>
        </li>
        <li>
          <button onClick={handleActiveClick}>Active</button>
        </li>
        <li>
          <button onClick={handleCompletedClick}>Completed</button>
        </li>
      </ul>
      <Input tasksArray={tasksArray} setTasksArray={setTasksArray} />
      <div>
        {tasksArray
          .filter((item) => {
            if (filter === "active") {
              return !item.checked;
            } else if (filter === "completed") {
              return item.checked;
            } else {
              return true;
            }
          })
          .map((item, index) => (
            <Task key={index} task={item} />
          ))}
      </div>
      <Routes>
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default App;
