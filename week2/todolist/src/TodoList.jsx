import React, { useState, useEffect } from "react";
import Title from "./Components/Title";
import Input from "./Components/Input";
import HaveTodo from "./Components/HaveTodo";
import DoneTodo from "./Components/DoneTodo";
import "./index.css";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState();
  const [doneTodo, setDoneTodo] = useState();

  return (
    <div id="container">
      <Title />
      <Input makeTodo={setNewTodo} />
      <div id="todoDiv">
        <HaveTodo className="section" todo={newTodo} handleDone={setDoneTodo} />
        <DoneTodo className="section" todo={doneTodo} />
      </div>
    </div>
  );
}
