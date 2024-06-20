import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar 컨테이너 스타일링
const NavbarContainer = styled.nav`
    background-color: #0a3871; /* 어두운 파란색 */
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// 링크 스타일링
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        color: lightgray;
        transform: scale(1.1); /* hover 시 글자가 10% 커지도록 설정 */
        transition: transform 0.3s ease; /* 부드러운 변환 효과 추가 */
    }
`;

// 버튼 스타일링
const LoginButton = styled.button`
    background: none; // 배경색 제거
    color: white;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 10px;
    font-size: 16px; // 글자 크기 설정

    &:hover {
        color: lightgray;
        transform: scale(1.1); // hover 시 글자가 10% 커지도록 설정
        transition: transform 0.3s ease; // 부드러운 변환 효과 추가
    }
`;

// 링크 컨테이너 스타일링
const LinkContainer = styled.div`
    display: flex; /* Ensure links are aligned and positioned correctly */
`;

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

    // 로그인/로그아웃 토글 함수
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <NavbarContainer>
            <StyledLink to="/">UMC Movie</StyledLink>
            <LinkContainer>
                {/* <LoginButton as="button" onClick={toggleLogin}>
                    {isLoggedIn ? "로그아웃" : "로그인"}
                </LoginButton> */}
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/signup">Sign Up</StyledLink>
                <StyledLink to="/popular">Popular</StyledLink>
                <StyledLink to="/nowplaying">Now Playing</StyledLink>
                <StyledLink to="/toprated">Top Rated</StyledLink>
                <StyledLink to="/upcoming">Up Coming</StyledLink>
            </LinkContainer>
        </NavbarContainer>
    );
};

export default Navbar;
