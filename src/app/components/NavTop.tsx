import React from "react";
import { motion } from "framer-motion";

function NavTop() {
  return (
    <div className="fixed left-8">
      <ul className="flex flex-row gap-20">
        {["About Me", "Projects", "Experience", "Links"].map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative group text-lg text-lapis font-bold tracking-wider cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default NavTop;
