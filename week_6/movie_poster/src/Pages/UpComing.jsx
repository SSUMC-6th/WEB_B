import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

export default function UpComing() {
    const API_KEY =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(null);

    const apiCall = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
                { headers: { Authorization: `Bearer ${API_KEY}` } }
            );
            const data = response.data.results;
            console.log("응답 : ", data);
            setMovieList(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setLoading(true);
        apiCall();
    }, []);
    return (
        <>
            {loading ? (
                <Loading>
                    <ClipLoader color="white" />{" "}
                </Loading>
            ) : null}
            <Container>
                {movieList.map((movie) => (
                    <Movie>
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        />
                        <div key={movie.id}>{movie.title}</div>
                    </Movie>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    padding: 10px 20px;
    color: white;
    background-color: black;
`;

const Movie = styled.div`
    display: flex;
    flex-direction: column;
`;

const Loading = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: -1;
`;