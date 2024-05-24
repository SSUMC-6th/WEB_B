import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent"; // 새로운 진입점 컴포넌트를 불러옵니다.
import PopularPage from "./PopularPage";
import NowPlayingPage from "./NowPlayingPage";
import TopRatedPage from "./TopRatedPage";
import UpComming from "./UpComing";
import MoviePage from "./MoviePage";
import NotFound from "./NotFound";
import Signup from "./Signup";

export default function MainPage() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContent} />{" "}
          {/* "/" 경로에 대한 진입점 컴포넌트를 설정합니다. */}
          <Route path="/signup" component={Signup} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/now-playing" component={NowPlayingPage} />
          <Route path="/top-rated" component={TopRatedPage} />
          <Route path="/upcomming" component={UpComming} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
