import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function TotalPrice() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <Container>
      <Title>총 가격</Title>
      <Price>{totalPrice}</Price>
    </Container>
  );
}

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
