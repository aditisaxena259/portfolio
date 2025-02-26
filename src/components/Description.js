import React from "react";
import "./Description.css";

const Description = ({ content, image, tech }) => {
    return (
        <div className="description">
            
            <div className="content">
                <div className="body-description">{content}</div>
                {image && (
                    <div className="logo-company">
                        <img className="cc-img" src={image} alt="Company Logo" />
                    </div>
                )}
            </div>
            <div className="techstack">
                {(Array.isArray(tech) ? tech : [tech]).map((item, index) => (
                    <div key={index} className="tech-box">{item}</div>
                ))}
            </div>
        </div>
    );
};

export default Description;
