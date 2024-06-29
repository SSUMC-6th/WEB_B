import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartIcon } from "../assets/icons";

export default function Header() {
  const total = useSelector((state) => state.cart.total);

  return (
    <Container>
      <Title>UMC PlayList</Title>
      <Total>
        {CartIcon()}
        <TotalAmount>{total}</TotalAmount>
      </Total>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  padding: 10px 30px;
`;
const Title = styled.div`
  font-size: 30px;
  color: white;
`;
const Total = styled.div`
  display: flex;
`;
const TotalAmount = styled.div`
  font-size: 20px;
  color: white;
`;
