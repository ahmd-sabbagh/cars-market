import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as Location } from "../Assets/location-marker.svg";
import { ReactComponent as Phone } from "../Assets/phone.svg";

function Details({ disc }) {
  return (
    <div className="Details mt-5">
      <h4 className="fs-20-600">{trans("service_provider.details")}</h4>
      <p
        className="mt-3 text-color fs-16-400 px-1"
        dangerouslySetInnerHTML={{
          __html: disc?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
        }}
      ></p>
      <div className="info mt-32">
        {/* Location */}
        <div className="locaion d-flex align-items-center gap-3">
          <span>
            <Location />
          </span>
          <div className="d-flex align-items-center gap-1">
            <span className="fs-16-400">{trans("service_provider.location")}</span>
            <span className="fs-14-400">{"0152 2154 211"}</span>
          </div>
        </div>
        {/* Phone */}
        <div className="Phone d-flex align-items-center gap-3 mt-2">
          <span>
            <Phone />
          </span>
          <div className="d-flex align-items-center gap-1">
            <span className="fs-16-400">{trans("service_provider.phone_num")}</span>
            <span className="fs-14-400">{"0152 2154 211"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
