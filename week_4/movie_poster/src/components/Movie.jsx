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

// import React from "react";
// import styled from "styled-components";
// import Detail from "./Detail";

// const MovieContainer = styled.div`
//     width: 200px;
//     display: flex;
//     flex-direction: column;
//     position: relative;

//     &:hover .detail {
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         text-align: start;
//         position: absolute;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         padding: 15px 10px;
//         color: white;
//         background-color: rgba(0, 0, 0, 0.829);
//     }
// `;

// const MovieInfo = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     padding: 15px 20px 30px;
//     background-color: rgb(162, 0, 0);
//     color: white;
//     margin: 0 auto;
//     font-size: 14px;
// `;

// const MovieTitle = styled.div`
//     width: 70%;
//     display: flex;
//     justify-content: start;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
// `;

// export default function Movie({ poster, title, vote_average, overview }) {
//     return (
//         <MovieContainer className="movie">
//             <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
//             <MovieInfo className="movieInfo">
//                 <MovieTitle className="movieTitle">{title}</MovieTitle>
//                 <div className="vote_avg">{vote_average}</div>
//             </MovieInfo>
//             <Detail title={title} overview={overview} />
//         </MovieContainer>
//     );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // HTTP 통신을 위한 라이브러리
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export default function Movie() {
//     const API_KEY =
//         "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";

//     const [movie, setMovie] = useState([]); // movie 라는 상태를 정의하고 영화 정보를 저장하는데 사용

//     const apiCall = async () => {
//         try {
//             const response = await axios.get(
//                 "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1",
//                 { headers: { Authorization: `Bearer ${API_KEY}` } } // 요청 헤더에는 인증을 위해 API 키를 Bearer 토큰으로 포함
//             );
//             const data = response.data.results[0]; // 응답으로 받은 영화 데이터 중 results 배열
//             console.log("응답 : ", data);
//             setMovie(data); // moive 상태에 저장
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     useEffect(() => {
//         // 컴포넌트가 마운트될 때([] 의존성 배열로 인해 컴포넌트의 생명주기에서 딱 한 번 실행) apiCall 함수 호출
//         apiCall();
//     }, []);

//     if (!movie) return null; // 데이터가 없으면 아무것도 렌더링하지 않음

//     return (
//         // <div>
//         //     <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
//         //     <div key={movie.id}>{movie.title}</div>
//         // </div>
//         <Link to={{ pathname: `/movie/${movie.id}`, state: { movie } }}>
//             <img
//                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                 alt={movie.title}
//             />
//             <div>{movie.title}</div>
//         </Link>
//     );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Movie() {
    const API_KEY =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";

    const [movie, setMovie] = useState(null); // Initialize state to null for better handling
    const navigate = useNavigate(); // Use the useNavigate hook

    const apiCall = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1",
                { headers: { Authorization: `Bearer ${API_KEY}` } }
            );
            const data = response.data.results[0]; // Assuming we're only interested in the first result
            console.log("응답 : ", data);
            setMovie(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        apiCall();
    }, []);

    if (!movie) return null; // If no movie data, render nothing

    // Function to handle navigation
    const goToMovieDetail = () => {
        navigate(`/movie/${movie.id}`, {
            state: movie,
        });
    };

    return (
        <MovieContainer onClick={goToMovieDetail}>
            <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
            />
            <div>{movie.title}</div>
        </MovieContainer>
    );
}

const MovieContainer = styled.div`
    cursor: pointer; // Make the whole container clickable
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
`;
