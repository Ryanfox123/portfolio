"use client";
import React, { useState } from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import Description from "./Description";

function Slider() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4 ">
      {projects.map((project, id) => (
        <div
          key={id}
          className={
            id === activeImage
              ? "flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden md:h-[500px]"
              : "hidden"
          }
        >
          <div className="flex-shrink-0 w-full md:w-[300px] h-[300px] md:h-full relative">
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 h-auto md:h-full">
            <Description
              clickNext={clickNext}
              clickPrev={clickPrev}
              activeImgIndex={activeImage}
              urls={project.urls}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
