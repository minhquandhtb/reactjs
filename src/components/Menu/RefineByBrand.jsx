import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "./menuSlice";
function RefineByBrand(props) {
  const { brand } = props;
  const listBrand = [];
  const dispatch = useDispatch();
  const handleMenu = (key, _url) => {
    const url = {
      _url: _url,
      key: key,
    };
    const action = setUrl(url);
    dispatch(action);
  };
  for (const iterator of brand) {
    listBrand.push(
      <div
        onClick={() => {
          if (document.getElementById(iterator).checked === false) {
            handleMenu("brand", "");
          } else {
            handleMenu("brand", `&brand=${iterator}`);
          }
        }}
        key={iterator}
      >
        <input type="checkbox" id={iterator} name={iterator} value={iterator} />
        <label htmlFor={iterator}>{iterator}</label>
      </div>
    );
  }
  return (
    <div>
      <h5>Brands</h5>
      <form>{listBrand}</form>
    </div>
  );
}

export default RefineByBrand;
