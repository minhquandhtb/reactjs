import React from "react";
import MenuListItem from "./MenuListItem";
//import PropTypes from "prop-types";

function MenuList(props) {
  const { menu } = props;
  const menuList = [];
  const [title, type] = [Object.keys(menu), Object.values(menu)];
  for (let i = 0; i < title.length; i++) {
    menuList.push(<MenuListItem title={title[i]} type={type[i]} key={i} />);
  }
  return <div>{menuList}</div>;
}
export default MenuList;
