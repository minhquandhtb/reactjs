import "./scss/styles.scss";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Menu from "./components/Menu/index";
import React, { useState } from "react";

var titleType = "",
  rating = "",
  sort = "",
  search = "",
  brand = "";
function App() {
  const [url, setUrl] = useState("http://localhost:4000/products?");
  const handleMenu = (key, _url) => {
    if (key === "title" || key === "type") {
      titleType = _url;
    } else if (key === "rating") {
      rating = _url;
    } else if (key === "sort") {
      if (_url === "") {
        sort = "";
      } else {
        sort = "&_sort=price&_order=" + _url;
      }
    } else if (key === "clear") {
      titleType = "";
      rating = "";
      sort = "";
      brand="";
    } else if (key === "search") {
      search = _url;
    } else if (key === "brand") {
      brand = _url;
    }

    setUrl(
      "http://localhost:4000/products?" + titleType + rating + sort + search + brand
    );
    
  };
  console.log(url);
  return (
    <div className="App">
      <Header handleMenu={handleMenu} />
      <Menu url={url} handleMenu={handleMenu} />
      <Main url={url} handleMenu={handleMenu} />
    </div>
  );
}

export default App;
