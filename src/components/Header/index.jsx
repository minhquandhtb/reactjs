import React from "react";
import SearchProduct from "./SearchProduct";
import Logo from "./Logo";

function Header() {
  return (
    <div className="nav-bar">
      <header className="flex-row-x-center">
        <Logo />
        <SearchProduct />
      </header>
    </div>
  );
}

export default Header;
