import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TotalPrice from "./TotalPrice";
import ClearCart from "./ClearCart";
import { ChevronUp, ChevronDown } from "../assets/icons";
import {
  decrease,
  increase,
  calculateTotals,
  fetchMusicData,
} from "../redux/cartSlice";

export default function Cart() {
  const playList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [playList.data, dispatch]); // data가 변경될 때마다 총합 계산

  return (
    <Container>
      <Discription>당신이 선택한 음반</Discription>
      <List>
        {playList.data.map((song, idx) => (
          <Song key={song.id}>
            <img src={song.img} width={50} />
            <Info>
              <ContentInfo>
                <div>{song.title}</div>
                <Particion />
                <div>{song.singer}</div>
              </ContentInfo>
              <div>{song.price}원</div>
            </Info>

            <Control>
              <Button onClick={() => dispatch(increase(song.id))}>
                {ChevronUp()}
              </Button>
              <Amount>{song.amount}</Amount>
              <Button onClick={() => dispatch(decrease(song.id))}>
                {ChevronDown()}
              </Button>
            </Control>
          </Song>
        ))}
      </List>
      <TotalPrice />
      <ClearCart />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 50px;
  background-color: #9bcce9;
`;
const Discription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
`;
const List = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Song = styled.div`
  display: flex;
  align-items: center;
  height: min-content;
  display: flex;
  gap: 10px;
  font-size: 18px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const ContentInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const Particion = styled.div`
  content: "";
  border: none;
  border-left: 2px solid #797979;
`;
const Amount = styled.div``;

const Control = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.div``;
