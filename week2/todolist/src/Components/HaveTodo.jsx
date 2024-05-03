import React, { useEffect, useState } from "react";

export default function HaveTodo({ todo, handleDone }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (todo) {
      setTodos([...todos, { content: todo, id: todos.length }]);
    }
  }, [todo]);

  //   const removeTodo = (e) => {
  //     handleDone(todos[parseInt(e.target.parentElement.id)].content);
  //     setTodos((todos) =>
  //       todos.filter((todo) => todo.id !== parseInt(e.target.parentElement.id))
  //     );
  //   };

  const removeTodo = (e) => {
    const idToRemove = parseInt(e.target.parentElement.id);
    if (todos.length === 0) {
      return; // 빈 배열일 경우 작업을 수행하지 않고 함수 종료
    }
    handleDone(todos.find((todo) => todo.id === idToRemove).content);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToRemove));
  };

  return (
    <div className="section">
      <div className="todoTitle">해야 할 일</div>
      <div className="lists">
        {todos.map((todo, index) => {
          return (
            <div className="todo" key={index} id={todo.id}>
              <div>{todo.content}</div>
              <button onClick={removeTodo}>완료</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
