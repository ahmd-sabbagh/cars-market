import React, { useState } from "react";
import { trans } from "../../../../../../Components/Navbar/Navbar";

function Card({ title, desc, price, text, type, state, setState }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    
    // setState("")
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    // setState(type)
  };

  return (
    <div
      className={`Card r-07 border pointer box-sh ${
        isHover ? "hover" : type === state ? "active" : null
      }`}
      onClick={() => {
        setState(type);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Head */}
      <h3 className="fs-20-600 p-3 p-md-4 ">{title}</h3>
      {/* Descriptions */}
      <div className="desc border-top border-bottom p-3 p-md-4 ">
        <p className="fs-14-400">{desc}</p>
      </div>
      {/* Bottom */}
      <div className="bootom p-3 p-md-4 d-flex flex-column gap-1">
        <p className="fs-20-400">{trans("subscription.price")}</p>
        <p className="fs-32-700">{price}</p>
        <p className="fs-16-400">{text}</p>
      </div>
    </div>
  );
}

export default Card;
