"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Projects",
    snapLocation: 650,
    yLocationStart: 350,
    yLocationEnd: 949,
  },
  {
    name: "About Me",
    snapLocation: 1400,
    yLocationStart: 950,
    yLocationEnd: 1999,
  },
  {
    name: "Links",
    snapLocation: 2000,
    yLocationStart: 2000,
    yLocationEnd: 2500,
  },
];

type Item = {
  name: string;
  snapLocation: number;
  yLocationStart: number;
  yLocationEnd: number;
};

function NavLinkItem({ item, scrollY }: { item: Item; scrollY: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const inScrollRange =
    scrollY >= item.yLocationStart && scrollY <= item.yLocationEnd;

  const variant = isHovered ? "hover" : inScrollRange ? "active" : "initial";

  return (
    <li
      onClick={() => {
        scrollTo({
          top: item.snapLocation,
          behavior: "smooth",
        });
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group cursor-pointer px-4 py-2 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial="initial"
          animate={variant}
          variants={{
            initial: { height: "20%", opacity: 0.3 },
            hover: { height: "40%", opacity: 0.6 },
            active: { height: "40%", opacity: 0.6 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-3 left-0 w-full bg-teal pointer-events-none"
        />

        <motion.div className="relative z-10 text-lg text-black font-medium tracking-wider">
          {item.name}
        </motion.div>
      </motion.div>
    </li>
  );
}

export default function NavLinks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row h-12 justify-between">
      <ul className="flex flex-row gap-20">
        {navItems.map((item, index) => (
          <NavLinkItem key={index} item={item} scrollY={scrollY} />
        ))}
      </ul>
    </div>
  );
}
