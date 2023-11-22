import React from "react";
import "./PointCard.css";

function PointCard({ icon, text, text2 }) {
  return (
    <div className="PointCard p-3 d-flex flex-column gap-3 align-items-center flex-grow-1 r-10">
      <div className="icon flex-c">{icon}</div>
      <div className="text d-flex flex-column align-items-center gap-1">
        <span>{text}</span>
        <span>{text2}</span>
      </div>
    </div>
  );
}

export default PointCard;
