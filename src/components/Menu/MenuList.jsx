import React from "react";
import MenuListItem from "./MenuListItem";
//import PropTypes from "prop-types";

function MenuList(props) {
  const { menu, handleMenuListItem } = props;
  const menuList = [];
  const [title, type] = [Object.keys(menu), Object.values(menu)];
  for (let i = 0; i < title.length; i++) {
    menuList.push(
      <MenuListItem
        title={title[i]}
        type={type[i]}
        handleMenuListItem={handleMenuListItem}
        key={i}
      />
    );
  }
  return (
    <div>
      
      {menuList}
    </div>
  );
}

// MenuList.propTypes = {
//   menu: PropTypes.array,
// };
// MenuList.defaultProps = {
//   menu: [],
// };
export default MenuList;