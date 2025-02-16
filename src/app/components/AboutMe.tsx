"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Portrait = "/me.png";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="w-80 m-auto flex flex-col items-center mt-5"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        <Image
          src={Portrait}
          width={330}
          height={330}
          alt="portrait"
          className="rounded-full object-cover shadow-lg"
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
