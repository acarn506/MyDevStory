import React from "react";
import "./Item.css";

const Item = props => {
  return (
    <div className="itemContainer">
      <h4>{props.language}</h4>
    </div>
  );
};

export default Item;
