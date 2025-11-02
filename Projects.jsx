import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "A React app that fetches real-time weather data using an API.",
      image: "https://tse1.mm.bing.net/th/id/OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN?pid=Api&P=0&h=180"
,
      link: "http://localhost:5173/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React to showcase my skills and projects.",
      image: "https://tse1.mm.bing.net/th/id/OIP.WJxZcKNRo5lFdcTMpUO_bwHaFF?pid=Api&P=0&h=180",

      link: "http://localhost:3000/#",
    },
    {
      title: "Task Manager",
      description: "An AI Task Manager is an intelligent tool that uses artificial intelligence to automatically organize, prioritize, and optimize your tasks for maximum productivity.",
      image: "https://ph-files.imgix.net/82011f8a-a311-4908-9a16-01cdebf563a4.jpeg?auto=format",

      link: "http://localhost:5174/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


