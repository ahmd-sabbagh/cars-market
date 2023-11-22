import React from "react";
import { trans } from "../../../Components/Navbar/Navbar";

function SiteOptions() {
  return (
    <div className="SiteOptions py-5">
      <div className="container">
        <p className="text-center fs-32-700 title-color">
          {trans("home.site_option.one")}
        </p>
        <p className="text-center fs-32-700 title-color">{trans("home.site_option.two")}</p>
      </div>
    </div>
  );
}

export default SiteOptions;
