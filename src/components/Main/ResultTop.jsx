import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../../actions/url";

function ResultTop() {
  
  const dispatch = useDispatch();

  const handleSort = (value) => {
    const _url= `&_sort=price&_order=${value}`;
    const action=setUrl(_url);
    dispatch(action);
  }
  
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
