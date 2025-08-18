"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillDescription from "./SkillDesc";
import { Skill } from "../../Utils/skillsData";

interface SkillCardProps {
  skill: Skill;
  index: number;
  selectedSkill: string | null;
  onClick: (name: string) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  index,
  selectedSkill,
  onClick,
}) => {
  const isSelected = selectedSkill === skill.name;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`flex flex-col items-center justify-center w-32 h-32 bg-white rounded-2xl shadow-md cursor-pointer ${
          selectedSkill && !isSelected ? "opacity-50" : "opacity-100"
        }`}
        layout
        onClick={() => onClick(skill.name)}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="text-5xl mb-2"
          animate={{
            rotate: isSelected ? (index % 2 === 0 ? -15 : 15) : 0,
          }}
          whileHover={{
            rotate: index % 2 === 0 ? -10 : 10,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.div>
        <span className="text-sm font-semibold text-gray-800 text-center">
          {skill.name}
        </span>
      </motion.div>
      <div className="mt-2">
        {isSelected && <SkillDescription description={skill.description} />}
      </div>
    </div>
  );
};

export default SkillCard;
