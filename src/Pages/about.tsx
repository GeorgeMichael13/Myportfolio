import React from "react";
import profileImg from "../assets/ME1.jpg"; // Replace with your image
import devImg from "../assets/ME2.jpg";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Floating background shapes */}
      <div className="about-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      {/* About Section */}
      <section className="about-section fade-in">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            My journey into programming began with curiosity and quickly turned
            into a deep passion for building digital solutions. Over the years,
            I’ve honed my skills in HTML, CSS, Bootstrap, JavaScript, React.js,
            and Node.js, allowing me to craft sleek, responsive interfaces and
            dynamic web applications. I specialize in turning ideas into
            elegant, functional websites—always with a focus on user experience
            and modern design principles. My commitment to clean code, seamless
            UI/UX, and full responsiveness sets me apart. Working with me means
            more than just hiring a developer—you’re gaining a dedicated partner
            who genuinely cares about your project’s success. Let’s create
            something amazing together.
          </p>
          <p>
            I'm highly skilled in HTML, CSS, Bootstrap, React.js, and Node.js.
            These tools empower me to craft responsive, elegant, and efficient
            web experiences.
          </p>
        </div>
        <div className="about-image-frame">
          <img src={profileImg} alt="Profile" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section fade-in">
        <div className="services-image-frame">
          <img src={devImg} alt="Development" />
        </div>
        <div className="services-text">
          <h2>What I Do</h2>
          <ul>
            <li>Modern Frontend Development with React & TypeScript</li>
            <li>Responsive UI Design using CSS & Bootstrap</li>
            <li>REST API Integration and Dynamic Content</li>
            <li>Full-stack Projects with Node.js</li>
            <li>Hosting and Optimization on Vercel or Netlify</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
