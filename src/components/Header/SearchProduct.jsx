import React from 'react';

function SearchProduct() {
  return (
    <div className="search-product">
      <input placeholder="Search a product" />
      <button>
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default SearchProduct;
