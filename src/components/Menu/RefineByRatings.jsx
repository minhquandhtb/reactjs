import React from "react";
import PropTypes from "prop-types";
import Rating from "../Main/Rating";
function RefineByRatings(props) {
  const { handleMenu } = props;
  const listRating = [];

  for (let i = 0; i < 5; i++) {
    listRating.push(
      <li onClick={() => handleMenu("&ratings=" +(i+1))} key={i}>
        <Rating rating={i + 1} />
      </li>
    );
  }

  return (
    <div>
      <h5>Ratings</h5>
      <ul>{listRating}</ul>
    </div>
  );
}

RefineByRatings.propTypes = {
  handleMenu: PropTypes.func,
};
RefineByRatings.defaultProps = {
  handleMenu: null,
};
export default RefineByRatings;
