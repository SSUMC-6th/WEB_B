import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 750px;
  height: 100%;
  background-color: #22254b ;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: white;
  margin: 10px 20px;
  &:hover {
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 15px;
  margin: 10px 20px;
  cursor: pointer;
  text-decoration: none;
`;

function Sidebar({ isOpen, handleLogout, isLoggedIn, closeSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      {isLoggedIn ? (
        <StyledButton onClick={() => {handleLogout(); closeSidebar();}}>로그아웃</StyledButton>
      ) : (
        <>
          <StyledLink to="/signup" onClick={closeSidebar}>회원가입</StyledLink>
          <StyledLink to="/login" onClick={closeSidebar}>로그인</StyledLink>
        </>
      )}
      <StyledLink to="/popular" onClick={closeSidebar}>Popular</StyledLink>
      <StyledLink to="/nowplaying" onClick={closeSidebar}>Now Playing</StyledLink>
      <StyledLink to="/toprated" onClick={closeSidebar}>Top Rated</StyledLink>
      <StyledLink to="/upcoming" onClick={closeSidebar}>Upcoming</StyledLink>
    </SidebarContainer>
  );
}

export default Sidebar;