import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <p>Java, C#, Python, JavaScript, TypeScript</p>
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          <p>Angular, React, Node.js, Laravel, Odoo</p>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB, SQL avancé</p>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <p>Git/GitHub, Docker, Linux</p>
        </div>
        <div className="skill-category">
          <h3>Design & Methods</h3>
          <p>UML, POO, API REST, Agile/Scrum</p>
        </div>
      </div>
    </section>
  );
}
