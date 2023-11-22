import React, { useState } from "react";
import RouteNav from "../AdsDetails/Components/RoteNav/RouteNav";
import { trans } from "../../Components/Navbar/Navbar";
import UploadImage from "./Components/UploadImage/UploadImage";
import Deatails from "./Components/Deatails/Deatails";

function AddAdsCar() {
  // Route Nav
  const routeNav = {
    oneText: trans("add_ads_car.route_nav.harag"),
    oneTo: "/cars-market",
    two: trans("add_ads_car.route_nav.add_ad"),
  };
  // Route Nav
  const [image, setImage] = useState();
  return (
    <div className="AddAdsCar py-5">
      <div className="container">
          <RouteNav {...routeNav} />
          <h3 className="fs-32-700 mt-4">{trans("add_ads_car.title")}</h3>
          <p
            className="fs-16-400 text-color mt-2 mb-5"
            style={{ maxWidth: "369px" }}
          >
            {trans("add_ads_car.disc")}
          </p>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-10">
            <UploadImage image1={image} setImage1={setImage} />
            <Deatails imageMain={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdsCar;
