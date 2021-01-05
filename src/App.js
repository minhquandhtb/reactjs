import "./scss/styles.scss";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Menu from "./components/Menu/index";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Menu />
    </div>
  );
}

export default App;
