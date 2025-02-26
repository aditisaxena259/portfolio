import React from "react";
import { FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { ReactComponent as Computer } from "../assets/computer.svg";
import "./AboutStory.css";

const AboutStory = () => {
  const expertise = [
    {
      icon: <LuBrainCircuit size={50} color="white" className="expertise-icon" />,
      title: "Machine Learning",
      subtitle: "Deep Learning",
      colorClass: "line1",
      description: "Experienced in Machine Learning and Deep Learning, specializing in Neural Networks, NLP & LLMs."
    },
    {
      icon: <FaReact size={50} color="white" className="expertise-icon" />,
      title: "Full-Stack ",
      subtitle: "Development",
      colorClass: "line2",
      description: "Proficient in front-end and back-end development using modern frameworks like Next.js and React."
    },
    {
      icon: <Computer width="50" height="50" stroke="white" fill="#06021d"className="expertise-icon" />,
      title: "Encryption",
      subtitle: "Cyber Security",
      colorClass: "line3",
      description: "Focused on cybersecurity, encryption, and ethical hacking techniques to ensure secure applications."
    }
  ];

  return (
    <div className="expertise-section">
      <div className="expertise-heading">MY EXPERTISE</div>
      
      <div className="expertise-container">
        {expertise.map((item, index) => (
          <div key={index} className="expertise-box">
            <div className="expertise-content">
              <div className="expertise-icon-wrapper">
                {item.icon}
              </div>
              
              <div className="expertise-title-container">
                <h3 className="expertise-title">{item.title}</h3>
                <div className={`expertise-underline ${item.colorClass}`}></div>
                <h4 className="expertise-subtitle">{item.subtitle}</h4>
              </div>
              
              <div className="expertise-body">
                <div className="code-element">
                  <div className="code-tag">&lt;h3&gt;</div>
                  <div className="code-line"></div>
                  <div className="code-tag">&lt;/h3&gt;</div>
                </div>
                <p className="expertise-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="code-background">
        <img src="/image/hello-world-html-code.webp" alt="Code" />
      </div>
    </div>
  );
};

export default AboutStory;