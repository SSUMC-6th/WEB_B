import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleLinked = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: white;
  margin-right: 40px;
  &:hover {
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 15px;
  margin-right: 40px;
  cursor: pointer;
  text-decoration: none;
`;

function NavBar({ isLoggedIn, handleLogout }) {
  return (
    <NavBarContainer>
      <TitleLinked to="/">UMC Movie</TitleLinked>
      <LinkContainer>
        {isLoggedIn ? (
          <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
        ) : (
          <>
            <StyledLink to="/signup">회원가입</StyledLink>
            <StyledLink to="/login">로그인</StyledLink>
          </>
        )}
        <StyledLink to="/popular">Popular</StyledLink>
        <StyledLink to="/nowplaying">Now Playing</StyledLink>
        <StyledLink to="/toprated">Top Rated</StyledLink>
        <StyledLink to="/upcoming">Upcoming</StyledLink>
      </LinkContainer>
    </NavBarContainer>
  );
}

export default NavBar;
