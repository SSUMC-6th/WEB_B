import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 스타일 시트를 불러옵니다.

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-list">
        <div className="mainpage">
          <Link to="/">UMC Movie</Link>
        </div>
        <div className="right-align">
          <Link to="/popular">Popular Movies</Link>
          <Link to="/now-playing">Now Playing</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcomming">Upcomming</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
