import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.jsx'; // Sidebar 컴포넌트 import

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
 // background-color: #333;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function NavBar({ isLoggedIn, handleLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
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
        <MenuIcon onClick={toggleSidebar}>&#9776;</MenuIcon> {/* 햄버거 아이콘 */}
      </NavBarContainer>
      <Sidebar
        isOpen={isSidebarOpen}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        closeSidebar={closeSidebar}
      />
    </>
  );
}

export default NavBar;