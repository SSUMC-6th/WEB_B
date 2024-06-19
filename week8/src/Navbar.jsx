// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 사이드바를 닫는 함수
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // 외부 클릭을 감지하여 사이드바를 닫는 함수
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !document.querySelector(".sidebar").contains(event.target) &&
        isSidebarOpen
      ) {
        closeSidebar();
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <nav>
      <div className="navbar-list">
        <div className="mainpage">
          <Link to="/">UMC Movie</Link>
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </div>
        <div className="right-align">
          {/* 기존 링크들 */}
          <Link to="/signup">회원가입</Link>
          <Link to="/popular">Popular Movies</Link>
          <Link to="/now-playing">Now Playing</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcomming">Upcoming</Link>
        </div>
        {isSidebarOpen && (
          <div className="sidebar">
            <span className="close-sidebar" onClick={closeSidebar}>
              &times;
            </span>
            <Link to="/signup" onClick={closeSidebar}>
              회원가입
            </Link>
            <Link to="/popular" onClick={closeSidebar}>
              Popular Movies
            </Link>
            <Link to="/now-playing" onClick={closeSidebar}>
              Now Playing
            </Link>
            <Link to="/top-rated" onClick={closeSidebar}>
              Top Rated
            </Link>
            <Link to="/upcomming" onClick={closeSidebar}>
              Upcoming
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
