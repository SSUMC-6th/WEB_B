// TodoItem.js
import React from 'react';




function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      {todo.completed ? (
        <button onClick={() => onDelete(todo.id)}>삭제</button>
      ) : (
        <button onClick={() => onToggle(todo.id)}>완료</button>
      )}
    </li>
  );
}

export default TodoItem;

