import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = props => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <a href="#" className="legend" onClick={() => setOpen(!open)}>
        Legend
      </a>
      <div className="menu-item">{open && props.children}</div>
    </div>
  );
};

export default Dropdown;
