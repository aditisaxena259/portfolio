import React from "react";
import "./Myprojects.css";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Myprojects = () => {
    const projects = [
        {
            title: "DevSOC'25 - CodeChef Portal",
            image: "/image/dashboard.png",
            repo: "https://github.com/CodeChefVIT/devsoc-portal-25",
            techStack: "Next.js | Axios | Zustand | Shadcn",
            description: "A hackathon management portal designed for seamless team registration, problem statements, and result tracking."
        },
        {
            title: "CCS'25 - CSI Portal",
            image: "/image/ccs.png",
            repo: "https://github.com/csivitu/ccs-2025",
            techStack: "Next.js | Prisma | Zustand | Shadcn",
            description: "An event management platform for CSI, providing a seamless registration and tracking system for students."
        },
        {
            title: "KDD 99 Dataset EDA",
            image: "/image/EDA.png",
            repo: "https://github.com/aditisaxena259/kdd-99",
            techStack: "Random Trees | Decision Forests | Pandas | Numpy",
            description: "Exploratory Data Analysis on the KDD 99 dataset for identifying network intrusions using various ML techniques."
        },
        {
            title: "Clueminati'24 CodeChef",
            image: "/image/dashboard.png",
            repo: "https://github.com/CodeChefVIT/clueminati-portal-2.0",
            techStack: "Next.js | Axios | Shadcn",
            description: "An interactive treasure hunt game developed for Clueminati'24 with real-time tracking and challenges."
        },
        {
            title: "Sentiment Analysis",
            image: "/image/senti.png",
            repo: "https://github.com/aditisaxena259/nextjs-signup",
            techStack: "Random Trees | Decision Forests | Pandas | Numpy",
            description: "A sentiment analysis model that processes text data and determines the underlying emotions using ML techniques."
        },
        {
            title: "Pothole Detector",
            image: "/image/pothole.png",
            repo: "https://github.com/your-repo/pothole-detector",
            techStack: "Next.js | K-Means Clustering",
            description: "A machine learning-based pothole detection system that analyzes road images to identify damage."
        },
        {
            title: "Sentinel GuardAI Portal",
            image: "/image/startup.png",
            repo: "https://github.com/yashxita/sentinel-guard-ai-landing",
            techStack: "Next.js | Axios | Zustand | Shadcn",
            description: "A cybersecurity intelligence dashboard that provides insights into cyber threats using AI-powered analysis."
        },
        {
            title: "Forkthis'24 - CSI",
            image: "/image/forkthis.png",
            repo:"https://github.com/aditisaxena259/forkthis24-frontend",
            techStack: "Next.js | Axios | Linear Regression",
            description: "An open-source project aimed at resolving faulty repositories with community-driven fixes."
        }
    ];

    return (
        <div className="parent">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} />
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub size={22} />
                                </a>
                                <h3>{project.title}</h3>
                                <hr />
                                <h4>{project.techStack}</h4>
                                <hr />
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Myprojects;
