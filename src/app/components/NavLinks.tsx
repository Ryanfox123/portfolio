import React from "react";
import { motion } from "framer-motion";

export default function NavLinks() {
  return (
    <div className="flex flex-row h-12  justify-between">
      <div>
        <ul className="flex flex-row gap-20">
          {["Projects", "About Me", "Links"].map((item, index) => (
            <li key={index}>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative group cursor-pointer px-4 py-2 flex justify-center items-center"
                whileHover="hover"
                whileTap="hover"
              >
                <motion.div
                  initial={{ height: "20%" }}
                  variants={{ hover: { height: "40%" } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-3 left-0 w-full bg-teal opacity-30 group-hover:opacity-60 pointer-events-none"
                />

                <motion.div className="relative z-10 text-lg text-black font-medium tracking-wider">
                  {item}
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
