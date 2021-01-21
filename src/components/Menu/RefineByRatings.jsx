import React from "react";
import PropTypes from "prop-types";
import Rating from "../Main/Rating";
import { useDispatch } from "react-redux";
import { setUrl } from "../../actions/url";
function RefineByRatings() {
  const listRating = [];
  const dispatch = useDispatch();
  const handleMenu = (key, _url) => {
    const url = {
      _url: _url,
      key: key,
    };
    const action = setUrl(url);
    dispatch(action);
  };
  for (let i = 0; i < 5; i++) {
    listRating.push(
      <li onClick={() => handleMenu("rating", "&ratings=" + (i + 1))} key={i}>
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
