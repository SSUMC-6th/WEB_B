import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movie() {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzkzZjU2ZjUwNDhjMTJiMWY5N2ZlMDRkN2VjZDgxNSIsInN1YiI6IjY2MzM0ODAyYWQ1OWI1MDEyYjZkMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qdBDtGgV6dfHFLw0NdERZbNHNqfC6UQM_TrssPhyqY";
  const [movie, setMovie] = useState([]);
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1",
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      const data = response.data.results;
      console.log("응답 : ", data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
      <div key={movie.id}>{movie.title}</div>
    </div>
  );
}
