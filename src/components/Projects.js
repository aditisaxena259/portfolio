import React from "react";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import "./Projects.css";

const Projects = () => {
  

  return (
    <div className="headclass">
      About Me.
      <div className="canvas-container">
      
      </div>
    <div className="parentbox">
      <div className="box">
        <div className="parentshape">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <hr/>
      </div>
      
        <div className="box" id="one">
          <div className="parentshape">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <hr/>
        </div>
      </div>
    </div>  
  );
};

export default Projects;
