import React from "react";
import Image from "next/image";
import GHicon from "../../../public/github.png";
import LIicon from "../../../public/linkedin.png";

function NavLinks() {
  return (
    <div className="flex flex-row h-12 mt-3">
      <div className="flex flex-col">
        <a
          href="https://github.com/ryanfox123"
          target="_blank"
          className="transition-transform opacity-80 duration-200 hover:scale-110 hover:opacity-100"
        >
          <Image src={GHicon} width={60} height={60} alt="github icon" />
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/ryan-fox-7708102b1/"
        target="_blank"
        className="ml-3 transition-transform opacity-80 duration-200 hover:scale-110 hover:opacity-100"
      >
        <Image src={LIicon} width={60} height={60} alt="linkedin icon" />
      </a>
    </div>
  );
}

export default NavLinks;
