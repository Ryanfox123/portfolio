"use client";
import React, { useRef, useState, useEffect } from "react";
import FlyoutMenu from "./FlyoutMenu";

const NavMenu: React.FC = () => {
  const rfRef = useRef<HTMLDivElement | null>(null);
  const [isNear, setIsNear] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rfRef.current) {
        const rect = rfRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        const threshold = 175;

        setIsNear(distance < threshold);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-auto flex flex-row gap-4 hover:cursor-pointer">
      <div
        ref={rfRef}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <p
          className={`border-2 p-3 font-extrabold tracking-widest text-4xl transition-transform duration-500 ease-in-out text-lapis border-teal bg-white overflow-hidden relative ${
            isNear || isClicked || isHovered ? "scale-105 shadow-lg" : ""
          }`}
        >
          <span
            className={`absolute inset-0 bg-slate-200 ${
              isNear || isClicked || isHovered
                ? "translate-x-0"
                : "-translate-x-20"
            } group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
          ></span>
          <span className="relative z-10">RF</span>
        </p>
      </div>
      <div
        className="relative"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <p
          className={`m-auto pt-4 text-lapis transition-all text-2xl duration-500 ease-in-out`}
        >
          Menu
        </p>
        {isNear || isClicked || isHovered ? (
          <div className="fixed top-32 left-7">
            <FlyoutMenu setIsHovered={setIsHovered} />
          </div>
        ) : null}
        <span
          className={`absolute left-0 bottom-3 h-1 bg-slate-200 transition-all duration-500 ease-in-out ${
            isNear || isClicked || isHovered ? "w-full" : "w-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default NavMenu;
