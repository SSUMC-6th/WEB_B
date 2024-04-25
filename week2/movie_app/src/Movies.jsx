import React from "react";
import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

export default function Movies() {
  const movieData = movies.results;
  return (
    <div id="container">
      {movieData.map((movie) => {
        return (
          <Movie
            poster={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </div>
  );
}
