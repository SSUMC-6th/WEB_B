import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "../Components/Movie";
import useFetch from "../hooks/useFetch";
import { ClipLoader } from "react-spinners";

export default function NowPlayingPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // const [loading, setLoading] = useState(null);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "10px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <Page>
      <Container>
        {list.map((movie) => (
          <Movie
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            overview={movie.overview}
          />
        ))}
        <div ref={loader} />
        {loading && (
          <Loading>
            <ClipLoader color="white" />
          </Loading>
        )}
      </Container>
      {loading && page === 1 && (
        <LoadingOverlay>
          <ClipLoader color="white" />
        </LoadingOverlay>
      )}
    </Page>
  );
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin-top: 60px;
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
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
