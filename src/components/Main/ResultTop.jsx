import React from "react";

function ResultTop(props) {
  const { handleMenu } = props;
  return (
    <div className="result-top">
      <select
        name="sort"
        id="sort"
        onChange={(value) => handleMenu("sort", value.target.value)}
      >
        <option value="">Featured</option>
        <option value="asc">Price asc.</option>
        <option value="desc">Price desc.</option>
      </select>
    </div>
  );
}

export default ResultTop;
