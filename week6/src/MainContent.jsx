import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Movie from "./Movie";

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 상태로 관리합니다.
  const [searchResult, setSearchResult] = useState(null); // 검색 결과를 상태로 관리합니다.
  const [loading, setLoading] = useState(false); // 로딩 상태를 추가합니다.

  // 영화를 검색하는 함수
  const searchMovie = async (query) => {
    setLoading(true); // 검색 시작 시 로딩 상태를 true로 설정합니다.
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=63db38e890bfd560efcf2f14999f1a44&language=ko&query=${query}`
      );
      const data = await response.json();
      setSearchResult(data.results);
    } catch (error) {
      console.error("Error searching movie:", error);
    } finally {
      setLoading(false); // 검색 완료 시 로딩 상태를 false로 설정합니다.
    }
  };

  // debounce가 적용된 검색 함수
  const debouncedSearchMovie = useCallback(
    debounce((query) => {
      searchMovie(query);
    }, 500),
    []
  );

  // 검색어 입력 시 상태를 업데이트하고 debounce 검색 함수를 호출합니다.
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearchMovie(value);
  };

  return (
    <div>
      <h1>영화 검색</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="영화 제목을 입력하세요."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {loading ? (
        <p>데이터를 받아오는 중입니다...</p> // 로딩 중일 때 표시할 문구
      ) : (
        searchResult && (
          <div>
            <h2>검색 결과</h2>
            <div className="app-container">
              {searchResult.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
