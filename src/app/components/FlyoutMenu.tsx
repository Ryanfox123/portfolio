"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlyoutMenuProps {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

function FlyoutMenu({ setIsHovered }: FlyoutMenuProps) {
  const [currentSeg, setCurrentSeg] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="bg-slate-200 w-64 p-4 shadow-md text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex flex-col gap-4">
        {["Projects", "About Me", "Links"].map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative group text-lg text-lapis font-medium cursor-pointer"
          >
            <p
              onClick={() => {
                setCurrentSeg(index);
              }}
            >
              {item}
            </p>
            {index !== 4 && (
              <span
                className={`block h-0.5 bg-teal ${
                  currentSeg === index ? "w-full" : "w-10"
                } mt-2 transition-all duration-500 group-hover:w-full`}
              ></span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default FlyoutMenu;
