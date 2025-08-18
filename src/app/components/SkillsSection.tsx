"use client";

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { skillsData } from "../../Utils/skillsData";

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelectedSkill(selectedSkill === name ? null : name);
  };

  const rowSize = 5;
  const rows = [];
  for (let i = 0; i < skillsData.length; i += rowSize) {
    rows.push(skillsData.slice(i, i + rowSize));
  }

  return (
    <div className="flex flex-col items-center w-full mt-16 bg-teal py-12 shadow-2xl">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        Skills & Technologies
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-5xl">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6 flex-wrap">
            {row.map((skill, idx) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={idx}
                selectedSkill={selectedSkill}
                onClick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
