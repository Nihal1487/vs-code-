import React from "react";

function Card(props) {
  return (
    <>
    <div className="main">
      <div className="card">
        <img
          src={props.imgsrc}
          alt="CardImage"
        />
        <h3>{props.stitle}</h3>
       <a href={props.link} target="_blank"> <button>Download</button></a>
      </div>
      </div>
    </>
  );
}

export default Card;
