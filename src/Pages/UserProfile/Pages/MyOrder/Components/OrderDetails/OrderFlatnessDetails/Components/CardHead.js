import React from "react";
import "./CardHead.css";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import moment from "moment";
import "moment/locale/ar";

function CardHead({ date, status, isEndTime }) {
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(date).locale("ar").fromNow();
  } else {
    timeago = moment(date).locale("en").fromNow();
  }
  // Moment
  return (
    <div className="CardHead border r-07 p-3 p-md-4 mt-32 d-flex justify-content-between">
      <div className="text d-flex flex-column gap-2">
        <div className="date d-flex align-items-center gap-1">
          <span className="text-color">
            {trans("order_details.date_order")}
          </span>
          <span>{timeago}</span>
        </div>
        <div className="type d-flex align-items-center gap-1">
          <span className="text-color">{trans("my_order.type_order")}</span>
          <span>{trans("car_holder.title")}</span>
        </div>
      </div>
      <div
        className={`status  ${
          status === "pending" ? (isEndTime ? "yellow" : "pink") : "blue"
        } flex-c`}
      >
        {status === "pending"
          ? isEndTime
            ? trans("my_order.stoped")
            : trans("my_order.pending")
          : trans("my_order.progress")}
      </div>
    </div>
  );
}

export default CardHead;
