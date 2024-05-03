import React, { useEffect, useState } from "react";

export default function Input({ makeTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleTodo = (e) => {
    setUserInput(e.target.value);
  };

  const submitTodo = (e) => {
    if (e.key == "Enter") {
      makeTodo(userInput);
      setUserInput("");
    }
  };
  return (
    <input
      placeholder="UMC 스터디 계획을 작성해보세요!"
      onChange={(e) => handleTodo(e)}
      onKeyUp={(e) => submitTodo(e)}
      value={userInput}
    ></input>
  );
}
