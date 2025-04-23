import React from "react";
import "./Projects.css";
import portfolioImg from "../assets/Profile1.png";
import weatherImg from "../assets/weather.jpg";
import movieImg from "../assets/movie.png";
import businessImg from "../assets/business.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio site built with React, showcasing elegant UI, smooth animations, and optimized performance.",
    tech: "HTML, CSS, React.js, Vite, Netlify",
    image: portfolioImg,
  },
  {
    title: "Weather App",
    description:
      "A sleek weather forecasting app that displays real-time weather data using OpenWeather API with clean visuals and responsive UI.",
    tech: "React.js, API Integration, Bootstrap",
    image: weatherImg,
  },
  {
    title: "Movie App",
    description:
      "A dynamic movie listing platform that lets users browse and search for films, view ratings, and explore trailers.",
    tech: "React.js, TMDB API, CSS Modules",
    image: movieImg,
  },
  {
    title: "Business Website",
    description:
      "Partnered in developing a professional business website featuring services, team profiles, and contact integration.",
    tech: "HTML, Bootstrap, JavaScript, Node.js",
    image: businessImg,
  },
];

const Project: React.FC = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>

      {/* Why Choose Me Section */}
      <p className="why-choose-me">
        <strong>Why Choose Me?</strong>
        <br />
        By patronizing my services, you’ll benefit from a passionate and
        dedicated professional who is committed to delivering top-quality,
        user-friendly web solutions. Whether you're looking for a sleek
        portfolio, a dynamic web application, or a responsive business website,
        I bring expertise in modern technologies such as React.js, Node.js, and
        more. I focus on creating visually appealing, fast, and mobile-friendly
        websites that not only meet your needs but also provide an exceptional
        user experience. Let’s build something extraordinary together!
      </p>

      {/* Projects List */}
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack:</strong> {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="contact-button-container">
        <a href="/contact" className="contact-button">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Project;
