import React from "react";
import "./reset.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import SignupPage from "./Pages/SignupPage";
import PopularPage from "./Pages/PopularPage";
import NowPlayingPage from "./Pages/NowPlayingPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpComingPage from "./Pages/UpComing";
import MovieDetailPage from "./Pages/MovieDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="/nowplaying" element={<NowPlayingPage />} />
                <Route path="/toprated" element={<TopRatedPage />} />
                <Route path="/upcoming" element={<UpComingPage />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
