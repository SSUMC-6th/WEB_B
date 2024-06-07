import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Movie from '../components/Movie';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  //grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 반응형 그리드 설정 */
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 20px;
  max-width: calc((100%-50px_) / 6); // 열의 수와 갭을 조정하세요.
  img {
    width: 100%;
    height: auto;
  }

  .voteAverage {
    right: 0;
  }
 
  





`;

const Loading = styled.div`
  color: white;
  font-size: 20px;
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid white;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function NowPlayingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjE2ZDFjMTU5MTRlMzJkMDM2MmE4ZmU3Y2NkMTI0YyIsInN1YiI6IjY2MzNkZTI5ZTkyZDgzMDEyYWQyMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8-rV08-b4ctQHDXtx3qfOYJriDVYunUA6iZkeFme-k'
    }
  };

  const fetchMovies = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`, options);
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <PageContainer>
      <NavBar />
      <MovieContainer>
        {movies.map((movie, index) => (
          <div
            ref={index === movies.length - 1 ? lastMovieElementRef : null}
            key={movie.id}
          >
            <Movie
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}
              id={movie.id}
            />
          </div>
        ))}
      </MovieContainer>
      {loading && (
        <LoadMore>
          <Spinner />
        </LoadMore>
      )}
    </PageContainer>
  );
}

export default NowPlayingPage; 