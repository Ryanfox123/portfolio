"use client";
import React, { useState } from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import Description from "./Description";

function Slider() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    return activeImage === projects.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    return activeImage === 0
      ? setActiveImage(projects.length - 1)
      : setActiveImage(activeImage - 1);
  };

  return (
    <div className="w-3/5 m-auto my-6 gap-4 flex flex-col ">
      {projects.map((project, id) => (
        <div
          key={id}
          className={
            id === activeImage
              ? `flex flex-row bg-white rounded-lg shadow-lg`
              : "hidden"
          }
        >
          <Image
            src={project.src}
            alt={project.alt}
            width={250}
            height={500}
            className="rounded-l-lg object-cover h-[500px] w-[300px]"
          />
          <Description
            clickNext={clickNext}
            clickPrev={clickPrev}
            activeImgIndex={activeImage}
            urls={project.urls}
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
