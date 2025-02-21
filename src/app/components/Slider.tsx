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

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="grid place-items-center grid-cols-2 w-4/6 mt-10 mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {projects.map((pic, id) => (
          <div
            className={
              id === activeImage
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
                : "hidden"
            }
            key={id}
          >
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
            />
          </div>
        ))}
        <Description
          activeImgIndex={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
}

export default Slider;
