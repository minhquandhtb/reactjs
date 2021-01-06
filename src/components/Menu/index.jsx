import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import RefineByRatings from "./RefineByRatings";

function Menu(props) {
  const { handleMenu } = props;
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
      <MenuList menu={menu} handleMenu={handleMenu} />
      <RefineByRatings handleMenu={handleMenu} />
    </div>
  );
}

export default Menu;
