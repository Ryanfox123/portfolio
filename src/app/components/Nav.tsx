"use client";

import React from "react";
import NavLinks from "./NavLinks";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center fixed top-0 w-full bg-white bg-opacity-95 shadow-lg z-50 p-4 px-8">
      <div className="flex-shrink-0">
        <NavLinks />
      </div>
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-teal md:hidden">
        Ryan-Fox.tech
      </h1>
    </div>
  );
};

export default Nav;
