import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
};

function YoutubeButton({ url }: Props) {
  return (
    <div>
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="w-10 rounded-l-2xl shadow-lg h-10 bg-white">
          <Image
            src="/playbutton.png"
            height={30}
            width={30}
            alt="youtube link"
            className="mx-auto w-12"
          />
        </div>
        <div className="w-36 rounded-r-2xl shadow-lg h-10 bg-red-600">
          <p className="m-auto pt-2 h-10 text-center text-white w-full text-sm">
            View on Youtube
          </p>
        </div>
      </Link>
    </div>
  );
}

export default YoutubeButton;
