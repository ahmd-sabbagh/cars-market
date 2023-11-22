import React, { useState } from "react";
import "./AdsEdit.css";
import { trans } from "../../Components/Navbar/Navbar";
import UploadImage from "./Components/UploadImage/UploadImage";
import Deatails from "./Components/Deatails/Deatails";

function AdsEdit() {
  const [image, setImage] = useState();
  return (
    <div className="AdsEdit py-5">
      <div className="container">
        <div className="title fit-content mx-auto">
          <h3 className="fs-32-700 text-center">
            {trans("edit_ads_car.title")}
          </h3>
          <p
            className="fs-16-400 text-color text-center mt-2"
            style={{ maxWidth: "369px" }}
          >
            {trans("edit_ads_car.disc")}
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-9">
            <UploadImage image1={image} setImage1={setImage} />
            <Deatails imageMain={image} setImageMain={setImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdsEdit;
