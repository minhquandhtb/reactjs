import React from "react";
import SearchProduct from "./SearchProduct";
import Logo from "./Logo";

function Header(props) {
  const {handleMenu}=props;
  return (
    <div className="nav-bar">
      <header className="flex-row-x-center">
        <Logo />
        <SearchProduct handleMenu={handleMenu}/>
      </header>
    </div>
  );
}

export default Header;
