import React from "react";
import Movie from "./components/Movie";
import { movies } from "./movieDummy.js";

export default function Movies() {
    // map 함수 이용해서 movieData 배열을 순회함
    // 각 영화 데이터에 대해 Movie 컴포넌트를 반환함
    // 반환되는 JSX에서는 id가 "container"인 <div> 태크 안에 각 Movie 컴포넌트를 배치함
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
