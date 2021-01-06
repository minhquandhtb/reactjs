import React from "react";
import PropTypes from "prop-types";

function MenuListItem(props) {
  const { title, type, handleMenu } = props;
  const listType = [];
  for (let i = 0; i < type.length; i++) {
    listType.push(
      <li onClick={() => handleMenu("&type=" + type[i])} key={i}>
        {type[i]}
      </li>
    );
  }
  return (
    <div>
      <h5 onClick={() => handleMenu("&title=" + title)}>{title}</h5>
      <ul>{listType}</ul>
    </div>
  );
}

MenuListItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.array,
};
export default MenuListItem;
