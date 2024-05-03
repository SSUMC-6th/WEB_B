// import React from "react";
// import Detail from "./Detail";

// export default function Movie({ poster, title, vote_average, overview }) {
//     // 네 가지 props를 받음
//     return (
//         <div className="movie">
//             <img src={`https://image.tmdb.org/t/p/w200${poster}`} />
//             <div className="movieInfo">
//                 <div className="movieTitle">{title}</div>
//                 <div className="vote_avg">{vote_average}</div>
//             </div>
//             <Detail title={title} overview={overview} />
//         </div>
//     );
// }

import React from "react";
import styled from "styled-components";
import Detail from "./Detail";

const MovieContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover .detail {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: start;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 15px 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.829);
    }
`;

const MovieInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px 30px;
    background-color: rgb(162, 0, 0);
    color: white;
    margin: 0 auto;
    font-size: 14px;
`;

const MovieTitle = styled.div`
    width: 70%;
    display: flex;
    justify-content: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export default function Movie({ poster, title, vote_average, overview }) {
    return (
        <MovieContainer className="movie">
            <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
            <MovieInfo className="movieInfo">
                <MovieTitle className="movieTitle">{title}</MovieTitle>
                <div className="vote_avg">{vote_average}</div>
            </MovieInfo>
            <Detail title={title} overview={overview} />
        </MovieContainer>
    );
}
