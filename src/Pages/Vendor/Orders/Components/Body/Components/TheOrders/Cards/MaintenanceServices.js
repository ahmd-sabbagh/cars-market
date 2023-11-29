import React, { useState } from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import EmptyPopup from "../../../../../../../../Components/EmptyPopup/EmptyPopup";
import Header from "../../Header/Header";
import { IoClose } from "react-icons/io5";
import InputOrderSent from "../../InputOrderSent/InputOrderSent";
import { useRecoilState } from "recoil";
import { WindowChangeView } from "../../../GlopalStateRecoil/AllData";
import { changeUserId } from "../../../../../../../../Components/Messages/GlopalStateRecoil/AllData";
import moment from "moment";
import "moment/locale/ar";
function MaintenanceServices({ data }) {
  // Type Window
  const [window, setWindow] = useRecoilState(WindowChangeView);
  // Type Window
  // Change User Chat
  const [userChat, setUserChat] = useRecoilState(changeUserId);
  // Change User Chat
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");
  const priceData = {
    placeHolder: trans("vendor.orders.price_place"),
    state: price,
    setState: setPrice,
  };
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
      {/* <RunOutOfAttempts /> */}
      {/* <DoneSendOffer /> */}
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
          <div className="MaintenanceServices-details-cont mt-4">
            <p>{data?.details?.note}</p>
            <form className="d-flex align-items-center mt-3">
              <InputOrderSent {...priceData} />
              <button type="submit">{trans("rating_vendor.send")}</button>
            </form>
          </div>
        </EmptyPopup>
      )}

      <div
        className="MaintenanceServicesCard py-3 pointer px-3 px-md-4"
        onClick={() => {
          // setOpen(true);
          setUserChat(data.id);
          setWindow("myOffers");
        }}
      >
        <div className="d-flex justify-content-between">
          <h3 className="fs-20-400">
            {data.details.electrical
              ? trans("order_workshop.electrical")
              : data.details.mechanical
              ? trans("order_workshop.mechanical")
              : trans("order_workshop.plumber")}
          </h3>
          <p className="fs-16-400">{timeago}</p>
        </div>
        <p className="mt-2">
          {`${
            data?.details?.note?.length > 100
              ? `${data.details.note.substring(0, 100)}...`
              : data.details.note
          }`}
        </p>
      </div>
    </>
  );
}

export default MaintenanceServices;
