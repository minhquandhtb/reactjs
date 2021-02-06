import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../Menu/menuSlice";

function SearchProduct() {
  const dispatch = useDispatch();
  const handleMenu = (key, _url) => {
    const url = {
      _url: _url,
      key: key,
    };
    const action = setUrl(url);
    dispatch(action);
  };
  return (
    <div className="search-product">
      <input
        placeholder="Search a product"
        onChange={(value) => handleMenu("search", "&q=" + value.target.value)}
      />
      <button>
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default SearchProduct;
