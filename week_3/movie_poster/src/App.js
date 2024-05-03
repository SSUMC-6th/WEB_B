import React from "react";
import "./reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import MainPage from "./MainPage";
import PopularPage from "./movies";
import NowPlayingPage from "./movies";
import TopRatedPage from "./movies";
import UpComingPage from "./movies";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/popular" element={<NowPlayingPage />} />
                <Route path="/nowplaying" component={NowPlayingPage} />
                <Route path="/toprated" element={<TopRatedPage />} />
                <Route path="/upcoming" component={UpComingPage} />
            </Routes>
        </Router>
    );
}

export default App;
