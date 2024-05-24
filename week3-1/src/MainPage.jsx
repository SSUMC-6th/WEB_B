// MainPage.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PopularPage from "./PopularPage";
import NowPlayingPage from "./NowPlayingPage";
import TopRatedPage from "./TopRatedPage";
import UpComming from "./UpComing";

export default function MainPage() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={MainPage} /> */}
          <Route path="/popular" component={PopularPage} />
          <Route path="/now-playing" component={NowPlayingPage} />
          <Route path="/top-rated" component={TopRatedPage} />
          <Route path="/upcomming" component={UpComming} />
          <div className="banner">
            <h1>환영합니다</h1>
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
