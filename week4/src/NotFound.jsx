import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 - 페이지를 찾을 수 없습니다.</h2>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/">홈페이지로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
