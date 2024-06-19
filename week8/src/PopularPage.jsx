import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = (page) => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}&region=KR&api_key=63db38e890bfd560efcf2f14999f1a44`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div>
        <h2>Popular Movies</h2>
        {loading ? (
          <div className="spinner">Loading...</div>
        ) : (
          <div className="app-container">
            {movies.map((item) => (
              <Movie
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            ))}
          </div>
        )}
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            style={{
              backgroundColor: page === 1 ? "#ccc" : "#4CAF50",
              cursor: page === 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            style={{
              backgroundColor: page === totalPages ? "#ccc" : "#4CAF50",
              cursor: page === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
