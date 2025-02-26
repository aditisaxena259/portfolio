import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Added email and phone icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu on click (for mobile)
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Section: Logo or Name */}
      <div className="navbar-left">
        <span className="logo-text"></span>
      </div>

      {/* Center Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeLink === "resume" ? "active" : ""}
            onClick={() => handleLinkClick("resume")}
          >
            My Startup
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@saxena.aditi2805"
            target="_blank"
            rel="noopener noreferrer"
            className={activeLink === "portfolio" ? "active" : ""}
          >
            Blogs
          </a>
        </li>
        <li>
          <button 
            className={`contact-button ${showContact ? "active" : ""}`} 
            onClick={toggleContact}
          >
            Let's Connect
          </button>
        </li>
      </ul>

      {/* Right Section: Social Links & Mobile Menu Toggle */}
      <div className="navbar-right">
        {/* Contact Popup */}
        <div className={`contact-popup ${showContact ? "show" : ""}`}>
          <p>Want to work together? Reach out to me:</p>
          <a href="mailto:your@email.com" className="contact-link">
            <FaEnvelope /> saxena.aditi2805@gmail.com
          </a>
          <a href="tel:+1234567890" className="contact-link">
            <FaPhoneAlt /> +91 9811912821
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aditi-saxena-4674ab222/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-circled--v1.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/aditisaxena259"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;