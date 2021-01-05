import React from 'react'
import Product from "./Product";

function ProductWrapper(props) {
    const {products}=props;
    const productArray=[];
    for (let i = 0; i < products.length; i++) {
        productArray.push(<Product product={products[i]} key={i}/>)  
    }
    return (
        <div className="product-wrapper">
            {productArray}
        </div>
    );
}

export default ProductWrapper
