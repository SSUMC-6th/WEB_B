// App.js
import React, { useState } from 'react';
import InputForm from './Components/InputForm'
import TodoList from './Components/Todolist'
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  const todoItems = todos.filter(todo => !todo.completed);
  const doneItems = todos.filter(todo => todo.completed);

  return (
    <div>
      <h1>UMC Study Plan</h1>
      <hr />
      <InputForm onAddTodo={handleAddTodo} />
      <div id="list">
        <div id="plan">
          <h2>해야 할 일</h2>
          <hr />
          <TodoList todos={todoItems} onToggle={handleToggleTodo} />
        </div>
        <div id="done">
          <h2>해낸 일</h2>
          <hr />
          <TodoList todos={doneItems} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App