import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaBrain, FaReact, FaLock, FaServer, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiJupyter, SiTensorflow, SiPytorch, SiScikitlearn, SiSupabase, SiAstro, SiNumpy } from "react-icons/si";
import "./skills.css"; 

const skills = [
  { name: "Machine Learning", icon: <FaBrain className="text-blue-500" /> },
  { name: "Cyber Security", icon: <FaShieldAlt className="text-red-500" /> },
  { name: "Web Development", icon: <FaCode className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
  { name: "Encryption", icon: <FaLock className="text-purple-500" /> },
  { name: "Backend Dev", icon: <FaServer className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Astro", icon: <SiAstro className="text-indigo-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "Keras", icon: <SiScikitlearn className="text-blue-500" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="text-green-500" /> },
  { name: "NumPy", icon: <SiNumpy className="text-green-500"/>}
];

const SkillCard = ({ name, icon }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="skill-card"  // Apply the class from the CSS
  >
    <div className="text-3xl">{icon}</div>
    <p>{name}</p>
  </motion.div>
);

const SkillGrid = () => {
  return (
    
    <section className="skills-section">
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h2>SKILLS</h2>
      </motion.div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;
