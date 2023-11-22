import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="Card full-height">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="text">
        <h4 className="fs-24-700 text-center">{title}</h4>
        <p className="fs-16-400 text-center">{description}</p>
      </div>
    </div>
  );
}

export default Card;
