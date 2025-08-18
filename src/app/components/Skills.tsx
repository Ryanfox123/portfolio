"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiReactos,
  SiDocker,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "React Native", icon: <SiReactos className="text-blue-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
];

function Skills() {
  return (
    <div className="flex flex-col items-center w-full mt-16 bg-teal py-12 shadow-2xl">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-2xl shadow-md cursor-pointer"
            whileHover={{
              scale: 1.15,
              y: -5,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="text-5xl mb-2"
              whileHover={{ rotate: idx % 2 === 0 ? -15 : 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm font-semibold text-gray-800 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
