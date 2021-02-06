import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "./menuSlice";

function RefineByPrice() {
  const dispatch = useDispatch();
  const handleMenu = (keyHandle, urlHandle) => {
    const changeUrl = {
      _url: urlHandle,
      key: keyHandle,
    };
    const action = setUrl(changeUrl);
    dispatch(action);
  };
  const listPrice = [];

  return (
    <div>
      <h5>Prices</h5>
      <ul>
        <li onClick={() => handleMenu("price", "&price_lte=1")}>{"<$1"}</li>
        <li onClick={() => handleMenu("price", "&price_gte=1&price_lte=100")}>
          $1-100
        </li>
        <li
          onClick={() => handleMenu("price", "&price_gte=100&price_lte=1000")}
        >
          $100-1000
        </li>
        <li onClick={() => handleMenu("price", "&price_gte=1000")}>
          {">$1000"}
        </li>
      </ul>
    </div>
  );
}

export default RefineByPrice;
