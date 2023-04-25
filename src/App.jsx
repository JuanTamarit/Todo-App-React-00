import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import TaskContext from "./TaskContext";

function App() {
  const [newTaskText, setNewTaskText] = useState(""); // definimos el estado compartido

  return (
    <>
      <TaskContext.Provider value={[newTaskText, setNewTaskText]}>
        <Header />
        <Input />
        <Task name="Comprar tortilla" />
      </TaskContext.Provider>
    </>
  );
}

export default App;
