"use client";

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { skillData as skillsData } from "../../Utils/skillData";

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelectedSkill(selectedSkill === name ? null : name);
  };

  return (
    <div className="flex flex-col items-center w-full mt-16 bg-teal py-12 shadow-2xl">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {skillsData.map((skill, idx) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={idx}
            selectedSkill={selectedSkill}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
