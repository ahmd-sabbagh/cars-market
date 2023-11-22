import React from "react";
import "./Title.css";
import moment from "moment";
import "moment/locale/ar";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as User } from "./Assets/user.svg";
import { ReactComponent as Location } from "./Assets/location-marker.svg";
function Title({ Data }) {
  // Time
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(Data?.created_at).locale("ar").fromNow();
  } else {
    timeago = moment(Data?.created_at).fromNow();
  }
  // Time
  return (
    <div className="Title d-flex flex-column gap-3">
      <h3 className="fs-32-600">{Data?.title}</h3>
      <div className="time d-flex align-items-center gap-1">
        <span>{timeago}</span>
        ,,
        <span>{`${trans("ads_details.ads_num")} : ${Data?.ads_num}`}</span>
      </div>
      <div className="owner d-flex align-items-center gap-5">
        <div className="d-flex align-items-center gap-1">
          <span className="flex-c">
            <User />
          </span>
          <span>{Data?.owner.name}</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <span className="flex-c">
            <Location />
          </span>
          <span>{Data?.city.label}</span>
        </div>
      </div>
    </div>
  );
}

export default Title;
