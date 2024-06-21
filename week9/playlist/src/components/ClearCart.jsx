import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/cartSlice";

export default function ClearCart() {
  const playList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(clearCart())}>ClearCart</Button>;
}

const Button = styled.button`
  width: 80px;
  height: 30px;
`;
