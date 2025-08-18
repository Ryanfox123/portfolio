"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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
    yLocationEnd: 1799,
  },
  {
    name: "Skills",
    snapLocation: 2000,
    yLocationStart: 1800,
    yLocationEnd: 2299,
  },
  {
    name: "Links",
    snapLocation: 3000,
    yLocationStart: 2300,
    yLocationEnd: 3000,
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <ul className="hidden md:flex flex-row gap-12">
        {navItems.map((item, index) => (
          <NavLinkItem key={index} item={item} scrollY={scrollY} />
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-black"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 z-50"
          >
            {navItems.map((item, index) => (
              <NavLinkItem key={index} item={item} scrollY={scrollY} />
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}
