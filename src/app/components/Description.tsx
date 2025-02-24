"use client";
import React from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  activeImgIndex: number;
};

const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
  return (
    <div className="bg-gray-400 w-[900px] rounded-r-lg flex flex-col justify-between shadow-lg p-6">
      <motion.div
        key={activeImgIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col gap-16 mt-8"
      >
        <h3 className="w-max mx-auto text-white text-4xl">
          {projects[activeImgIndex].title}
        </h3>
        <p className="text-white text-center">
          {projects[activeImgIndex].desc}
        </p>
      </motion.div>
      <div className="mx-auto w-max flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={clickPrev}
        >
          <Image src="./left.svg" width={50} height={50} alt="click previous" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={clickNext}
        >
          <Image src="./right.svg" width={50} height={50} alt="click next" />
        </motion.button>
      </div>
    </div>
  );
};

export default Description;
