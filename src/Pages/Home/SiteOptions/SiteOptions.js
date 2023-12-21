import React from "react";
import { trans } from "../../../Components/Navbar/Navbar";

function SiteOptions() {
  return (
    <div className="SiteOptions py-5">
      <div className="container">
        <p
          className="text-center fs-32-700 title-color"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {trans("home.site_option.one")}
        </p>
        <p
          className="text-center fs-32-700 title-color"
          data-aos="fade-up"
          data-aos-duration="1700"
        >
          {trans("home.site_option.two")}
        </p>
      </div>
    </div>
  );
}

export default SiteOptions;
