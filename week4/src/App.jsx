import { useState } from "react";
import "./App.css";
import Movie from "./Movie.jsx";

import { dummy } from "./movieDummy";
import MainPage from "./MainPage.jsx";

function App() {
  return (
    <div>
      <MainPage />
      {/* <div className="app-container">
        {dummy.results.map((item) => {
          return (
            // <Movie
            //   title={item.title}
            //   poster_path={item.poster_path}
            //   vote_average={item.vote_average}
            // />
            <Movie />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
