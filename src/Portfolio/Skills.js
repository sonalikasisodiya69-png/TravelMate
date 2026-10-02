import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section className="skills" id="skills">
      <p className="section-tag">MY SKILLS</p>

      <h2>What I <span>Work With</span></h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;