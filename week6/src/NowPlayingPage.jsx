import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const UpComming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1&region=KR&api_key=63db38e890bfd560efcf2f14999f1a44"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <h2>now_playing</h2>
        <div className="app-container">
          {movies.map((item) => (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComming;
