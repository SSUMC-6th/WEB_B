// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function Movie() {
//     const API_KEY =
//         "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";

//     const [movie, setMovie] = useState(null); // Initialize state to null for better handling
//     const navigate = useNavigate(); // Use the useNavigate hook

//     const apiCall = async () => {
//         try {
//             const response = await axios.get(
//                 "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1",
//                 { headers: { Authorization: `Bearer ${API_KEY}` } }
//             );
//             const data = response.data.results[0]; // Assuming we're only interested in the first result
//             console.log("응답 : ", data);
//             setMovie(data);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     useEffect(() => {
//         apiCall();
//     }, []);

//     if (!movie) return null; // If no movie data, render nothing

//     // Function to handle navigation
//     const goToMovieDetail = () => {
//         navigate(`/movie/${movie.id}`, {
//             state: movie,
//         });
//     };

//     return (
//         <MovieContainer onClick={goToMovieDetail}>
//             <img
//                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                 alt={movie.title}
//             />
//             <div>{movie.title}</div>
//         </MovieContainer>
//     );
// }

// const MovieContainer = styled.div`
//     cursor: pointer; // Make the whole container clickable
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 20px;
//     transition: transform 0.3s;

//     &:hover {
//         transform: scale(1.05);
//     }

//     img {
//         width: 100%;
//         height: auto;
//         border-radius: 8px;
//     }
// `;

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

    @media (max-width: 768px) {
        margin: 10px;
    }

    @media (max-width: 480px) {
        margin: 5px;
    }
`;
