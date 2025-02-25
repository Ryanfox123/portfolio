import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
};

function YoutubeButton({ url }: Props) {
  return (
    <div className="bg-white w-40 h-10 rounded-2xl shadow-lg">
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/playbutton.png"
          height={30}
          width={30}
          alt="youtube link"
          className="mx-auto w-12"
        />
        <p className="m-auto pt-2 h-10 text-center text-white bg-red-600 w-full text-sm rounded-r-2xl">
          View on Youtube
        </p>
      </Link>
    </div>
  );
}

export default YoutubeButton;
