import Lottie from "lottie-react";
import Anmi from "./Assets/block.json";

function NotUserAnmi({ width, height }) {
  return (
    <div
      className="NotUserAnmi mx-auto flex-c flex-column"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={Anmi} loop={true} />
      <h3 className="mb-5 fs-24-700">{"لا يوجد لديك محظورين"}</h3>
    </div>
  );
}

export default NotUserAnmi;
