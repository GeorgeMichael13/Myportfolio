import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import logo from "../assets/MYLOG.png"; // <- Replace with your logo file path
import "./footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Left: Logo */}
      <div className="footer-left">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Center: Text */}
      <div className="footer-center">
        <p>GTECH &copy; {currentYear} All rights reserved.</p>
      </div>

      {/* Right: Social Icons */}
      <div className="footer-right">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://yourwebsite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
