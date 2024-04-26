// InputForm.js
import React, { useState } from 'react';

function InputForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        placeholder="스터디 계획을 작성해보세요!"
        value={inputValue} 
        onChange={handleInputChange} 
      />
    </form>
  );
}

export default InputForm;
