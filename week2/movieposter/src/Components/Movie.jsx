import React, { useState } from 'react';
import Description from './Description';


const ING_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
function Movie({title, poster_path, vote_average, overview}) {

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

    return (
      <div class = "movie-container" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}>
         <img src={poster_path} alt="영화포스터" />

         {isMouseOver && <Description title ={title} overview={overview} />}
        <div class="movie-info">
            <h4>{title}</h4>
            <span> {vote_average}</span>
         </div>
    </div>
    );
  }
  
  export default Movie; 