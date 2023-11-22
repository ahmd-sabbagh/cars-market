import React from "react";
import "./TransactionHistory.css";
import moment from "moment";
import "moment/locale/ar";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
function TransactionHistory({ icon, title, date, count }) {
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(date).locale("ar").fromNow();
  } else {
    timeago = moment(date).locale("en").fromNow();
  }
  // Moment
  return (
    <div className="TransactionHistory d-flex justify-content-between gap-3">
      {/* Text */}
      <div className="text d-flex gap-2">
        <div className="icon">{icon}</div>
        <div className="title">
          <div className=" fs-16-500">{title}</div>
          <div className=" fs-12-400 text-color mt-1">{timeago}</div>
        </div>
      </div>
      {/* count points */}
      <div className="count-points d-flex gap-2 align-items-center fit-height">
        <div className="icon">
          <Star />
        </div>
        <div className=" fs-14-400">{`${count} ${trans(
          "vendor.my_points.point"
        )}`}</div>
      </div>
    </div>
  );
}

export default TransactionHistory;
