import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import useSearchDebounce from "../hooks/useSearchDebounce";
import Movie from "../Components/Movie";
import { ClipLoader } from "react-spinners";

export default function MainPage() {
  const [isLogdedin, setIsLoggedin] = useState(false);
  const [ID, setID] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("ID")) {
      setIsLoggedin(true);
      setID(localStorage.getItem("ID"));
    } else {
      setIsLoggedin(false);
      setID(null);
    }
  }, []);
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeysord] = useState("");
  const [loading, setLoading] = useState(true);
  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&language=ko`,
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );

      const data = response.data.results;
      setMovieList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useSearchDebounce(
    () => {
      setLoading(true);
      apiCall();
    },
    300,
    searchKeyword
  );

  return (
    <MainContainer movieList={movieList}>
      <Greetings>
        {isLogdedin ? `${ID}님 환영합니다!` : "환영합니다!"}
      </Greetings>
      <Search>
        <span>🎥 영화를 검색해보세요!</span>
        <InputDiv>
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeysord(e.target.value)}
          ></input>
          <button>검색</button>
        </InputDiv>
      </Search>
      {loading ? (
        <Loading>
          <ClipLoader color="white" />
        </Loading>
      ) : null}
      {movieList.length === 0 ? null : (
        <Container>
          {movieList.map((movie) => (
            <Movie
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </Container>
      )}
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100%;
  height: ${({ movieList }) => (movieList.length === 0 ? "100vh" : "100%")};
  background-color: black;
`;
const Greetings = styled.div`
  height: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const Search = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  padding: 50px 0;
`;
const InputDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const Container = styled.div`
  width: 70%;
  height: 800px;
  overflow: scroll;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 20px;
  color: white;
  background-color: white;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff0000;
    border-radius: 5px;
  }
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
