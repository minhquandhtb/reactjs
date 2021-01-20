import React from "react";

function RefineByBrand(props) {
  const { brand, handleMenu } = props;
  const listBrand = [];
  
  for (const iterator of brand) {
    listBrand.push(
      <div
        onClick={() => {
          if (document.getElementById(iterator).checked === false) {
            handleMenu("brand","");
          } else {
            handleMenu("brand", `&brand=${iterator}`);
          }
        }}
        key={iterator}
      >
        <input type="checkbox" id={iterator} name={iterator} value={iterator} />
        <label htmlFor={iterator}>{iterator}</label>
      </div>
    );
  }
  return (
    <div>
      <h5>Brands</h5>
      <form>{listBrand}</form>
    </div>
  );
}

export default RefineByBrand;
