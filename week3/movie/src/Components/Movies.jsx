import React, { useState } from 'react';
import Description from './Description';

import styled from 'styled-components';


const Container = styled.div`
 background-color: #22254B;
  margin :0;
  padding : 0;
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
`
const MovieContainer = styled.div`
position : relative;
width : 150px;
margin : 16px;
background-color: #373b69;
color : white;
border-radius : 5px;
box-shadow : 3px 3px 5px rgba(0,0,0,0.1);
`;

const MovieImage = styled.img`
width : 100%;
`;

const MovieInfo = styled.div`
display : flex;
padding : 20px;
justify-content: space-between;
align-items: center;
`;

const ING_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average, overview}) {

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

    return (
    <Container>
      <MovieContainer onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}>
         <MovieImage src={poster_path} alt="영화포스터"></MovieImage>
         {isMouseOver && <Description overview={overview} />}
        <MovieInfo>
            <h4>{title}</h4>
            <span> {vote_average}</span>
         </MovieInfo>
      </MovieContainer>
      </Container>
    )
}
  export default Movie; 