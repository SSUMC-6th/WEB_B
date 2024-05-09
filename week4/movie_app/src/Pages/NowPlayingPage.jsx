import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "../Components/Movie";
import { ClipLoader } from "react-spinners";

export default function NowPlayingPage() {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(null);
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1",
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      const data = response.data.results;
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
          <ClipLoader color="white" />
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
