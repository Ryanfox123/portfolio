import React from "react";
import Image from "next/image";
import { projects } from "@/Utils/constants";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import { motion } from "framer-motion";

type Props = {
  clickNext: any;
  clickPrev: any;
  activeImgIndex: any;
};

const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-white relative rounded-tr-3xl rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4">
        {projects.map((project, id) => (
          <div
            className={
              id === activeImgIndex
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
                : "hidden"
            }
            key={id}
          >
            <div className="py-16 text-5xl font-extrabold">{project.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-black">
              {project.desc}
            </div>

            <button className="bg-white text-teal uppercase px-4 py-2 rounded-md my-10">
              button here
            </button>
            <div className="absolute bottom-1 w-full flex justify-center items-center">
              <div
                className="absolute bottom-2 right-10 cursor-pointer"
                onClick={clickPrev}
              >
                <Image
                  src={left}
                  alt="cycle left image"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className="absolute bottom-2 right-2 cursor-pointer"
                onClick={clickNext}
              >
                <Image
                  src={right}
                  alt="cycle right image"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
