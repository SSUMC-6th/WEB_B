import React from "react";
import Detail from "./Detail";

export default function Movie({ poster, title, vote_average, overview }) {
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w200${poster}`} />
      <div className="movieInfo">
        <div className="movieTitle">{title}</div>
        <div className="vote_avg">{vote_average}</div>
      </div>
      <Detail title={title} overview={overview} />
    </div>
  );
}
