import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import styled from "styled-components";

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todolist);
  return (
    <TodoBox>
      {todolist.map((todo, idx) => (
        <Todo key={idx}>
          <CheckBox
            type="checkbox"
            onChange={() => dispatch(complete(todolist[idx].id))}
          />
          <Content>
            {todo.complete ? <del>{todo.text}</del> : <>{todo.text}</>}
          </Content>
          <DeleteBtn onClick={() => dispatch(remove(todolist[idx].id))}>
            삭제
          </DeleteBtn>
        </Todo>
      ))}
    </TodoBox>
  );
}

const TodoBox = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Todo = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CheckBox = styled.input`
  border-radius: 5px;
`;
const Content = styled.div`
  width: 80%;
  font-size: 20px;
`;
const DeleteBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: blue;
  width: 10%;
  height: 30px;
  color: white;
`;
