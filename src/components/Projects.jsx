import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Todolist Laravel",
      description: "Application de gestion de tâches avec Laravel.",
      github: "https://github.com/doha202/Todolist",
    },
    {
      title: "E-Recharges (Laravel + Node.js + PostgreSQL)",
      description: "Système de distribution de recharges téléphoniques.",
      github: "https://github.com/iwaco-dev/e-recharges",
    },
    {
      title: "TP Expo App",
      description: "Application Expo avec caméra, météo, animations et profil utilisateur.",
      github: "https://github.com/doha202/tpExpo2SDDI4",
    },
    {
      title: "TP Ionic App",
      description: "Application mobile avec Header, Home, Calculatrice et UI Pages.",
      github: "https://github.com/doha202/tpionic-standalone-sddi4",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
