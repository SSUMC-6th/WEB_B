import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviePage.css"; // CSS 파일을 불러옵니다.

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const API_KEY = "63db38e890bfd560efcf2f14999f1a44"; // 여기에 발급받은 API 키를 입력하세요.

export default function MoviePage({ match }) {
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]); // 출연진 정보를 저장할 상태를 추가합니다.

  useEffect(() => {
    // API에서 영화 정보 가져오기
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko&api_key=${API_KEY}`
      )
      .then((response) => {
        setMovie(response.data);

        // 영화 ID를 사용하여 출연진 정보를 가져옵니다.
        return axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
      })
      .then((response) => {
        // 출연진 정보를 상태에 저장합니다.
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error(error);
        setMovie(null);
      });
  }, [movieId]);

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
          <h3>출연진</h3>
          <div className="cast-list">
            {cast.slice(0, 5).map(
              (
                member // 상위 5명의 출연진을 표시합니다.
              ) => (
                <div key={member.cast_id} className="cast-member">
                  {member.profile_path ? (
                    <img
                      src={IMG_BASE_URL + member.profile_path}
                      alt={member.name}
                      className="cast-photo"
                    />
                  ) : (
                    <div className="no-photo">사진 없음</div>
                  )}
                  <p>{member.name}</p>
                  <p>{member.character}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
