import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-text">

        <p className="intro">Hi, I'm</p>

        <h1>
          Sonalika <span>Sisodiya</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="description">
          I build modern, responsive and user-friendly websites
          using HTML, CSS, JavaScript and React.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hire-btn">
            Hire Me
          </a>

          <a href="#projects" className="project-btn">
            View Projects
          </a>
        </div>

      </div>

      {/* Right Side */}
      <div className="hero-image">

        <div className="image-circle"></div>

        <img
          src={require("../assets/image.jpg")}
          alt="Sonalika"
        />

      </div>

    </section>
  );
}

export default Hero;