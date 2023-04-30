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

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  return (
    <>
      <Header />
      <Nav />
      <Input tasksArray={tasksArray} setTasksArray={setTasksArray} />
      <div>
        {tasksArray.map((item, index) => (
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
