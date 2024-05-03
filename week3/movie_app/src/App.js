import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import NowPlaying from "./Pages/NowPlayingPage";
import PopularPage from "./Pages/PopularPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpComing from "./Pages/UpComing";

import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
