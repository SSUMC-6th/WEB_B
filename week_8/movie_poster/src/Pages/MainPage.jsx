// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

// // Banner 컴포넌트 스타일 정의
// const BannerContainer = styled.div`
//     background-color: #000;
//     color: white;
//     padding: 20px;
//     text-align: center;
//     font-size: 24px;
//     font-weight: bold;
//     margin: 0 auto;
//     width: 50%;
//     transform: translateY(50%);
//     position: relative;
//     top: 50%;
// `;

// const SearchBarContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 20px 0;
//     margin-top: 40px;
// `;

// const SearchInput = styled.input`
//     padding: 10px;
//     font-size: 16px;
//     width: 400px;
//     border: 2px solid #000;
//     border-radius: 5px 0 0 5px;
// `;

// const SearchButton = styled.button`
//     padding: 10px 20px;
//     font-size: 16px;
//     background-color: #000;
//     color: white;
//     border: none;
//     cursor: pointer;
//     border-radius: 0 5px 5px 0;

//     &:hover {
//         background-color: #333;
//     }
// `;

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

// const Banner = ({ text }) => {
//     return <BannerContainer>{text}</BannerContainer>;
// };

// const MainPage = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [movieList, setMovieList] = useState([]);

//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleSearch = () => {
//         const options = {
//             method: "GET",
//             url: "https://api.themoviedb.org/3/search/movie",
//             params: {
//                 query: searchTerm,
//                 include_adult: "false",
//                 language: "en-US",
//                 page: "1",
//             },
//             headers: {
//                 accept: "application/json",
//                 Authorization:
//                     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzJmY2NhMTE4N2FiYzNkM2M5Yjg5MDVmNTliNTkxMiIsInN1YiI6IjY2NDlkMmQ3OTQ0ZGEwZGJmNjdhN2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtkJnIY0ps9iMqoez1ovdAiVQhrZkQuACV_ZR8MtKk0",
//             },
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 const data = response.data.results;
//                 setMovieList(data);

//                 console.log(response.data);
//             })
//             .catch(function (error) {
//                 console.error("검색 오류:", error);
//             });
//     };

//     return (
//         <div>
//             <Banner text="환영합니다" />
//             <Banner text="Find your movies!" />
//             <SearchBarContainer>
//                 <SearchInput
//                     type="text"
//                     placeholder="영화 검색..."
//                     value={searchTerm}
//                     onChange={handleInputChange}
//                 />
//                 <SearchButton onClick={handleSearch}>검색</SearchButton>
//             </SearchBarContainer>
//             <Container>
//                 {movieList.map((movie) => (
//                     <Movie>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                         />
//                         <div key={movie.id}>{movie.title}</div>
//                     </Movie>
//                 ))}
//             </Container>
//         </div>
//     );
// };

// export default MainPage;

// 두번째 방법

// import React, { useState, useEffect } from "react"; // Import useEffect
// import styled from "styled-components";
// import axios from "axios";

// // Styled components
// const BannerContainer = styled.div`
//     background-color: #000;
//     color: white;
//     padding: 20px;
//     text-align: center;
//     font-size: 24px;
//     font-weight: bold;
//     margin: 0 auto;
//     width: 50%;
//     transform: translateY(50%);
//     position: relative;
//     top: 50%;
// `;

// const SearchBarContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 20px 0;
//     margin-top: 40px;
// `;

// const SearchInput = styled.input`
//     padding: 10px;
//     font-size: 16px;
//     width: 400px;
//     border: 2px solid #000;
//     border-radius: 5px 0 0 5px;
// `;

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

// const Banner = ({ text }) => {
//     return <BannerContainer>{text}</BannerContainer>;
// };

// const MainPage = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [movieList, setMovieList] = useState([]);

//     const fetchMovies = () => {
//         const options = {
//             method: "GET",
//             url: "https://api.themoviedb.org/3/search/movie",
//             params: {
//                 query: searchTerm,
//                 include_adult: "false",
//                 language: "en-US",
//                 page: "1",
//             },
//             headers: {
//                 accept: "application/json",
//                 Authorization:
//                     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzJmY2NhMTE4N2FiYzNkM2M5Yjg5MDVmNTliNTkxMiIsInN1YiI6IjY2NDlkMmQ3OTQ0ZGEwZGJmNjdhN2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtkJnIY0ps9iMqoez1ovdAiVQhrZkQuACV_ZR8MtKk0",
//             },
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 const data = response.data.results;
//                 setMovieList(data);
//             })
//             .catch(function (error) {
//                 console.error("검색 오류:", error);
//             });
//     };

//     useEffect(() => {
//         if (searchTerm.length > 0) {
//             // Prevent fetching when the input is empty
//             const timerId = setTimeout(() => {
//                 fetchMovies();
//             }, 500); // Delay the API call by 500ms to debounce the input
//             return () => clearTimeout(timerId);
//         }
//     }, [searchTerm]); // This effect will run on every change of searchTerm

//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <div>
//             <Banner text="환영합니다" />
//             <Banner text="Find your movies!" />
//             <SearchBarContainer>
//                 <SearchInput
//                     type="text"
//                     placeholder="영화 검색..."
//                     value={searchTerm}
//                     onChange={handleInputChange}
//                 />
//             </SearchBarContainer>
//             <Container>
//                 {movieList.map((movie, index) => (
//                     <Movie key={index}>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                             alt={movie.title}
//                         />
//                         <div>{movie.title}</div>
//                     </Movie>
//                 ))}
//             </Container>
//         </div>
//     );
// };

// export default MainPage;

// use Debounce

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { debounce } from "lodash"; // Import debounce from lodash

// // Styled components
// const BannerContainer = styled.div`
//     background-color: #000;
//     color: white;
//     padding: 20px;
//     text-align: center;
//     font-size: 24px;
//     font-weight: bold;
//     margin: 0 auto;
//     width: 50%;
//     transform: translateY(50%);
//     position: relative;
//     top: 50%;
// `;

// const SearchBarContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 20px 0;
//     margin-top: 40px;
// `;

// const SearchInput = styled.input`
//     padding: 10px;
//     font-size: 16px;
//     width: 400px;
//     border: 2px solid #000;
//     border-radius: 5px 0 0 5px;
// `;

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

// const Banner = ({ text }) => {
//     return <BannerContainer>{text}</BannerContainer>;
// };

// const MainPage = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [movieList, setMovieList] = useState([]);

//     // Function to fetch movies from the API
//     const fetchMovies = () => {
//         const options = {
//             method: "GET",
//             url: "https://api.themoviedb.org/3/search/movie",
//             params: {
//                 query: searchTerm,
//                 include_adult: "false",
//                 language: "en-US",
//                 page: "1",
//             },
//             headers: {
//                 accept: "application/json",
//                 Authorization:
//                     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzJmY2NhMTE4N2FiYzNkM2M5Yjg5MDVmNTliNTkxMiIsInN1YiI6IjY2NDlkMmQ3OTQ0ZGEwZGJmNjdhN2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtkJnIY0ps9iMqoez1ovdAiVQhrZkQuACV_ZR8MtKk0",
//             },
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 const data = response.data.results;
//                 setMovieList(data);
//             })
//             .catch(function (error) {
//                 console.error("API Error:", error);
//             });
//     };

//     // Using lodash debounce to limit API requests while typing
//     const debouncedFetchMovies = debounce(fetchMovies, 500);

//     useEffect(() => {
//         if (searchTerm) {
//             debouncedFetchMovies();
//         }

//         // Cleanup function to cancel debounced calls on component unmount
//         return () => {
//             debouncedFetchMovies.cancel();
//         };
//     }, [searchTerm]); // Effect depends on searchTerm

//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <div>
//             <Banner text="환영합니다" />
//             <Banner text="Find your movies!" />
//             <SearchBarContainer>
//                 <SearchInput
//                     type="text"
//                     placeholder="영화 검색..."
//                     value={searchTerm}
//                     onChange={handleInputChange}
//                 />
//             </SearchBarContainer>
//             <Container>
//                 {movieList.map((movie, index) => (
//                     <Movie key={index}>
//                         <img
//                             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                             alt={movie.title}
//                         />
//                         <div>{movie.title}</div>
//                     </Movie>
//                 ))}
//             </Container>
//         </div>
//     );
// };

// export default MainPage;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { debounce } from "lodash"; // Import debounce from lodash

// Styled components
const BannerContainer = styled.div`
    background-color: #000;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto;
    width: 50%;
    transform: translateY(50%);
    position: relative;
    top: 50%;
`;

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    margin-top: 40px;
`;

const SearchInput = styled.input`
    padding: 10px;
    font-size: 16px;
    width: 400px;
    border: 2px solid #000;
    border-radius: 5px 0 0 5px;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 14px;
    }
`;

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

const Banner = ({ text }) => {
    return <BannerContainer>{text}</BannerContainer>;
};

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieList, setMovieList] = useState([]);

    // Function to fetch movies from the API
    const fetchMovies = () => {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            params: {
                query: searchTerm,
                include_adult: "false",
                language: "en-US",
                page: "1",
            },
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzJmY2NhMTE4N2FiYzNkM2M5Yjg5MDVmNTliNTkxMiIsInN1YiI6IjY2NDlkMmQ3OTQ0ZGEwZGJmNjdhN2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtkJnIY0ps9iMqoez1ovdAiVQhrZkQuACV_ZR8MtKk0",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                const data = response.data.results;
                setMovieList(data);
            })
            .catch(function (error) {
                console.error("API Error:", error);
            });
    };

    // Using lodash debounce to limit API requests while typing
    const debouncedFetchMovies = debounce(fetchMovies, 500);

    useEffect(() => {
        if (searchTerm) {
            debouncedFetchMovies();
        }

        // Cleanup function to cancel debounced calls on component unmount
        return () => {
            debouncedFetchMovies.cancel();
        };
    }, [searchTerm]); // Effect depends on searchTerm

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Banner text="환영합니다" />
            <Banner text="Find your movies!" />
            <SearchBarContainer>
                <SearchInput
                    type="text"
                    placeholder="영화 검색..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </SearchBarContainer>
            <Container>
                {movieList.map((movie, index) => (
                    <Movie key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div>{movie.title}</div>
                    </Movie>
                ))}
            </Container>
        </div>
    );
};

export default MainPage;
