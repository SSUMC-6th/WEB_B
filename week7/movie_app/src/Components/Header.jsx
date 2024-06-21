import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isLogdedin, setIsLoggedin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Menu>
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
      </Menu>
      <Hamburger
        onClick={() => {
          setMenuOpen((current) => !current);
        }}
      >
        <FiMenu size={30} />
      </Hamburger>
      {menuOpen && <Sidebar handlesidebar={setMenuOpen} />}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
const Menu = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
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
