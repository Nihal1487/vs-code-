import React from "react";
import Card from "./Card";
import "./App.css";
import Sdata from "./Sdata";
import Navbar from "./Navbar";
import Mdata from "./Mdata";
function App() {
  return (
    <>
      <Navbar />
      <h3 className="header">Free Movies and series</h3>
      {Mdata.map((val) => {
        return <Card imgsrc={val.imgsrc} stitle={val.stitle} link={val.link} />;
      })}
      {Sdata.map((val) => {
        return <Card imgsrc={val.imgsrc} stitle={val.stitle} link={val.link} />;
      })}
    </>
  );
}

export default App;
