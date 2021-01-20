import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import RefineByBrand from "./RefineByBrand";
import RefineByRatings from "./RefineByRatings";

function Menu(props) {
  const { url, handleMenu } = props;
  const [menu, setMenu] = useState([]);
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          const brand=[];
          for (let i = 0; i < result.length; i++) {
            brand.push(result[i].brand);
            
          }
          setBrand(new Set(brand));
        }
      );
  }, [url]);
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
    <button onClick={()=>handleMenu('clear')}>Clear filter</button>
      <MenuList menu={menu} handleMenu={handleMenu} />
      <RefineByRatings handleMenu={handleMenu} />
      <RefineByBrand brand={brand} handleMenu={handleMenu}/>
    </div>
  );
}

export default Menu;
