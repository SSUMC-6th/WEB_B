import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviePage.css"; // CSS 파일을 불러옵니다.

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const API_KEY = "63db38e890bfd560efcf2f14999f1a44"; // 여기에 발급받은 API 키를 입력하세요.

export default function MoviePage({ match }) {
  const { movieName } = match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // API에서 영화 정보 가져오기
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?language=ko&api_key=${API_KEY}&query=${movieName}`
      )
      .then((response) => {
        // API 응답에서 영화 정보를 가져옵니다.
        // 여기서는 첫 번째 영화 정보만 사용합니다.
        if (response.data.results && response.data.results.length > 0) {
          setMovie(response.data.results[0]);
        } else {
          throw new Error("영화를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        setMovie(null);
      });
  }, [movieName]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, release_date, overview, poster_path, vote_average } = movie;

  // 평점을 표시하기 위한 별표 생성 함수
  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.floor(rating); // 평점을 내림하여 정수로 변환
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
    return stars;
  };

  return (
    <div className="movie-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${IMG_BASE_URL + poster_path})` }}
      />
      <div className="movie-details">
        <img
          src={IMG_BASE_URL + poster_path}
          alt="영화포스터"
          className="movie-poster"
        />
        <div>
          <h2>{title}</h2>
          <p>개봉일: {release_date}</p>
          <p>평점: {renderStars(vote_average)}</p> {/* 평점을 별표로 표시 */}
          <p>줄거리: {overview}</p>
        </div>
      </div>
    </div>
  );
}
