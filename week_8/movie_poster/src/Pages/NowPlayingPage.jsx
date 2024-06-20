// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { ClipLoader } from "react-spinners";

// export default function NowPlayingPage() {
//     const API_KEY =
//         "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
//     const [movieList, setMovieList] = useState([]);
//     const [loading, setLoading] = useState(false); // 데이터 로딩 상태를 나타내는 Boolean 값. 데이터를 불러오는 동안 true로 설정
//     const [page, setPage] = useState(1);

//     const apiCall = async (page) => {
//         try {
//             setLoading(true);
//             const response = await axios.get(
//                 `https://api.themoviedb.org/3/movie/upcoming?language=ko&page=${page}`,
//                 { headers: { Authorization: `Bearer ${API_KEY}` } }
//             );
//             const data = response.data.results;
//             console.log("응답 : ", data);
//             setMovieList((prev) => [...prev, ...data]);
//             setLoading(false); // 데이터 로딩 완료
//         } catch (error) {
//             console.log(error);
//             setLoading(false); // 에러 발생 시 데이터 로딩 중 상태 해제
//         }
//     };

//     useEffect(() => {
//         apiCall(page);
//     }, [page]);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (
//                 window.innerHeight + document.documentElement.scrollTop !==
//                     document.documentElement.offsetHeight ||
//                 loading
//             )
//                 return;
//             setPage((prevPage) => prevPage + 1);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [loading]);

//     return (
//         <>
//             {loading && page === 1 ? (
//                 <Loading>
//                     <ClipLoader color="white" />
//                 </Loading>
//             ) : null}
//             <Container>
//                 {movieList.map((movie) => (
//                     <Movie key={movie.id}>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                             alt={movie.title}
//                         />
//                         <div>{movie.title}</div>
//                     </Movie>
//                 ))}
//             </Container>
//             {loading && page > 1 && (
//                 <Loading>
//                     <ClipLoader color="white" />
//                 </Loading>
//             )}
//         </>
//     );
// }

// const Container = styled.div`
//     width: 100%;
//     box-sizing: border-box;
//     text-align: center;
//     display: grid;
//     grid-template-columns: repeat(6, 1fr);
//     column-gap: 10px;
//     row-gap: 20px;
//     padding: 10px 20px;
//     color: white;
//     background-color: black;
// `;

// const Movie = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const Loading = styled.div`
//     width: 100%;
//     height: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: black;
// `;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

export default function NowPlayingPage() {
    const API_KEY =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(false); // 데이터 로딩 상태를 나타내는 Boolean 값. 데이터를 불러오는 동안 true로 설정
    const [page, setPage] = useState(1);

    const apiCall = async (page) => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?language=ko&page=${page}`,
                { headers: { Authorization: `Bearer ${API_KEY}` } }
            );
            const data = response.data.results;
            console.log("응답 : ", data);
            setMovieList((prev) => [...prev, ...data]);
            setLoading(false); // 데이터 로딩 완료
        } catch (error) {
            console.log(error);
            setLoading(false); // 에러 발생 시 데이터 로딩 중 상태 해제
        }
    };

    useEffect(() => {
        apiCall(page);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                    document.documentElement.offsetHeight ||
                loading
            )
                return;
            setPage((prevPage) => prevPage + 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    return (
        <>
            {loading && page === 1 ? (
                <Loading>
                    <ClipLoader color="white" />
                </Loading>
            ) : null}
            <Container>
                {movieList.map((movie) => (
                    <Movie key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div>{movie.title}</div>
                    </Movie>
                ))}
            </Container>
            {loading && page > 1 && (
                <Loading>
                    <ClipLoader color="white" />
                </Loading>
            )}
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

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Movie = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        margin: 10px;
    }

    @media (max-width: 480px) {
        margin: 5px;
    }
`;

const Loading = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;
