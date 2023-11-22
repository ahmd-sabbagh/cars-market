import React from "react";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import moment from "moment";
import "moment/locale/ar";

function Nav({ time, servesType, status, isEndTime }) { 
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(time).locale("ar").fromNow();
  } else {
    timeago = moment(time).locale("en").fromNow();
  }
  // Moment
  return (
    <div className="Nav d-flex align-items-start align-items-md-center justify-content-between p-3 p-md-4 border-bottom">
      <div className="d-flex align-items-start flex-column flex-md-row align-items-md-center  gap-2 gap-md-4">
        <div className="order-type">
          <span className="text-color">{trans("my_order.type_order")}</span>
          <span>
            {servesType === "spare_parts"
              ? trans("my_order.spare")
              : servesType === "flatness"
              ? trans("my_order.sotha")
              : trans("my_order.workshop")}
          </span>
        </div>
        <div className="date-order">
          <span className="text-color">{trans("my_order.date_order")}</span>
          <span>{timeago}</span>
        </div>
      </div>
      <div
        className={`status ${
          status === "pending"
            ? isEndTime
              ? "yellow"
              : "pink"
            : status === "processing"
            ? "blue"
            : status === "finished"
            ? "green"
            : "red"
        } flex-c`}
      >
        {status === "pending"
          ? isEndTime
            ? trans("my_order.stoped")
            : trans("my_order.pending")
          : status === "processing"
          ? trans("my_order.progress")
          : status === "finished"
          ? trans("my_order.finished")
          : trans("my_order.order_cancel")}
      </div>
    </div>
  );
}

export default Nav;
