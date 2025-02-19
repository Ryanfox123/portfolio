import React from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import Description from "./Description";

function Slider() {
  return (
    <div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {projects.map((pic, id) => (
          <div
            className="block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
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
        <Description />
      </div>
    </div>
  );
}

export default Slider;
