import React, { useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom의 Link 컴포넌트를 불러옵니다.

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 상태로 관리합니다.
  const [searchResult, setSearchResult] = useState(null); // 검색 결과를 상태로 관리합니다.

  // 영화를 검색하는 함수
  const searchMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=63db38e890bfd560efcf2f14999f1a44&language=ko&query=${searchTerm}`
      );
      const data = await response.json();
      // 검색 결과를 상태에 저장합니다.
      setSearchResult(data.results);
    } catch (error) {
      console.error("Error searching movie:", error);
    }
  };

  // 검색어 입력 시 상태를 업데이트합니다.
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색어 제출 시 검색 함수를 호출합니다.
  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovie();
  };

  return (
    <div>
      <h1>영화 검색</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="영화 제목을 입력하세요."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">검색</button>
      </form>
      {searchResult && (
        <div>
          <h2>검색 결과</h2>
          <ul>
            {searchResult.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.title}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
