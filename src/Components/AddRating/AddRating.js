import React from "react";
import "./AddRating.css";
import { useState } from "react";
import { ReactComponent as Star } from "./star.svg";

function AddRating() {
  const [rateCount, setRateCount] = useState();
  const five = [1, 2, 3, 4, 5];
  return (
    <div
      className={`AddRating d-flex gap-2 flex-row-reverse justify-content-center `}
    >
      {five.map((item, idx) => (
        <div
          className={`RatingViewStar flex-c pointer ${
            idx + 1 <= rateCount && "yellow-svg"
          }`}
          key={idx}
          onClick={() => {
            setRateCount(item);
          }}
        >
          <Star />
        </div>
      ))}
    </div>
  );
}

export default AddRating;
