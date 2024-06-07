import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

export default function MovieDetailPage() {
  const info = useParams();

  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [poster_path, setPoster_path] = useState();
  const [vote_rate, setVote_rate] = useState();
  const [release_date, setRelease_date] = useState();
  const [overview, setOverview] = useState();

  const [credits, setCredits] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${info.id}?language=ko
        `,
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );

      setTitle(response.data.title);
      setPoster_path(response.data.poster_path);
      setVote_rate(renderStars(response.data.vote_average));
      setRelease_date(response.data.release_date);
      setOverview(response.data.overview);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const creditsApiCall = async () => {
    try {
      const response = await axios.get(
        `
        https://api.themoviedb.org/3/movie/${info.id}/credits?language=ko`,
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      setCredits([...response.data.cast, ...response.data.crew]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    apiCall();
    creditsApiCall();
  }, []);
  useEffect(() => {
    console.log("출연진:", credits);
  }, [credits]);
  const renderStars = (vote) => {
    const fullStars = Math.floor(vote); // 영화 평점을 최대 10점 만점으로 간주하여 5점당 하나의 별을 표시

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i}>⭐️</Star>);
    }

    return stars;
  };

  return (
    <Page>
      <Container>
        {loading ? (
          <Loading>
            <ClipLoader color="white" />
          </Loading>
        ) : (
          <>
            <Movie>
              <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
              <Info>
                <Title>{title}</Title>
                <Vote>
                  <div style={{ fontWeight: "700" }}>평점</div>
                  <Stars>{vote_rate}</Stars>
                </Vote>
                <Release>
                  <div style={{ fontWeight: "700" }}>개봉일</div>
                  {release_date}
                </Release>
                <Overview>
                  <div style={{ fontWeight: "700" }}>줄거리</div>
                  {overview === ""
                    ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                    : overview}
                </Overview>
              </Info>
            </Movie>
            <CreditDivTitle>출연진 및 제작진</CreditDivTitle>
            {credits.length === 0 ? null : (
              <Credit>
                {credits.map((credit) => (
                  <Crew>
                    <ProfileImg
                      src={
                        credit.profile_path
                          ? `https://image.tmdb.org/t/p/w200/${credit.profile_path}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
                      }
                    />
                    <Name>{credit.original_name}</Name>
                  </Crew>
                ))}
              </Credit>
            )}
          </>
        )}
      </Container>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  background-color: black;
  margin-top: 60px;
`;
const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;
const Movie = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: white;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
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

const Credit = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 20px;
`;
const CreditDivTitle = styled.div`
  width: max-content;
  margin: 0 auto;
  font-size: 1.5rem;
  color: white;
`;
const Crew = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
`;
const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50px;
`;
const Name = styled.div`
  width: 100%;
  text-align: center;
`;
const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: -1;
`;
