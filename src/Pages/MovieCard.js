import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <div className="movie-details">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>

          <span>
            {movie.release_date
              ? new Date(movie.release_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Release date unavailable"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;