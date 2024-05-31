import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Movie from '../components/Movie';
import ReactPaginate from 'react-paginate';

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
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 20px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Loading = styled.div`
  color: white;
  font-size: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledPaginateContainer = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding: 0;
  color : white;

  li {
    margin: 0 5px;
    cursor: pointer;

    &.disabled {
      pointer-events: none;
      color: gray;
    }

    &.selected {
      font-weight: bold;
      color: white;
    }
  }
`;

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjE2ZDFjMTU5MTRlMzJkMDM2MmE4ZmU3Y2NkMTI0YyIsInN1YiI6IjY2MzNkZTI5ZTkyZDgzMDEyYWQyMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8-rV08-b4ctQHDXtx3qfOYJriDVYunUA6iZkeFme-k',
    },
  };

  const fetchMovies = (pageNumber) => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, options)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
            setMovies(data.results);
          } else {
            setMovies([]);  // 만약 results가 없으면 빈 배열로 설정
          }
        setPageCount(data.total_pages || 0);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <PageContainer>
      <NavBar />
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <MovieContainer>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
          </MovieContainer>
          <PaginationContainer>
            <StyledPaginateContainer
              previousLabel={'<  '}
              nextLabel={'  >'}
              breakLabel={'...'}
              breakClassName={null}
              pageCount={pageCount}
              marginPagesDisplayed={0}
              pageRangeDisplayed={0}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              previousClassName={page === 1 ? 'disabled' : ''}
              nextClassName={page === pageCount ? 'disabled' : ''}
              forcePage={page - 1}
            />
          </PaginationContainer>
        </>
      )}
    </PageContainer>
  );
}

export default PopularPage;
