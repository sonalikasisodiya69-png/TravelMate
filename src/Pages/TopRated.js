import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("TOP RATED:", data);
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.log("Top Rated Error:", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Top Rated Movies</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default TopRated;