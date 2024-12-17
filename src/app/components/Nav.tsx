import React from "react";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <div className="flex-row flex">
      <NavMenu />
      <NavLinks />
    </div>
  );
}

export default Nav;
