import React from "react";
import { Link } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ id, title, poster_path, vote_average }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-container">
        {poster_path ? (
          <img src={IMG_BASE_URL + poster_path} alt={`${title} 포스터`} />
        ) : (
          <div className="no-poster">포스터 없음</div>
        )}
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
    </Link>
  );
}
