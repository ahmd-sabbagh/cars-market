import React from "react";
import "./Header.css";

function Header({ title, desc }) {
  return (
    <div className="HeaderProfileVendor">
      <h3 className=" fs-24-600">{title}</h3>
      <p className=" fs-16-500 text-color mt-1">{desc}</p>
    </div>
  );
}

export default Header;
