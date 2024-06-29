import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/cartSlice";

export default function ClearCart() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(clearCart())}>장바구니 초기화</Button>;
}

const Button = styled.button`
  width: max-content;
  height: 30px;
  background-color: white;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  padding: 0 10px;
`;
