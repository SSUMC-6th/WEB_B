import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function NotFoundPage() {
  return (
    <Container>
      <Comment>잘못된 경로입니다!</Comment>
      <LinkSt to="/">메인으로 이동하기</LinkSt>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: translate(-50%, -50%);
`;
const Comment = styled.div``;
const LinkSt = styled(Link)`
  text-decoration: none;
`;
