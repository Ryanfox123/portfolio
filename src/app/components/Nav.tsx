"use client";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowNav = window.scrollY > 60;
      setShowNav((prevShowNav) => {
        if (prevShowNav !== shouldShowNav) {
          return shouldShowNav;
        }
        return prevShowNav;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-11/12 m-auto">
      {showNav ? <NavMenu /> : <NavLinks />}
      <hr className="mt-3 h-px border-slate-200" />
    </div>
  );
}

export default Nav;
