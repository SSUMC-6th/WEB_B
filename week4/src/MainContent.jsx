// MainPage.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <Router>
      <div>
        <div className="banner">
          <h1>환영합니다</h1>
        </div>
      </div>
    </Router>
  );
}
