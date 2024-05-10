import React from "react";
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

// 링크 컨테이너 스타일링
const LinkContainer = styled.div`
    display: flex; /* Ensure links are aligned and positioned correctly */
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <StyledLink to="/">UMC Movie</StyledLink>
            <LinkContainer>
                <StyledLink to="/popular">Popular</StyledLink>
                <StyledLink to="/nowplaying">Now Playing</StyledLink>
                <StyledLink to="/toprated">Top Rated</StyledLink>
                <StyledLink to="/upcoming">Up Coming</StyledLink>
            </LinkContainer>
        </NavbarContainer>
    );
};

export default Navbar;
