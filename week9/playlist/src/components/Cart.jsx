import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "../assets/icons";
import { decrease, increase } from "../redux/cartSlice";

export default function Cart() {
  const playList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      {playList.map((song, idx) => (
        <Song key={song.id}>
          <Title>{song.title}</Title>
          <Control>
            <Button onClick={() => dispatch(increase(song.id))}>+</Button>
            <Amount>{song.amount}</Amount>
            <Button onClick={() => dispatch(decrease(song.id))}>-</Button>
          </Control>
        </Song>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Song = styled.div`
  display: flex;
  gap: 5px;
  background-color: skyblue;
`;
const Title = styled.div``;
const Amount = styled.div``;

const Control = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button``;
