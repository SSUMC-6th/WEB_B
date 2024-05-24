import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko&page=1&region=KR&api_key=63db38e890bfd560efcf2f14999f1a44"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false); // 데이터 로드 후 로딩 상태 변경
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <h2>Popular Movies</h2>
        {loading ? ( // 로딩 상태에 따라 spinner 또는 데이터 표시
          <div className="spinner">Loading...</div>
        ) : (
          <div className="app-container">
            {movies.map((item) => (
              <Movie
                key={item.id} // 각각의 영화를 식별하기 위해 고유한 키 사용
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPage;
