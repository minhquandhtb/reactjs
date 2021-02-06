import "./scss/styles.scss";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Menu from "./components/Menu/index";
import React from "react";
import { useSelector } from "react-redux";

var titleType = "",
  rating = "",
  sort = "",
  search = "",
  price = "",
  brand = "";
function App() {
  const _url = useSelector((state) => state.urlChange.stateMainSlice._url);
  const key = useSelector((state) => state.urlChange.stateMainSlice.key);

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
    price = "";
    brand = "";
  } else if (key === "search") {
    search = _url;
  } else if (key === "brand") {
    brand = _url;
  } else if (key === "price") {
    price = _url;
  }
  let url =
    "http://localhost:4000/products?" +
    titleType +
    rating +
    sort +
    search +
    brand +
    price;
  console.log(url);

  return (
    <div className="App">
      <Header />
      <Menu url={url} />
      <Main url={url} />
    </div>
  );
}

export default App;
