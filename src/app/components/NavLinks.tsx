import React from "react";
import Image from "next/image";
import GHicon from "../../../public/github.png";
import LIicon from "../../../public/linkedin.png";
import { motion } from "framer-motion";

function NavLinks() {
  return (
    <div className="flex flex-row h-12 mt-3 justify-between">
      <div>
        <ul className="flex flex-row gap-20">
          {["About Me", "Projects", "Experience", "Links"].map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative group cursor-pointer px-4 py-2 flex justify-center items-center overflow-hidden"
                whileHover="hover"
                whileTap="hover"
              >
                {/* Background Animation (Expands from Bottom) */}
                <motion.div
                  initial={{ height: "20%" }}
                  variants={{ hover: { height: "100%" } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 w-full bg-teal opacity-30 group-hover:opacity-60 pointer-events-none"
                />

                {/* Text */}
                <motion.li className="relative z-10 text-lg text-black font-bold tracking-wider">
                  {item}
                </motion.li>
              </motion.div>
            )
          )}
        </ul>
      </div>

      {/* Social Links */}
      <div className="flex flex-row">
        <a
          href="https://github.com/ryanfox123"
          target="_blank"
          className="transition-transform opacity-80 duration-200 hover:scale-110 hover:opacity-100"
        >
          <Image src={GHicon} width={60} height={60} alt="GitHub icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-fox-7708102b1/"
          target="_blank"
          className="ml-3 transition-transform opacity-80 duration-200 hover:scale-110 hover:opacity-100"
        >
          <Image src={LIicon} width={60} height={60} alt="LinkedIn icon" />
        </a>
      </div>
    </div>
  );
}

export default NavLinks;
