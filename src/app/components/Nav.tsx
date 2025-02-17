"use client";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>{showNav ? <NavMenu /> : <NavLinks />}</div>
      <hr className="mt-3 h-px border-slate-200"></hr>
    </div>
  );
}

export default Nav;
