import React, { useState, useEffect, useCallback } from 'react';
import NavBar from "../components/NavBar";
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import { Link, Route } from 'react-router-dom';
import MovieDetailPage from './MovieDetailPage';
import Movie from '../components/Movie';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
  margin-top: 30px;
  font-size: 30px;
`;

const Search = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 30px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchingInput = styled.input`
  width: 500px;
  height: 47.4px;
  border-radius: 50px;
  background: white;
  padding-left: 20px;
  margin-top: 60px;
  font-size: 23px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  border: none;
  &::placeholder {
    font-size: 23px;
  }
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  height: 30px;
  margin-top: 75px;
  margin-left: 30px;
  cursor: pointer;
  display: flex;
`;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const MoviePoster = styled.img`
  width: 350px;
  height: auto;
  cursor: pointer;
`;

const Loading = styled.div`
  color: white;
`;

function MainPage() {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const debouncedHandleSearch = useCallback(
    debounce((searchInput) => {
      if (searchInput) {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        setLoading(true);
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}`;
        fetch(url, options)
          .then(response => response.json())
          .then(data => {
            if (data.results) {
              setMovieList(data.results);
            } else {
              console.error("검색 결과가 없거나 오류가 발생했습니다.");
              setMovieList([]);
            }
            setLoading(false);
          })
          .catch(err => {
            console.error("데이터 가져오기 오류:", err);
            setMovieList([]);
            setLoading(false);
          });
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchUserInfo();
    debouncedHandleSearch(searchInput);
    return debouncedHandleSearch.cancel;
  }, [searchInput, debouncedHandleSearch]);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUsername(userData.username);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <PageContainer>
      <NavBar />
      <Text>{username ? `${username}님 환영합니다` : '환영합니다'}</Text>
      <Search>🎥Find your movies!</Search>
      <SearchBar>
        <SearchingInput
          type='text'
          value={searchInput}
          onChange={handleInputChange}
          placeholder='Search' />
        <SearchButton onClick={debouncedHandleSearch}>검색</SearchButton>
      </SearchBar>
      {loading ? <Loading>데이터를 받아오는 중입니다.</Loading> :
        <ContentBox>
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_avg={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview} />
          ))}
        </ContentBox>}
    </PageContainer>
  )
}

export default MainPage;