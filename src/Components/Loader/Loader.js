import Lottie from "lottie-react";
import React from "react";
import loader from "./Assets/W856NSMUR4.json";

function Loader({ width }) {
  return (
    <div className="Loader mx-auto flex-c" style={{ width: width }}>
      <Lottie animationData={loader} loop={true} />
    </div>
  );
}

export default Loader;
