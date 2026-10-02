import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("MOVIE DETAILS:", data);
        setMovie(data);
      })
      .catch((error) => {
        console.log("Details Error:", error);
      });
  }, [id]);

  if (!movie) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="movie-details-page">

      <div className="details-container">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="details-poster"
        />

        <div className="details-content">

          <h1>{movie.title}</h1>

          <p className="rating">
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>

          <p>
            <strong>Release Date:</strong>{" "}
            {movie.release_date
              ? new Date(movie.release_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Not available"}
          </p>

          <p>
            <strong>Runtime:</strong>{" "}
            {movie.runtime ? `${movie.runtime} minutes` : "Not available"}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres?.map((genre) => genre.name).join(", ")}
          </p>

          <h2>Overview</h2>

          <p className="overview">
            {movie.overview || "No overview available."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;