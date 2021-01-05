import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  productsCount: PropTypes.number.isRequired,
  handlePaginate: PropTypes.func,
};

Pagination.defaultProps = {
  handlePaginate: null,
};
function Pagination(props) {
  const { currentPage, productsCount, handlePaginate } = props;
  const pageNumber = [];
  for (let index = 0; index < productsCount / 8; index++) {
    pageNumber.push(
      <li key={index} onClick={() => handlePaginate(index + 1)}>
        <span>{index + 1}</span>
      </li>
    );
  }

  const previous = (
    <li>
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePaginate(currentPage - 1)}
      >
        <i className="fa fa-angle-left"></i> Previous
      </button>
    </li>
  );

  const next = (
    <li>
      <button
        disabled={currentPage >= productsCount / 8}
        onClick={() => handlePaginate(currentPage + 1)}
      >
        Next <i className="fa fa-angle-right"></i>
      </button>
    </li>
  );
  return (
    <div className="pagination">
      <ul className="flex-row-x-center-between">
        {previous}
        {pageNumber}
        {next}
      </ul>
    </div>
  );
}

export default Pagination;
