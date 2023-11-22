import React from "react";
import { ReactComponent as Star } from "./star.svg";
import "./RatingView.css";

function RatingView({ rateCount = 2, mt = "mt-3" }) {
  const five = [1, 2, 3, 4, 5];
  return (
    <div
      className={`RatingView d-flex gap-2 flex-row-reverse justify-content-end ${mt}`}
    >
      {five.map((item, idx) => (
        <div
          className={`RatingViewStar flex-c ${
            idx + 1 <= rateCount && "yellow-svg"
          }`}
          key={idx}
        >
          <Star />
        </div>
      ))}
    </div>
  );
}

export default RatingView;
