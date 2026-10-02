import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
  if (search.trim() === "") {
    return;
  }

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      search
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("SEARCH DATA:", data);

      setMovies(data.results || []);
    })
    .catch((error) => {
      console.log("Search Error:", error);
    });
};

  useEffect(() => {
    console.log(
      "Token exists:",
      !!process.env.REACT_APP_TMDB_TOKEN
    );

    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API DATA:", data);

        if (data.results) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.log("API Error:", error);
        setMovies([]);
      });
  }, []);
return (
  <div className="home">

    <div className="search-box">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
         onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
  />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>

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

export default Home;