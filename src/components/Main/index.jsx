import React, { useEffect, useState } from "react";
import ProductWrapper from "./ProductWrapper";
import Pagination from "./Pagination";

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch("http://localhost:4000/products?&ratings=4")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    setCurrentProduct(
      products.slice(0 + 8 * (currentPage - 1), 0 + 8 * (currentPage - 1) + 8)
    );
  }, [currentPage, products]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-wrapper">
        <div className="result-top"></div>
        <ProductWrapper products={currentProduct} />
        <Pagination
          productsCount={products.length}
          handlePaginate={handlePaginate}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Main;
