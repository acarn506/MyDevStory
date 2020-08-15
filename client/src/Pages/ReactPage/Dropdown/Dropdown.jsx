import React, { useState } from "react";
import "./Dropdown.css";
import ItemList from "../ItemList/ItemList";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const DropdownItem = props => {
    return (
      <div className="dropContainer">
        <h4 className="title">{props.title}</h4>
        <span className="text">{props.text}</span>
      </div>
    );
  };
  return (
    <div className="dropdown">
      <button className="legend" onClick={() => setOpen(!open)}>
        Legend
        <div className="menu-item">
          {open && (
            <React.Fragment>
              <DropdownItem
                title={"familiar"}
                text={
                  "Can make things work by collaging code snippets together"
                }
              />
              <DropdownItem
                title={"Proficient"}
                text={
                  "Occasional reference to Stack Overflow and external references"
                }
              />
              <DropdownItem
                title={"Excellent"}
                text={
                  "Can code without Stack Overflow and minimal references to documentation"
                }
              />
              <DropdownItem
                title={"Expert"}
                text={"Understands internals of the language"}
              />
            </React.Fragment>
          )}
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
