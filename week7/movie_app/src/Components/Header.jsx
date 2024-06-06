import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [isLogdedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    }
  });
  const navigator = useNavigate();

  const handleLogout = () => {
    setIsLoggedin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
  };
  return (
    <Container>
      <StyledLink to="/">UMC Movie</StyledLink>
      <div style={{ display: "flex", gap: "30px" }}>
        {isLogdedin ? (
          <Login onClick={handleLogout}>로그아웃</Login>
        ) : (
          <>
            <Login onClick={() => navigator("/login")}>로그인</Login>
            <Login onClick={() => navigator("/signup")}>회원가입</Login>
          </>
        )}
        <StyledLink to="popular">Popular</StyledLink>
        <StyledLink to="nowplaying">Now Playing</StyledLink>
        <StyledLink to="toprated">Top Rated</StyledLink>
        <StyledLink to="upcoming">Upcoming</StyledLink>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
const Login = styled.div`
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  color: black;
  &:hover {
    transform: scale(1.1);
  }
`;
