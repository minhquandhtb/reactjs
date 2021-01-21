import React, { useEffect, useState } from "react";
import { setUrl } from "../../actions/url";
import MenuList from "./MenuList";
import RefineByBrand from "./RefineByBrand";
import RefineByRatings from "./RefineByRatings";
import { useDispatch } from "react-redux";

function Menu(props) {
  const { url } = props;
  const [menu, setMenu] = useState([]);
  const [brand, setBrand] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const brand = [];
        for (let i = 0; i < result.length; i++) {
          brand.push(result[i].brand);
        }
        setBrand(new Set(brand));
      });
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

  const handleClear = () => {
    const url = {
      _url: "",
      key: "clear",
    };
    const action = setUrl(url);
    dispatch(action);
  };
  return (
    <div className="menu-wrapper">
      <button onClick={() => handleClear()}>Clear filter</button>
      <MenuList menu={menu} />
      <RefineByRatings />
      <RefineByBrand brand={brand} />
    </div>
  );
}

export default Menu;
