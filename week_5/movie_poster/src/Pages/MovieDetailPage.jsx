import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Styled components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    height: calc(100vh - 40px);
`;

const ImageContainer = styled.div`
    flex: 1;
    padding-right: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
`;

const Rating = styled.span`
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
`;

const ReleaseDate = styled.span`
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
`;

const Overview = styled.p`
    font-size: 16px;
    color: #444;
    line-height: 1.6;
`;

const MovieDetailPage = () => {
    const location = useLocation();
    const movie = location.state; // Use optional chaining to avoid errors

    useEffect(() => {
        // console.log(movie.state?.movie);
    });

    if (!movie) {
        return <div>영화 정보가 없습니다.</div>;
    }

    // return (
    //     <Container>
    //         <ImageContainer>
    //             <Image
    //                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //                 alt={`${movie.title} Poster`}
    //             />
    //         </ImageContainer>
    //         <InfoContainer>
    //             <Title>{movie.title}</Title>
    //             <Rating>평점: {movie.vote_average}</Rating>
    //             <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
    //             <Overview>{movie.overview}</Overview>
    //         </InfoContainer>
    //     </Container>
    // );
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
            </ImageContainer>
            <InfoContainer>
                <Title>{movie.title}</Title>
                <Rating>평점: {movie.vote_average}</Rating>
                <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
                <Overview>{movie.overview}</Overview>
            </InfoContainer>
        </Container>
    );
};

export default MovieDetailPage;
