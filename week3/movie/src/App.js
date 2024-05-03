import React from 'react';
import './App.css'
import {movies} from "./movieDummy.js";
import Movie from "./Components/Movies";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar.jsx'
import Footer from './Components/Footer'
import MainPage from './pages/MainPage'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/Upcoming.jsx'


function App() {
  return (
    <Router>

    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/nowplaying' element={<NowPlayingPage/>} />
      <Route path='/popular' element={<PopularPage/>} />
      <Route path='/toprated' element={<TopRatedPage/>} />
      <Route path='/upcoming' element={<UpcomingPage/>} />
    </Routes>
    </Router>
  )}
export default App;