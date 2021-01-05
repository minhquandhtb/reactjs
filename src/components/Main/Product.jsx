import React from "react";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <div className="product">
      <div className="product__img flex-">
        <img src={product.image} alt="" />
      </div>
      <div className="product__desc">
        <div className="product__name">{product.name}</div>
        <div className="product__type">{product.type}</div>
        <div className="product__price">{product.price}</div>
        <div>
          <Rating rating={product.ratings} />
        </div>
      </div>
    </div>
  );
}

export default Product;
