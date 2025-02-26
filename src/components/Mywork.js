import React from "react";
import "./Mywork.css"
import  GirlSVG from "../components/GirlSVG";
import LightBulbs from "./LightBulbs";

const MyWork = () => {
    return (
        <div className="MyWork">
            <div className="work">
                <h1>My <br/>Work </h1>
                <div className="describework">
                    <p>Contributed in some of the biggest technological events in my college.
                        I believe in creating a beautiful culmination of different technologies through a conjuncture of 
                        efficient frameowork. I strive for creation and innovation. </p>
                </div>
            </div>
            <div className="project">
              <video width="600" height="400" autoPlay loop muted playsInline src="/animation.webm" type="video/webm"></video>
            </div>
        </div>
    );
};

export default MyWork;
