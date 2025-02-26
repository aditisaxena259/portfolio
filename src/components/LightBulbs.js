"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(); // No MorphSVGPlugin

const LightBulbs = () => {
  const lightbulbRefs = useRef([]);

  useEffect(() => {
    lightbulbRefs.current.forEach((bulb, index) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ease: "power1.inOut" } });
      tl.to(bulb, { rotation: 5, transformOrigin: "top center", duration: 0.3 })
        .to(bulb, { rotation: -5, duration: 0.3 })
        .to(bulb, { rotation: 0, duration: 0.3 })
        .to(bulb.querySelector(".lightbulb-glow"), { opacity: 1, duration: 0.3, yoyo: true, repeat: 5 });
    });
  }, []);

  return (
    <div>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <div className="wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.138617 90.336713">
          {[3, 6, 5, 2, 1, 4].map((num, index) => (
            <g key={index} ref={(el) => (lightbulbRefs.current[index] = el)} className={`lightbulb lightbulb--${num}`}>
              <path className="light-bulb__chord" d="M45.1005633.00870392v68.74491" fill="none" strokeWidth=".5291667" />
              <g className="lightbulb-glow" transform={`translate(${index * 8 - 13} -211.35093658)`}>
                <circle className="light-bulb__glass" r="3.8407259" cy="286.7189" cx="42.372742" strokeWidth=".25604835" strokeLinecap="round" strokeLinejoin="round" />
                <rect className="light-bulb__fitting" ry=".37417734" y="279.35907" x="39.8592" height="3.96875" width="5.2916665" />
                <g className="light-bulb__filament">
                  <path className="light-bulb__filament" d="M43.563367 283.32784v2.64583M41.446699 283.32784v2.64583" strokeWidth=".21696301" />
                  <path className="light-bulb__filament" d="M42.505033 285.17992v1.32292M41.975866 285.17992v1.32292M43.0342 285.17992v1.32292" strokeWidth=".25654384" />
                </g>
                <path className="light-bulb__fitting-shine" d="M43.298786 279.35907h1.5875v3.96875h-1.5875z" />
                <circle className="light-bulb__bloom" r="3.5018382" cx="42.372742" cy="286.7189" strokeWidth=".93382347" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LightBulbs;
