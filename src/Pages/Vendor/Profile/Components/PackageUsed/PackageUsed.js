import React from "react";
import { trans } from "../../../../../Components/Navbar/Navbar";
import "./PackageUsed.css";
import { ReactComponent as Icon } from "./svgexport-17 1.svg";
import { Link } from "react-router-dom";

function PackageUsed() {
  return (
    <div className="PackageUsed flex-c full-height">
      <div className="Card bg-white r-10 box-sh p-3">
        <h3 className="fs-20-600">{trans("package_used.title")}</h3>
        {/* Icon */}
        <div className="mt-5 d-flex flex-column gap-4">
          <div className="used d-flex justify-content-center gap-3 align-items-center">
            <div className="icon flex-c">
              <Icon />
            </div>
            <div className="text d-flex flex-column gap-1">
              <span className="fs-12-400 text-color">
                {trans("package_used.package")}
              </span>
              <span className="fs-16-700">{"الباقة الفضية"}</span>
            </div>
          </div>
          {/* Count */}
          <div className="d-flex justify-content-center gap-4 p-3 Count r-05">
            <div className="dialy d-flex flex-column gap-2">
              <span className="fs-14-400 text-color">
                {trans("package_used.daily")}
              </span>
              <span className="fs-20-600">{`${20} ${trans(
                "package_used.count"
              )}`}</span>
            </div>
            <div className="stay d-flex flex-column gap-2">
              <span className="fs-14-400 text-color">
                {trans("package_used.stay")}
              </span>
              <span className="fs-20-600">{`${20} ${trans(
                "package_used.count"
              )}`}</span>
            </div>
          </div>
          {/* Link */}
          <Link to={"/vendor/profile/subscriptions"} className="btn-blue mx-auto">
            {trans("package_used.packages")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PackageUsed;
