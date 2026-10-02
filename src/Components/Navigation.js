import React from "react";
import "./Page.css";


const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
      </div>
      <li>
        <ul><a href="#">Home</a></ul>
        <ul><a href="#">Menu</a></ul>
        <ul><a href="#">Location</a></ul>
        <ul><a href="#">About</a></ul>
        <ul><a href="#">Contact</a></ul>
      </li>
      <button>login</button>
    </nav>
  );
};

export default Navigation;