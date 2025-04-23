import React from "react";
import { useNavigate } from "react-router-dom";
import lowerLeftImage from "../assets/ME1.jpg";
import topRightImage from "../assets/ME2.jpg";
import workImage from "../assets/WORK.jpg";
import servicesImage from "../assets/SERVICES.jpg"; // <- New image for Services section
import "./home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-section">
        {/* Rotating Cancel Shapes */}
        <div className="cancel-shape cancel-top-left">✕</div>
        <div className="cancel-shape cancel-top-middle">✕</div>
        <div className="cancel-shape cancel-bottom-middle">✕</div>
        <div className="cancel-shape cancel-right-center">✕</div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">WELCOME TO GTECH</h1>
          <p className="hero-subtitle">
            "Crafting ideas into elegant web solutions..........."
          </p>
          <button
            className="contact-button"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>

        {/* Blob Framed Images */}
        <div className="top-right-image">
          <div className="blob">
            <img src={topRightImage} alt="Top Right" />
          </div>
        </div>

        <div className="lower-left-image">
          <div className="blob">
            <img src={lowerLeftImage} alt="Bottom Right" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer focused on building clean and
            responsive user interfaces using Programming languages such as HTML,
            CSS, BOOTSTRAP, React.js, JavaScript, and TypeScript. I'm currently
            on a mission to master full-stack development, build meaningful
            projects, and create a better life through tech.
          </p>
        </div>
        <div className="about-right">
          <img src={workImage} alt="Me at Work" />
        </div>
      </section>
      {/* Services Section */}
      <section className="services-section">
        <div className="services-image-left">
          <img src={servicesImage} alt="Services" />
        </div>
        <div className="services-content-right">
          <h3>Services I Render</h3>
          <ul>
            <li>
              <strong>Modern Web Applications:</strong> Building fast, scalable,
              and interactive websites using React, Vite, and TypeScript.
            </li>
            <li>
              <strong>Personal & Business Portfolios:</strong> Designing
              visually striking and mobile-responsive portfolio sites that make
              a lasting impression.
            </li>
            <li>
              <strong>UI/UX Focused Design:</strong> Creating user-centric
              interfaces with consistency in layout, typography, and visual
              hierarchy.
            </li>
            <li>
              <strong>API Integration:</strong> Seamlessly connecting frontends
              with RESTful APIs for real-time data and dynamic content.
            </li>
            <li>
              <strong>Deployment & Optimization:</strong> Hosting your project
              on Netlify or Vercel, with performance tuning for speed and SEO.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
