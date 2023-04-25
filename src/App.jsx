import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Header />
      <Input />
      <Task name="Comprar tortilla" />
    </>
  );
}

export default App;
