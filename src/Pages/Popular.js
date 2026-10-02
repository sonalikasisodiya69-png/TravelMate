import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Home.css";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POPULAR:", data);
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.log("Popular Error:", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Popular Movies</h1>

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

export default Popular;