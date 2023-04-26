import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  return (
    <>
      <Header />
      <Input tasksArray={tasksArray} setTasksArray={setTasksArray} />
      <div>
        {tasksArray.map((item, index) => (
          <Task key={index} task={item} />
        ))}
      </div>
    </>
  );
}

export default App;
