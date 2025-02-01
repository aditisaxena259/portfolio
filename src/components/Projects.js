import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%", // Slide in from right or left
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%", // Slide out to the left or right
    opacity: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  }),
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Debounced scroll handler to prevent repeated triggering
  const handleScroll = useCallback(
    (event) => {
      if (isAnimating) return; // Block new animations while one is running

      setIsAnimating(true); // Block new scroll events
      const direction = event.deltaY > 0 ? 1 : -1; // Down = 1, Up = -1

      setCurrentIndex((prevIndex) => {
        if (direction > 0) {
          return (prevIndex + 1) % projects.length; // Scroll down
        } else {
          return prevIndex === 0 ? projects.length - 1 : prevIndex - 1; // Scroll up
        }
      });

      // Allow scrolling again after the animation completes
      setTimeout(() => setIsAnimating(false), 800); // Match animation duration
    },
    [isAnimating]
  );

  return (
    <div
      className="projects-container"
      onWheel={handleScroll} // Trigger on scroll
    >
      <AnimatePresence custom={currentIndex}>
        <motion.div
          key={projects[currentIndex].id} // Unique animation per project
          className="project-card"
          custom={currentIndex} // Pass index for animations
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <h2>{projects[currentIndex].title}</h2>
          <p>{projects[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
