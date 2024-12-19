import React from "react";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <div>
      <div className="flex-row flex justify-between">
        <NavMenu />
        <NavLinks />
      </div>
      <hr className="mt-3 h-px border-slate-200"></hr>
    </div>
  );
}

export default Nav;
