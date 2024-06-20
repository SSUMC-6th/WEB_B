// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { ClipLoader } from "react-spinners";
// import { Link } from "react-router-dom";

// export default function PopularPage() {
//     const API_KEY =
//         "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
//     const [movieList, setMovieList] = useState([]);
//     const [loading, setLoading] = useState(null);
//     const [page, setPage] = useState(1);

//     const apiCall = async (page) => {
//         try {
//             const response = await axios.get(
//                 `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=${page}&sort_by=popularity.desc`,
//                 { headers: { Authorization: `Bearer ${API_KEY}` } }
//             );
//             const data = response.data.results;
//             console.log("응답 : ", data);
//             setMovieList(data);
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         setLoading(true);
//         apiCall(page);
//     }, [page]);

//     const handlePrevPage = () => {
//         if (page > 1) setPage((prevPage) => prevPage - 1);
//     };

//     const handleNextPage = () => {
//         setPage((prevPage) => prevPage + 1);
//     };

//     return (
//         <>
//             {loading ? (
//                 <Loading>
//                     <ClipLoader color="white" />{" "}
//                 </Loading>
//             ) : null}

//             <Container>
//                 {movieList.map((movie) => (
//                     <Movie key={movie.id}>
//                         <Link
//                             to={{
//                                 pathname: `/movie/${movie.id}`,
//                                 state: { movie },
//                             }}
//                         >
//                             <img
//                                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                                 alt={movie.title}
//                             />
//                             <div>{movie.title}</div>
//                         </Link>
//                     </Movie>
//                 ))}
//             </Container>

//             <Pagination>
//                 <Button onClick={handlePrevPage} disabled={page === 1}>
//                     이전
//                 </Button>
//                 <PageNumber>{page}</PageNumber>
//                 <Button onClick={handleNextPage}>다음</Button>
//             </Pagination>
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
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: black;
//     z-index: -1;
// `;

// const Pagination = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 20px 0;
//     background-color: black; /* Add black background */
//     padding: 10px;
//     border-radius: 5px;
// `;

// const Button = styled.button`
//     background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
//     color: white;
//     padding: 10px 20px;
//     margin: 0 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//     &:hover {
//         opacity: ${(props) => (props.disabled ? "1" : "0.8")};
//     }
// `;

// const PageNumber = styled.span`
//     color: white;
//     font-size: 18px;
// `;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function PopularPage() {
    const API_KEY =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(null);
    const [page, setPage] = useState(1);

    const apiCall = async (page) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=${page}&sort_by=popularity.desc`,
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
        apiCall(page);
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            {loading ? (
                <Loading>
                    <ClipLoader color="white" />{" "}
                </Loading>
            ) : null}

            <Container>
                {movieList.map((movie) => (
                    <Movie key={movie.id}>
                        <Link
                            to={{
                                pathname: `/movie/${movie.id}`,
                                state: { movie },
                            }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div>{movie.title}</div>
                        </Link>
                    </Movie>
                ))}
            </Container>

            <Pagination>
                <Button onClick={handlePrevPage} disabled={page === 1}>
                    이전
                </Button>
                <PageNumber>{page}</PageNumber>
                <Button onClick={handleNextPage}>다음</Button>
            </Pagination>
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

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    background-color: black; /* Add black background */
    padding: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
    color: white;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    &:hover {
        opacity: ${(props) => (props.disabled ? "1" : "0.8")};
    }
`;

const PageNumber = styled.span`
    color: white;
    font-size: 18px;
`;
