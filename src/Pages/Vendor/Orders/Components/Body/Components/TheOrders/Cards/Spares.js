import React from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import moment from "moment";
import "moment/locale/ar";
import EmptyPopup from "../../../../../../../../Components/EmptyPopup/EmptyPopup";
import { IoClose } from "react-icons/io5";
import Header from "../../Header/Header";
import SpareCard from "./SpareCard";
import { useState } from "react";
function Spares({ data }) {
  const [open, setOpen] = useState(false);
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(data.created_at).locale("ar").format("h:mm a");
  } else {
    timeago = moment(data.created_at).locale("en").format("h:mm a");
  }
  // Moment
  return (
    <>
      {open && (
        <EmptyPopup flex="583px">
          {/* Header */}
          <div className="d-flex justify-content-between">
            <Header
              title={trans("vendor.orders.order_details")}
              desc={trans("vendor.orders.spare_desc")}
            />
            <span
              className="flex-c fit-height fs-24-600 pointer icon-close"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoClose />
            </span>
          </div>
          {/* Body */}
          <div className="SpareCard-container d-flex flex-column gap-3 mt-3 mt-md-4">
            {data.details.map((item) => (
              <SpareCard {...item} key={item.id} />
            ))}
          </div>
        </EmptyPopup>
      )}

      <div
        className="SparesCard d-flex justify-content-between py-3 pointer px-3 px-md-4"
        onClick={() => {
          setOpen(true);
        }}
      >
        {/* Right */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="logo bg-image"
            style={{ backgroundImage: `url(${data.brand_car.logo})` }}
          ></div>
          <div className="text d-flex flex-column gap-1">
            <h3 className="fs-20-600">{data.brand_car.label}</h3>
            <p className="fs-14-400 text-color">{data.details[0].name}</p>
            {data.details?.length > 1 && (
              <div className="d-flex align-items-center gap-1">
                <span className="fs-12-400 text-color">
                  {trans("order_spare.num_spare")}
                </span>
                <span>
                  +{data.details?.length > 1 && data.details?.length - 1}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Time */}
        <div>{timeago}</div>
      </div>
    </>
  );
}

export default Spares;
