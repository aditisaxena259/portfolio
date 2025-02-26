import React, { useState } from "react";
import "./Experience.css";
import Description from "./Description";

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleButton(index) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    const experiences = [
        {
            title: "Startup Initiative",
            date: "March 2024",
            description: "Led the development of SentinelGuard AI, an innovative cybersecurity startup leveraging AI-driven threat detection models. Designed scalable architectures and implemented machine learning techniques to identify and mitigate cyber threats effectively.",
            image: "/image/startup.png",
            tech: " NextJs | Astro | CyberSecurity | Artificial Intelligence | Machine Learning ",
        },
        {
            title: "Core at CodeChef",
            date: "March 2024",
            description: "Played a key role in organizing and managing competitive coding events, ensuring seamless execution and engagement. Mentored juniors in problem-solving strategies and contributed to the development of platform features to enhance the coding experience.",
            image: "/image/codechef.png",
            tech: " Reactjs | shadcn | Zustand | NextJs | Pandas | Numpy | Scikit | Encryption | CyberSecurity ",
        },
        {
            title: "Core Member at CSI",
            date: "March 2024",
            description: "Contributed to the frontend development of multiple tech events, ensuring smooth API integrations and a seamless user experience. Conducted hands-on workshops on emerging technologies to engage students and enhance their technical skills.",
            image: "/image/csi.png",
            tech: " Nextjs | React | Golang fiber | Prisma | Machine Learning ",
        },
        {
            title: "BHAI Internship",
            date: "March 2024",
            description: "Worked on backend optimization, refining database queries for improved performance and efficiency. Integrated OAuth authentication for secure access control, ensuring robust security measures were in place for user data protection.",
            image: "/image/bhai.png",
            tech: " Marketing | Google Search | CyberSecurity | Artificial Intelligence | Machine Learning ",
        },
    ];

    return (
        <div className="experience-container">
            <div className="experience-header">
                <h2>Experience</h2>
                <div className="header-underline"></div>
            </div>

            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <div 
                        key={index} 
                        className={`experience-item ${activeIndex === index ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="experience-header-box">
                            <div className="experience-content">
                                <div className="experience-title">
                                    <span className="title-marker"></span>
                                    {experience.title}
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-date">{experience.date}</span>
                                    <button 
                                        onClick={() => handleButton(index)} 
                                        className={`expand-button ${hoveredIndex === index ? 'hovered' : ''}`}
                                        aria-label={activeIndex === index ? "Collapse details" : "Expand details"}
                                    >
                                        {activeIndex === index ? "−" : "+"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`experience-details ${activeIndex === index ? 'active' : ''}`}>
                            <Description 
                                title={experience.title}
                                content={experience.description} 
                                image={experience.image} 
                                tech={experience.tech}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;