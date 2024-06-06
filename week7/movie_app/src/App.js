import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import NowPlaying from "./Pages/NowPlayingPage";
import PopularPage from "./Pages/PopularPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpComing from "./Pages/UpComing";
import NotFoundPage from "./Pages/NotFoundPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";

import Header from "./Components/Header";
import MovieDetailPage from "./Pages/MovieDetailPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
