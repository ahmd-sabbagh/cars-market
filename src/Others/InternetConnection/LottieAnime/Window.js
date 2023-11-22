import React from "react";
import Lottie from "lottie-react";
import Connection from "../Assets/InternetConnection.json";

function Window() {
  return (
    <div className="Window-Anime flex-c" style={{ height: "100vh" }}>
      <div>
        <Lottie animationData={Connection} loop={true} />
      </div>
    </div>
  );
}

export default Window;
