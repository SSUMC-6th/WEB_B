import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function Sidebar({ handlesidebar }) {
  const [isLogdedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    }
  });

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();

  const handleLogout = () => {
    setIsLoggedin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
  };
  const handleNavigate = () => {
    handlesidebar(false);
  };
  useEffect(() => {
    setCurrentPage(location.pathname);
    console.log("현재 위치", location.pathname);
  }, []);
  return (
    <Menu>
      {isLogdedin ? (
        <Logout onClick={handleLogout}>로그아웃</Logout>
      ) : (
        <>
          <StyledLink
            to="login"
            onClick={handleNavigate}
            currentpage={currentPage}
            self="/login"
          >
            로그인
          </StyledLink>
          <StyledLink
            to="signup"
            onClick={handleNavigate}
            currentpage={currentPage}
            self="/signup"
          >
            회원가입
          </StyledLink>
        </>
      )}
      <StyledLink
        to="popular"
        onClick={handleNavigate}
        currentpage={currentPage}
        self="/popular"
      >
        Popular
      </StyledLink>
      <StyledLink
        to="nowplaying"
        onClick={handleNavigate}
        currentpage={currentPage}
        self="/nowplaying"
      >
        Now Playing
      </StyledLink>
      <StyledLink
        to="toprated"
        onClick={handleNavigate}
        currentpage={currentPage}
        self="/toprated"
      >
        Top Rated
      </StyledLink>
      <StyledLink
        to="upcoming"
        onClick={handleNavigate}
        currentpage={currentPage}
        self="/upcoming"
      >
        Upcoming
      </StyledLink>
    </Menu>
  );
}
const slide = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }
`;

const Menu = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  height: 100vh;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: black;
  color: white;
  padding-top: 100px;
  animation: ${slide} 0.5s;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  color: ${({ currentPage, self }) =>
    currentPage === self ? "yellow" : "white"};
  &:hover {
    transform: scale(1.1);
  }
`;
const Logout = styled.div`
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  color: white;
`;
