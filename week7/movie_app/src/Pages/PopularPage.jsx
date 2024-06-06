import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "../Components/Movie";
import { ClipLoader } from "react-spinners";

export default function PopularPage() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getPrevPage = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };
  const getNextPage = () => {
    if (currentPage === 500) return;
    else setCurrentPage(currentPage + 1);
  };
  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=ko&page=${currentPage}`,
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
  }, [currentPage]);
  return (
    <Page>
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
      <Pagination>
        <PrevBtn onClick={getPrevPage} currentPage={currentPage}>
          {"<"}
        </PrevBtn>
        <CurrentPageNum>{currentPage}</CurrentPageNum>
        <NextBtn onClick={getNextPage} currentPage={currentPage}>
          {">"}
        </NextBtn>
      </Pagination>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
const Container = styled.div`
  width: max-content;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 20px;
  padding: 10px 20px;
  color: white;
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

const Pagination = styled.div`
  display: flex;
  gap: 20px;
`;
const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ currentPage }) => (currentPage === 1 ? "gray" : "white")};
`;
const CurrentPageNum = styled.div`
  font-size: 2rem;
  color: white;
`;
const NextBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ currentPage }) => (currentPage === 500 ? "gray" : "white")};
`;
