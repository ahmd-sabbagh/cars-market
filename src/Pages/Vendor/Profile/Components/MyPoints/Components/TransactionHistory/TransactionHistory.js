import React from "react";
import "./TransactionHistory.css";
import moment from "moment";
import "moment/locale/ar";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import { ReactComponent as GreenArrow } from "../../Assets/arrowgreen.svg";
import { ReactComponent as RedArrow } from "../../Assets/arrowred.svg";
function TransactionHistory({ in_out, date, title, points }) {
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(date).locale("ar").format("h:mm a - Do MMM");
  } else {
    timeago = moment(date).locale("en").format("h:mm a - Do MMM");
  }
  // Moment format("h:mm a")
  return (
    <div className="TransactionHistory d-flex justify-content-between gap-3">
      {/* Text */}
      <div className="text d-flex align-items-center gap-2">
        <div className="icon flex-c">
          {in_out === "in" ? <GreenArrow /> : <RedArrow />}
        </div>
        <div className="title">
          <div className=" fs-16-500">{trans(`points.${title}`)}</div>
          <div className=" fs-12-400 text-color mt-1">{timeago}</div>
        </div>
      </div>
      {/* count points */}
      <div className="count-points d-flex gap-2 align-items-center fit-height">
        <div className="icon flex-c">
          <Star />
        </div>
        <div className="fs-14-400 flex-c">{`${points} ${trans(
          "vendor.my_points.point"
        )}`}</div>
      </div>
    </div>
  );
}

export default TransactionHistory;
