import React from 'react';

function SearchProduct(props) {
const {handleMenu}=props;
  return (
    <div className="search-product">
      <input placeholder="Search a product" onChange={(value)=>handleMenu("search","&q="+value.target.value)}/>
      <button >
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default SearchProduct;
