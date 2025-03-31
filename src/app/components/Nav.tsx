"use client";
import React from "react";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <div className="p-1 fixed top-0 w-full px-8 bg-opacity-95 bg-white shadow-lg z-50">
      <NavLinks />
    </div>
  );
}

export default Nav;
