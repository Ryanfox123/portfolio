import React from "react";
import Link from "next/link";

type Props = {
  url: string;
};

function YoutubeButton({ url }: Props) {
  return (
    <div className="bg-teal w-40 h-10 rounded-2xl shadow-lg">
      <Link
        href={url}
        className="flex flex-row w-full mx-auto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p className="m-auto pt-2 h-10 text-center text-white w-full rounded-2xl text-sm ">
          View live version
        </p>
      </Link>
    </div>
  );
}

export default YoutubeButton;
