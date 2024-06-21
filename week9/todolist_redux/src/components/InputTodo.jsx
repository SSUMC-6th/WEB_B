import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import styled from "styled-components";

export default function InputTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ id: 0, text: "" });
  const submit = (e) => {
    e.preventDefault();
    if (todo.text !== "") {
      dispatch(add(todo.text));
      setTodo({ text: "" });
    } else alert("할 일을 입력해주세요!");
  };
  const change = (e) => {
    setTodo({ text: e.target.value });
    console.log(e.target.value);
  };
  return (
    <Container onSubmit={submit}>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요!"
        value={todo.text}
        onChange={change}
      />
      <SubmitBtn>+</SubmitBtn>
    </Container>
  );
}

const Container = styled.form`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  height: 40px;
  border: #3700ff solid 3px;
  border-radius: 5px;
  box-sizing: border-box;
`;
const SubmitBtn = styled.button`
  width: 10%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #3700ff;
  color: white;
  font-size: 20px;
`;
