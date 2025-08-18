"use client";

import React from "react";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

type Props = {
  url: string;
};

function YoutubeButton({ url }: Props) {
  return (
    <div className="w-40 h-10 rounded-2xl shadow-lg">
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="w-10 h-10 bg-white rounded-l-2xl flex items-center justify-center shadow-lg">
          <AiFillYoutube size={30} className="text-red-600" />
        </div>
        <div className="w-36 h-10 bg-red-600 rounded-r-2xl flex items-center justify-center shadow-lg">
          <p className="text-sm text-white text-center">View on YouTube</p>
        </div>
      </Link>
    </div>
  );
}

export default YoutubeButton;
