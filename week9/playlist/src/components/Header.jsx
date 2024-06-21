import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CartIcon } from "../assets/icons";
import { calculateTotals } from "../redux/cartSlice";

export default function Header() {
  const playList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(playList.length);
  }, []);
  return (
    <Container>
      <Title>UMC PlayList</Title>
      {CartIcon()}
      <Total>{() => dispatch(calculateTotals())}</Total>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
`;
const Title = styled.div`
  font-size: 30px;
  color: white;
`;
const Total = styled.div``;
