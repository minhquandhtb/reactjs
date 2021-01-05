import React from "react";

function Rating(props) {
  const { rating } = props;
  const status = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
        status.push(<i className="fa fa-star" key={index}></i>)
      
    } else {
        status.push(<i className="fa fa-star-o" key={index}></i>)
    }
  }

  return (
    <div className="rating">
      {status}
    </div>
  );
}

export default Rating;
