import React from "react";
import { Link } from "react-router-dom";
import "./MovieNavbar.css";
function MovieNavbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Cine<span>Verse</span>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/popular">Popular</a>
        <a href="/top-rated">Top Rated</a>
        <a href="/upcoming">Upcoming</a>
      </div>

      <button className="login-btn">

        Login
      </button>
      
    </nav>
  );
}

export default MovieNavbar;