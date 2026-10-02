import "./Projects.css";
import React, { useState } from "react";
import movieImage from "../assets/movie-app.png";
import employeeImage from "../assets/employee-dashboard.png";
import expenseImage from "../assets/expense-tracker.png";
import todoImage from "../assets/to-do list.png";
import calculatorImage from "../assets/calculator.png";
import agecalculator from "../assets/age calculator.png";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
  title: "CineVerse - Movie App",
  description:
  "A React-based movie application using the TMDB API to search movies, display popular movies and view detailed movie information.",
  tech: "React, JavaScript, TMDB API, React Router",
  category: "React",
  image: movieImage,

  liveLink: "",

  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/myapp",
    },
    {
  title: "Employee Management Dashboard",
  description:
    "A React-based employee management dashboard to add, edit, delete, search and filter employee records by department.",
  tech: "React, JavaScript, CSS",
  category: "React",
  image: employeeImage,
  liveLink: "",
  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/myapp/src/Components",
},
    {
  title: "Expense Tracker",
  description:
    "A simple expense management application to track daily expenses and manage spending.",
  tech: "HTML, CSS, JavaScript",
  category: "JavaScript",
  image: expenseImage,

  liveLink: "",

  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/Projects/Expense%20Tracker",
},
    {
  title: "To-Do List",
  description:
    "A responsive task management application for adding, completing and deleting tasks.",
  tech: "HTML, CSS, JavaScript",
   category: "JavaScript",
  image: todoImage,

  liveLink: "",

  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/Projects/TO-DO%20Lis",
},
    {   
  title: "Calculator",
  description:
    "A clean and user-friendly calculator application with basic arithmetic operations.",
  tech: "HTML, CSS, JavaScript",
   category: "JavaScript",
  image: calculatorImage,

  

  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/Projects/Calculator",

    },
    {
  title: "Age Calculator",
  description:
    "An application that calculates age based on the user's date of birth.",
  tech: "React, JavaScript",
   category: "React",
  image: agecalculator,

  liveLink: "",

  githubLink:
    "https://github.com/sonalikasisodiya69-png/Frontend/tree/main/Projects/Age%20Calcu",
},
  ];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);


  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p className="section-tag">MY PROJECTS</p>

        <h2>
          Things I've <span>Built</span>
        </h2>
        <div className="filter-buttons">
  <button
    className={filter === "All" ? "active" : ""}
    onClick={() => setFilter("All")}
  >
    All
  </button>

  <button
    className={filter === "JavaScript" ? "active" : ""}
    onClick={() => setFilter("JavaScript")}
  >
    JavaScript
  </button>

  <button
    className={filter === "React" ? "active" : ""}
    onClick={() => setFilter("React")}
  >
    React
  </button>
</div>
      </div>
      

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.title}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>
<div className="project-buttons">
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    Live Demo
  </a>

  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    GitHub
  </a>
</div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

