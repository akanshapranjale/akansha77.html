import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span>Akansha Pranjale</span>, an aspiring 
            <strong> Java Full Stack Developer</strong> with a strong interest 
            in building responsive, interactive web applications using 
            <strong> React</strong> and <strong>Java</strong>.
          </p>
          <p>
            I enjoy solving real-world problems through clean code and creative 
            user experiences. I’m currently in my 7th semester, eager to start 
            my internship journey and grow as a professional developer.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://via.placeholder.com/250"
            alt="Akansha Pranjale"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
