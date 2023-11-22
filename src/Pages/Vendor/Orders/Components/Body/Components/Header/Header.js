import React from "react";
import "./Header.css"

function Header({ title, desc }) {
  return (
    <div className="HeaderDetailsOrder">
      <h3 >{title}</h3>
      <p className=" fs-14-400 mt-3">{desc}</p>
    </div>
  );
}

export default Header;
