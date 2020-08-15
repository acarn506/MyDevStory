import React from "react";
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = props => {
  /*  Map Option
  let languages = props.skills.map(item => {
    return item.language;
  }); */

  let languages = props.skills
    .reduce((acc, cur) => {
      return acc.concat(cur.language);
    }, [])
    .map((item, i) => {
      return <Item key={item + i} language={item} />;
    });

  return <div className="listContainer">{languages}</div>;
};

export default ItemList;
