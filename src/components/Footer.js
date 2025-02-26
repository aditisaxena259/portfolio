import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Branding */}
        <div className="footer-brand">
          <h2>Aditi Saxena</h2>
          <p>Building the Future with AI, Cybersecurity & Code.</p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="footer-socials">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/aditi-saxena-4674ab222/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aditisaxena259" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:saxena.aditi2805@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Back to Top Button */}
      <div className="footer-bottom">
        <p>© 2025 Aditi Saxena. All Rights Reserved.</p>
        <a href="#home" className="back-to-top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
