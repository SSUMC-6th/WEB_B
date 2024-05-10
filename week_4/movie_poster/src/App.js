import React from "react";
import "./reset.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import PopularPage from "./Pages/PopularPage";
import NowPlayingPage from "./Pages/NowPlayingPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpComingPage from "./Pages/UpComing";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="/nowplaying" element={<NowPlayingPage />} />
                <Route path="/toprated" element={<TopRatedPage />} />
                <Route path="/upcoming" element={<UpComingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
