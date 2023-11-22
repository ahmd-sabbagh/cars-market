import Lottie from "lottie-react";
import React from "react";
import loader from "./Assets/f0JWsjdFt2.json";

function NothingLottie({ width, height }) {
  return (
    <div
      className="Loader overflow-hidden mx-auto flex-c"
      style={{ width: width, height: height}}
    >
      <Lottie animationData={loader} loop={true} />
    </div>
  );
}

export default NothingLottie;
