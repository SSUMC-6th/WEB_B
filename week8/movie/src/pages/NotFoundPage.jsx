// NotFoundPage.js
import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';

const PageLayout = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
text-align : center;
height : 100%;
`
const Text1= styled.div`
color : white;
margin-top : 300px;
font-size : 30px;
`

const Text = styled.div`
color : white;
margin-top : 40px;
font-size : 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size : 30px;
  color: white; 

 
`;

function NotFoundPage() {
  return (
    <PageLayout>
      <Text1>Oops!</Text1>
      <Text>예상치 못한 에러가 발생했습니다;</Text>
      <Text>Not Found</Text>
      <StyledLink to="/" >메인으로 이동하기</StyledLink>
    </PageLayout>
  );
}

export default NotFoundPage;