"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Portrait = "/me.png";

function Header() {
  return (
    <div className="mt-32">
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

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="m-auto w-2/3 font-bold text-3xl text-center mt-5"
      >
        Hey, Im <span className="text-teal">Ryan Fox.</span> Here you can check
        out all things related to me and my programming journey!
      </motion.h2>
    </div>
  );
}

export default Header;
