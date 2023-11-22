import React from "react";
import { ReactComponent as Location } from "../Assets/location-marker.svg";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";

function Details() {
  return (
    <div className="Details mt-4">
      <div className="d-flex gap-3 ">
        <div className="icons py-4 d-flex gap-1 flex-column align-items-center justify-content-between">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="icon">
            <Location />
          </div>
        </div>
        <div className="location d-flex flex-column justify-content-between">
          {/* Current */}
          <div className="current p-3 r-07 border d-flex flex-column gap-2">
            <span>{trans("flanties.current")}</span>
            <span>{"الرياض,المنطقة الجنوبية ش عائشة بنت ابي  بكر ..."}</span>
          </div>
          {/* Interface */}
          <div className="interface current p-3 r-07 border d-flex flex-column gap-2">
            <span>{trans("flanties.interface")}</span>
            <span>{"الرياض,المنطقة الجنوبية ش عائشة بنت ابي  بكر ..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
