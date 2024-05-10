import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom';


const PageContainer=styled.div`
display : flex;
flex-direction: row;

align-items : center;
`
const MovieImg = styled.img`
margin-top : 150px;
margin-left : 200px;
width : 450px;
height : 600px;
`
const MovieContainer = styled.div`
color : white;
margin-left: 100px;
`;
const Title= styled.div`
color : white;
font-size : 40px;
margin-bottom : 10px;
`
const Vote = styled.div`
color : white;
font-size : 20px;
`
const Date= styled.div`
color : white;
font-size : 20px;


`
const Overview=styled.div`
color : white;
font-size : 20px;
margin-top : 5px;
width : 700px;

`
const Text = styled.div`
font-size : 20px;
margin-top : 20px;
`

const StarsContainer = styled.div`
  display: flex;
`;

const Star = styled.span`
  font-size: 1.2rem;
`;


function MovieDetailPage() {
  const renderStars = (vote_average) => {
    const roundedRating = Math.floor(vote_average); // 평점을 내림하여 정수로 변환
    const stars = [];
  
    // 내림된 정수 값만큼 별표를 추가
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<Star key={i}>⭐️</Star>);
    }
  
    return <StarsContainer>{stars}</StarsContainer>;
  };

  //const {id} = useParams();
  const { state : movie}= useLocation();
  
  return (
    <PageContainer>
      <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <MovieContainer>
        <Title>{movie.title}</Title>
        <Vote>평점 {renderStars(movie.vote_average)}
        </Vote>
        <Text>개봉일</Text>
        <Date>{movie.release_date}</Date>
        <Text>줄거리</Text>
        <Overview>{movie.overview ? movie.overview : "TMDB에서 제공하는 API에 줄거리 정보가 없습니다."}</Overview>

      </MovieContainer>
  
    
  </PageContainer>
  )
}
export default MovieDetailPage;