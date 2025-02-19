import React from "react";
import { projects } from "@/Utils/constants";

const Description = () => {
  return (
    <div className="grid place-items-start w-full bg-white relative rounded-tr-3xl rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        {projects.map((project, id) => (
          <div
            className="block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
            key={id}
          >
            <div className="py-16 text-5xl font-extrabold">{project.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-black">
              {project.desc}
            </div>
            <button className="bg-teal text-white uppercase px-4 py-2 rounded-md my-10">
              button here
            </button>
            <div className="absolute bottom-1 w-full flex justify-center items-center"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
