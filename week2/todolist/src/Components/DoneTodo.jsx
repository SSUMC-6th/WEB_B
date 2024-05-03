import React, { useState, useEffect } from "react";

export default function DoneTodo({ todo }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (todo) {
      setTodos([...todos, { content: todo, id: todos.length }]);
    }
  }, [todo]);

  const removeTodo = (e) => {
    setTodos((todos) =>
      todos.filter((todo) => todo.id !== parseInt(e.target.parentElement.id))
    );
  };
  return (
    <div className="section">
      <div className="todoTitle">해낸 일</div>
      <div className="lists">
        {todos.map((todo, index) => {
          return (
            <div className="todo" key={index} id={todo.id}>
              <div>{todo.content}</div>
              <button onClick={removeTodo}>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
