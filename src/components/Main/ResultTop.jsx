import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../Menu/menuSlice";

function ResultTop() {
  const dispatch = useDispatch();

  const handleSort = (value) => {
    const url = {
      _url: value,
      key: "sort",
    };
    const action = setUrl(url);
    dispatch(action);
  };

  return (
    <div className="result-top">
      <select
        name="sort"
        id="sort"
        onChange={(value) => handleSort(value.target.value)}
      >
        <option value="">Featured</option>
        <option value="asc">Price asc.</option>
        <option value="desc">Price desc.</option>
      </select>
    </div>
  );
}

export default ResultTop;
