import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
};

function GithubButton({ url }: Props) {
  return (
    <div className=" w-40 h-10 rounded-2xl shadow-lg">
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="w-10 rounded-l-2xl shadow-lg h-10 bg-white">
          <Image
            src="/githubblack.png"
            height={20}
            width={20}
            alt="github link"
            className="mx-auto w-12"
          />
        </div>
        <div className="w-36 rounded-r-2xl shadow-lg h-10 bg-black">
          <p className="m-auto pt-2 h-10 text-center text-white text-sm w-full">
            View on GitHub
          </p>
        </div>
      </Link>
    </div>
  );
}

export default GithubButton;
