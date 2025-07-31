"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavLinks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row h-12  justify-between">
      <div>
        <ul className="flex flex-row gap-20">
          {[
            { name: "Projects", yLocationStart: 650, yLocationEnd: 1399 },
            { name: "About Me", yLocationStart: 1400, yLocationEnd: 1999 },
            { name: "Links", yLocationStart: 2000, yLocationEnd: 2500 },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => {
                scrollTo({
                  top: item.yLocationStart,
                  behavior: "smooth",
                });
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative group cursor-pointer px-4 py-2 flex justify-center items-center"
                whileHover="hover"
                whileTap="hover"
              >
                <motion.div
                  initial={{ height: "20%" }}
                  variants={{ hover: { height: "40%" } }}
                  animate={
                    scrollY >= item.yLocationStart &&
                    scrollY <= item.yLocationEnd
                      ? { height: "40%", opacity: 0.6 }
                      : { height: "20%" }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-3 left-0 w-full bg-teal opacity-30 group-hover:opacity-60 pointer-events-none"
                />

                <motion.div className="relative z-10 text-lg text-black font-medium tracking-wider">
                  {item.name}
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
