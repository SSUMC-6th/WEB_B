import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function MovieDetailPage() {
  const info = useLocation();
  useEffect(() => {
    console.log(info.state);
  });
  const renderStars = (vote) => {
    const fullStars = Math.floor(vote); // 영화 평점을 최대 10점 만점으로 간주하여 5점당 하나의 별을 표시

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i}>⭐️</Star>);
    }

    return stars;
  };

  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w200/${info.state.poster_path}`} />
      <Info>
        <Title>{info.state.title}</Title>
        <Vote>
          <div style={{ fontWeight: "700" }}>평점</div>
          <Stars>{renderStars(info.state.vote_average)}</Stars>
        </Vote>
        <Release>
          <div style={{ fontWeight: "700" }}>개봉일</div>
          {info.state.release_date}
        </Release>
        <Overview>
          <div style={{ fontWeight: "700" }}>줄거리</div>
          {info.state.overview === ""
            ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
            : info.state.overview}
        </Overview>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  margin: 5% auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 2rem;
`;
const Vote = styled.div`
  display: flex;
  gap: 10px;
`;
const Release = styled.div`
  display: flex;
  gap: 10px;
`;
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Stars = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.div`
  display: inline-block;
  font-size: 1.2rem;
`;
