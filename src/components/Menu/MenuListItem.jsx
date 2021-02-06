import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setUrl } from "./menuSlice";

function MenuListItem(props) {
  const { title, type } = props;
  const listType = [];
  const dispatch = useDispatch();

  const handleMenu = (key, _url) => {
    const url = {
      _url: _url,
      key: key,
    };
    const action = setUrl(url);
    dispatch(action);
  };
  for (let i = 0; i < type.length; i++) {
    listType.push(
      <li onClick={() => handleMenu("type", `&type=${type[i]}`)} key={i}>
        {type[i]}
      </li>
    );
  }
  return (
    <div>
      <h5 onClick={() => handleMenu("title", `&title=${title}`)}>{title}</h5>
      <ul>{listType}</ul>
    </div>
  );
}

MenuListItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.array,
};
export default MenuListItem;
