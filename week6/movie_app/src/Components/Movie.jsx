import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Movie({ id, poster_path, title }) {
  const navigator = useNavigate();
  const gotoDetail = () => {
    navigator(`/movie/${id}`);
  };

  return (
    <div onClick={gotoDetail}>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
      <div key={id}>{title}</div>
    </div>
  );
}
