import React, { useEffect, useState } from "react";
import MenuList from "./MenuList"

function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((res) => res.json())
      .then(
        (result) => {
          setMenu(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="menu-wrapper">
      <MenuList menu={menu}/>
    </div>
  );
  
}

export default Menu;
