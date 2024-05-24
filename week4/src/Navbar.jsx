import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 스타일 시트를 불러옵니다.

const Navbar = () => {
  // 로그인 상태를 관리하는 state 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 또는 로그아웃을 토글하는 함수
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav>
      <div className="navbar-list">
        <div className="mainpage">
          <Link to="/">UMC Movie</Link>
        </div>
        <div className="right-align">
          {/* isLoggedIn 상태에 따라 로그인 또는 로그아웃 버튼 표시 */}
          <span onClick={toggleLogin} style={{ cursor: "pointer" }}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </span>
          <Link to="/popular">Popular Movies</Link>
          <Link to="/now-playing">Now Playing</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcomming">Upcoming</Link> {/* 오타 수정 */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
