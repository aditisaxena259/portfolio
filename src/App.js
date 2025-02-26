import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Myprojects from "./components/Myprojects.js";
import Experience from "./components/Experience.js";
import MyWork from "./components/Mywork.js";
import AboutStory from "./components/AboutStory.js";
import Footer from "./components/Footer.js";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";

const App = () => {
  const [showCursor, setShowCursor] = useState(true);

  // Hide cursor after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowCursor(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section with Animated Entry */}
      <section className="App">
        {/* Typewriter Effect for Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, ease: "easeOut" }} 
          className="My-name"
        >
          <span className="highlight">
            <Typewriter
              words={["I am Aditi Saxena"]}
              loop={1} 
              cursor={showCursor} // Cursor disappears after 3 sec
              cursorStyle="|"
              typeSpeed={100}
              delaySpeed={2000} 
            />
          </span>
        </motion.div>

        {/* Typewriter Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="My-tagline"
        >
          <Typewriter
            words={[
              "Web Development",
              "Machine Learning",
              "CyberSecurity Enthusiast"
            ]}
            loop={0} 
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="My-cta"
        >
          <a href="/documents/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="My-button">My Resume</button>
          </a>
        </motion.div>
      </section>

      <AboutStory />
      <MyWork />
      <Myprojects />
      <Experience />
      <Footer />
    </>
  );
};

export default App;
