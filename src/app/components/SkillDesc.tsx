"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillDescriptionProps {
  description: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ description }) => {
  return (
    <motion.div
      className=" sm:mt-0 sm:ml-4 p-4 bg-white rounded-xl shadow-lg w-64 text-gray-800 text-sm text-center z-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      {description}
    </motion.div>
  );
};

export default SkillDescription;
