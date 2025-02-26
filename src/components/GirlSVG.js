import { useState } from "react";
import "./GirlSVG.css"; // Add CSS for transitions

const GirlSVG = () => {
  const [gogglesOn, setGogglesOn] = useState(false);
  const [eyelidOffset, setEyelidOffset] = useState(0);
  const [smile, setSmile] = useState("M80 120 Q100 135, 120 120");

  const toggleGoggles = () => setGogglesOn((prev) => !prev);

  const handleMouseMove = (e) => {
    let y = e.nativeEvent.offsetY;
    setEyelidOffset((y - 100) / 10);
    setSmile(y > 110 ? "M80 120 Q100 150, 120 120" : "M80 120 Q100 135, 120 120");
  };

  return (
    <svg viewBox="0 0 200 200" width="200" height="200" id="girl-svg" onMouseMove={handleMouseMove} onClick={toggleGoggles}>
      {/* Face */}
      <circle cx="100" cy="100" r="50" fill="peachpuff" stroke="black"/>

      {/* Eyes */}
      <circle cx="80" cy="90" r="8" fill="white"/>
      <circle cx="120" cy="90" r="8" fill="white"/>

      {/* Pupils */}
      <circle cx="80" cy="90" r="4" fill="black"/>
      <circle cx="120" cy="90" r="4" fill="black"/>

      {/* Eyelids (Move Based on Mouse) */}
      <rect x="72" y="80" width="16" height="8" fill="peachpuff" className="eyelid" style={{ transform: `translateY(${eyelidOffset}px)` }}/>
      <rect x="112" y="80" width="16" height="8" fill="peachpuff" className="eyelid" style={{ transform: `translateY(${eyelidOffset}px)` }}/>

      {/* Eyebrows */}
      <rect x="72" y="70" width="16" height="4" fill="black" className="eyebrow"/>
      <rect x="112" y="70" width="16" height="4" fill="black" className="eyebrow"/>

      {/* Mouth */}
      <path d={smile} stroke="black" fill="transparent" strokeWidth="3"/>

      {/* Goggles (Hidden Initially) */}
      <g style={{ opacity: gogglesOn ? 1 : 0, transition: "opacity 0.5s" }}>
        <circle cx="80" cy="90" r="12" fill="gray" stroke="black"/>
        <circle cx="120" cy="90" r="12" fill="gray" stroke="black"/>
        <rect x="85" y="88" width="30" height="4" fill="black"/>
      </g>
    </svg>
  );
};

export default GirlSVG;
