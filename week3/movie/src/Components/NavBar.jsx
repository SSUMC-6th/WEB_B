import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
display : flex;
flex-direction : row;

`
const Pagetitle = styled.div`
display : flex;
color: white;
align-items : center;
`


const LinkContainer=styled.div`
display : flex;
align-items: center; 
padding: 10px;
margin-left : auto;

`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size : 15px;
  color: white; 
  margin-right : 40px;
  &:hover {
    font-size : 20px;
  }
`;



function NavBar() {
  return (

    <NavBarContainer>
      <Pagetitle>UMC Movie</Pagetitle>
    <LinkContainer>
        <StyledLink to="/">회원가입</StyledLink>
        <StyledLink to="/popular">Popular</StyledLink>
        <StyledLink to="/nowplaying">Now Playing</StyledLink>
        <StyledLink to="/toprated">Top Rated</StyledLink>
        <StyledLink to="/upcoming">Upcoming</StyledLink>
    </LinkContainer>
    


    </NavBarContainer>
  )
}
export default NavBar;