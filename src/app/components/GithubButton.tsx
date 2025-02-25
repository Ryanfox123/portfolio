import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
};

function GithubButton({ url }: Props) {
  return (
    <div className="bg-white w-40 h-10 rounded-2xl shadow-lg">
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/githubblack.png"
          height={20}
          width={20}
          alt="github link"
          className="mx-auto w-12"
        />
        <p className="m-auto pt-2 h-10 text-center text-white bg-black w-full text-sm rounded-r-2xl">
          View on GitHub
        </p>
      </Link>
    </div>
  );
}

export default GithubButton;
