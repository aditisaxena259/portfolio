import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import MyScene from './components/Myscene.js';
import SkillCard from './components/Skills.js';
import Projects from './components/Projects.js';
import { motion } from "framer-motion";
import "./App.css"; 
const App = () => {
  return (
    <>
    <Navbar />
        {/* Rest of your app content goes here */}
    
    <section className="App">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="My-name"
      >
        Hi, I'm <span className="highlight">Aditi Saxena</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="My-tagline"
      >
        Web Development  <span className="highlight"> MachineLearning </span> & CyberSecurity <span className="highlight"> Enthusiast </span>.
      </motion.div>

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
    <About/>
    <SkillCard/>
    

  </>
  );
};



export default App;
