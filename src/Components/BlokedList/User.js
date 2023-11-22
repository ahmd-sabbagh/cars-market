import React from "react";
import { trans } from "../Navbar/Navbar";
import moment from "moment";
import "moment/locale/ar";

function User({ image, name, date }) {
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(date).locale("ar").fromNow();
  } else {
    timeago = moment(date).locale("en").fromNow();
  }
  // Moment
  return (
    <div className="User d-flex justify-content-between bg-white box-sh r-05 p-2 p-md-3">
      <div className="info d-flex gap-3">
        <div
          className="image bg-image overflow-hidden "
          style={{
            backgroundImage: `url(${image})`,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
          }}
        ></div>
        <div className="text">
          <h3 className="fs-16-500">{name}</h3>
          <span className="fs-14-400 text-color mt-1">{timeago}</span>
        </div>
      </div>
      <button className="btn-blue fit-height">
        {trans("blocked_list.button")}
      </button>
    </div>
  );
}

export default User;
