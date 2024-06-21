import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import styled from "styled-components";

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

function Movie({ title, poster_path, vote_average, release_date, overview, id })
{
  const nav = useNavigate();
  const handleDetail = () => {
    nav(`/movie/${title}`, {
      state: {
        title,
        poster_path,
        vote_average,
        release_date,
        overview,
      },
    });
  };

  return (
    <div onClick={handleDetail}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <MovieCard key={id}>{title}</MovieCard>
      <MovieCard key={id}>{vote_average}</MovieCard>

    </div>
  );
}
export default Movie;