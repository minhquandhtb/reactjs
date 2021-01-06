import "./scss/styles.scss";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Menu from "./components/Menu/index";
import React,{ useState } from "react";

function App() {
  const [url,setUrl]=useState("http://localhost:4000/products?");
  
  const handleMenuListItem=(_url)=>{
    setUrl('http://localhost:4000/products?'+_url);
  }
  return (
    <div className="App">
      <Header />
      <Main url={url}/>
      <Menu handleMenuListItem={handleMenuListItem}/>
    </div>
  );
}

export default App;