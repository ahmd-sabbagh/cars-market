import Lottie from "lottie-react";
import React from "react";
import loader from "./Assets/LoaderDots.json";

function LoaderButton({ width, height }) {
  return (
    <div
      className="Loader overflow-hidden mx-auto flex-c"
      style={{ width: width, height: height, transform: "scale(2)" }}
    >
      <Lottie animationData={loader} loop={true} />
    </div>
  );
}

export default LoaderButton;
