import React, { useEffect, useState } from "react";
import ProductWrapper from "./ProductWrapper";
import Pagination from "./Pagination";
import ResultTop from "./ResultTop";

function Main(props) {
  const {url}=props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch(url)
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
  }, [url]);
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
        <ResultTop/>
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
