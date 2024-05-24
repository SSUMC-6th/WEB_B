import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "../Components/Movie";
import { ClipLoader } from "react-spinners";

export default function PopularPage() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(null);

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      const data = response.data.results;
      console.log("응답 : ", data);
      setMovieList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    apiCall();
  }, []);
  return (
    <>
      {loading ? (
        <Loading>
          <ClipLoader color="white" />{" "}
        </Loading>
      ) : null}

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
    </>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 20px;
  color: white;
  background-color: black;
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
