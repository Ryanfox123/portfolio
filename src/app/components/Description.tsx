"use client";
import React from "react";
import { projects } from "@/Utils/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubButton from "./GithubButton";
import YoutubeButton from "./YoutubeButton";
import LiveButton from "./LiveButton";

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  activeImgIndex: number;
  urls: {
    githubsrc: string;
    youtubesrc?: string;
    livesrc?: string;
  };
};

const Description = ({ clickNext, clickPrev, activeImgIndex, urls }: Props) => {
  return (
    <div className="bg-gray-700 w-full max-w-3xl rounded-r-lg flex flex-col justify-between shadow-lg p-6">
      <motion.div
        key={activeImgIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col gap-6 md:gap-12 mt-4 text-center"
      >
        <h3 className="mx-auto text-white text-2xl md:text-4xl font-semibold">
          {projects[activeImgIndex].title}
        </h3>
        <p className="text-white text-sm md:text-base">
          {projects[activeImgIndex].desc}
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 mt-8">
        <motion.div className="flex flex-wrap justify-center gap-4">
          {urls.githubsrc && <GithubButton url={urls.githubsrc} />}
          {urls.livesrc && <LiveButton url={urls.livesrc} />}
          {urls.youtubesrc && <YoutubeButton url={urls.youtubesrc} />}
        </motion.div>

        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={clickPrev}
          >
            <Image
              src="./left.svg"
              width={40}
              height={40}
              alt="click previous"
              className="w-8 md:w-10"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={clickNext}
          >
            <Image
              src="./right.svg"
              width={40}
              height={40}
              alt="click next"
              className="w-8 md:w-10"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Description;
