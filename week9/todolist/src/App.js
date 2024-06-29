import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";

function App() {
    return (
        <div>
            <InputTodo />
            <TodoList />
        </div>
    );
}

export default App;
