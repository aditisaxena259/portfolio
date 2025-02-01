import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const milestones = [
  { title: "Founder of SentinelGuard AI", description: "Cyber threat intelligence using Advanced Machine Learning and Deception Technology" },
  { title: "Core Committee Member of Top Clubs in VIT", description: "Active Tech Member of CodeChef, CSI & IEEECS" },
  { title: "Strong Academic Track Record", description: "9+ CGPA" },
];

const resumeCards = [
  { journey: "Education", description: "Vellore Institute of Technology, Vellore", description1: "Delhi Public School, Bangalore South", description2: "Presidency School, Bangalore" },
  { journey: "Skills", description: "Machine Learning", description1: "Cyber Security", description2: "Web Development" },
];

const MilestoneCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2 }}
    className="milestone-card"
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const ResumeCard = ({ journey, description, description1, description2 }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2 }}
    className="resume-card"
  >
    <h3>{journey}</h3>
    <p>{description}</p>
    <p>{description1}</p>
    <p>{description2}</p>
  </motion.div>
);

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h2>About Me</h2>
      </motion.div>

      <div className="about-content">
        

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="intro-para"
        >
          <p>
            Hi, I'm <strong>Aditi Saxena</strong>, a passionate computer science student with a love for
            innovation and technology. From founding <strong>SentinelGuard AI</strong> to actively
            contributing to various technical clubs at VIT, my journey has been a blend of learning,
            leading, and creating. I aim to leverage cutting-edge tools like AI and ML to solve real-world
            problems while continuously expanding my skill set.
            Hi, I'm <strong>Aditi Saxena</strong>, a passionate computer science student with a love for
            innovation and technology. From founding <strong>SentinelGuard AI</strong> to actively
            contributing to various technical clubs at VIT, my journey has been a blend of learning,
            leading, and creating. I aim to leverage cutting-edge tools like AI and ML to solve real-world
            problems while continuously expanding my skill set.
            Hi, I'm <strong>Aditi Saxena</strong>, a passionate computer science student with a love for
            innovation and technology. From founding <strong>SentinelGuard AI</strong> to actively
            contributing to various technical clubs at VIT, my journey has been a blend of learning,
            leading, and creating. I aim to leverage cutting-edge tools like AI and ML to solve real-world
            problems while continuously expanding my skill set.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="image-profile"
        >
          <img src="/image/profile.jpeg" alt="Profile" />
        </motion.div>
      </div>

      {/* Milestones Section */}
      <div className="milestones-container">
        {milestones.map((milestone, index) => (
          <MilestoneCard key={index} {...milestone} />
        ))}
      </div>

      {/* Resume Section */}
      <div className="resume-container">
        {resumeCards.map((card, index) => (
          <ResumeCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default About;
