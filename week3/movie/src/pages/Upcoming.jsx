import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'


const PageContainer=styled.div`
display : flex;
flex-direction:column;
`
const MovieContainer = styled.div`
margin-top : 30px;

  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 20px;
  max-width: calc((100%-50px_) / 6 ); // 열의 수와 갭을 조정하세요.
  img {
  max-width: 100%;
  height: auto;}

.voteAverage{
  right : 0;

}
`;

const MovieCard = styled.div`
background : none;
display : flex;
flex-direction : column;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;

  color : white;
  text-align : start;
  
 
`;

function UpcomingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjE2ZDFjMTU5MTRlMzJkMDM2MmE4ZmU3Y2NkMTI0YyIsInN1YiI6IjY2MzNkZTI5ZTkyZDgzMDEyYWQyMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8-rV08-b4ctQHDXtx3qfOYJriDVYunUA6iZkeFme-k'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => setMovies(data.results))
    .catch(err => console.error(err));
   
  }, []);

  return (
    <PageContainer>
    <NavBar />
    <MovieContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <h3>{movie.vote_average}</h3>
        
        </MovieCard>
      ))}
    </MovieContainer>
  </PageContainer>
)
}
export default UpcomingPage;