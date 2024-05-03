import React from "react";

const Description = ({title}, {overview}) => {
  return (
      <div className="movie-description">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
  );
}

export default Description