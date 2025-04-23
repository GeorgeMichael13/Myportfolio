import React from "react";
import "./contact.css";
import contactImg from "../assets/contact-side.jpg"; // replace with your image

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-image">
        <img src={contactImg} alt="Contact visual" />
      </div>
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          Interested in working together or have a project idea in mind? Fill
          out the form below — I’d love to hear from you and help bring your
          vision to life!
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/13donvicky@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="service">Service Needed</label>
          <select name="service" required>
            <option value="">-- Select --</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="webapp">Web App</option>
            <option value="business">Business Website</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea name="message" rows={4} required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
