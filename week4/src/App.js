import React from 'react';
import './App.css'
//import {movies} from "./movieDummy.js";
//import Movie from "./Components/Movies";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar.jsx'
//import Footer from './Components/Footer'
import MainPage from './pages/MainPage.jsx'
import NowPlayingPage from './pages/NowPlayingPage.jsx'
import PopularPage from './pages/PopularPage.jsx'
import TopRatedPage from './pages/TopRatedPages.jsx'
import UpcomingPage from './pages/Upcoming.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx'

function App() {
  return (
    <Router>

    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/nowplaying' element={<NowPlayingPage/>} />
      <Route path='/popular' element={<PopularPage/>} />
      <Route path='/toprated' element={<TopRatedPage/>} />
      <Route path='/upcoming' element={<UpcomingPage/>} />
      <Route path='/movie/:id' element = {<MovieDetailPage/>}/>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </Router>
  )}
export default App;