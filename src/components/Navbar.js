import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // Tracks active link
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Tracks scroll state for sticky navbar

  // Handles click on nav links
  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link state
    setMenuOpen(false); // Close the mobile menu after clicking a link
  };

  // Toggles the mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu on and off for mobile
  };

  // Scroll event listener for sticky navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left section containing navigation links */}
      <div className="navbar-left">
        <ul className="nav-links">
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
              className={activeLink === "portfolio" ? "active" : ""}
              onClick={() => handleLinkClick("portfolio")}
            >
              Blogs
            </a>
          </li>
        </ul>
      </div>

      {/* Center section (optional for logos or additional content) */}
      <div className="navbar-center">
        {/* Add content if needed */}
      </div>

      {/* Right section for mobile menu and social links */}
      <div className="navbar-right">
        {/* Mobile menu toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Social links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aditi-saxena-4674ab222/"
            target="_blank"
            rel="noopener noreferrer"
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
