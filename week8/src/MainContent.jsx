import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";
import Movie from "./Movie";
import axios from "axios";
import "./MainContent.css"; // CSS 파일 임포트

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 상태로 관리합니다.
  const [searchResult, setSearchResult] = useState(null); // 검색 결과를 상태로 관리합니다.
  const [loading, setLoading] = useState(false); // 로딩 상태를 추가합니다.
  const [userName, setUserName] = useState(""); // 사용자 이름을 상태로 관리합니다.
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/auth/me", {
          // 사용자 정보 엔드포인트 URL에 토큰을 포함하여 요청을 보냄
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // 응답에서 사용자의 이름을 추출하여 상태에 저장
          setUserName(response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // 토큰이 유효하지 않을 경우 로그인 페이지로 이동
          history.push("/login");
        });
    } else {
      // 토큰이 없을 경우 로그인 페이지로 이동
      history.push("/login");
    }
  }, [history]);

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
      <div>{userName && `${userName}님 환영합니다.`}</div>
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
