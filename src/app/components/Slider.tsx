"use client";
import React, { useEffect, useState } from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import Description from "./Description";

function Slider() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === projects.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
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
            height={300}
            width={300}
            alt="project pic"
            className="rounded-l-lg object-fill h-[500px] w-[250px]"
          />
          <Description
            clickNext={clickNext}
            clickPrev={clickPrev}
            activeImgIndex={activeImage}
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
