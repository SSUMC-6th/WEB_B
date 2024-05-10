import React from "react";
import styled from "styled-components";
import Movie from "./components/Movie";
import { movies } from "./movieDummy.js";

const Container = styled.div`
    width: 90%;
    margin: 30px auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    background-color: #171454;
`;

export default function Movies() {
    const movieData = movies.results;
    return (
        <Container id="container">
            {movieData.map((movie) => (
                <Movie
                    key={movie.id} // key 추가
                    poster={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                />
            ))}
        </Container>
    );
}
