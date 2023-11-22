import React, { useState } from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import EmptyPopup from "../../../../../../../../Components/EmptyPopup/EmptyPopup";
import Header from "../../Header/Header";
import { IoClose } from "react-icons/io5";
import InputOrderSent from "../../InputOrderSent/InputOrderSent";
import { useRecoilState } from "recoil";
import { WindowChangeView } from "../../../GlopalStateRecoil/AllData";
import { changeUserId } from "../../../../../../../../Components/Messages/GlopalStateRecoil/AllData";

function FlatniessCard({ data }) {
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
  return (
    <>
      {open && (
        <EmptyPopup flex="583px">
          {/* Header */}
          <div className="d-flex justify-content-between">
            <Header
              title={trans("vendor.orders.order_details")}
              desc={trans("vendor.orders.flatnies")}
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
          <div className="FlatniessCard-details p-3 border r-07 mt-4">
            <div className="location d-flex">
              <span>{trans("vendor.orders.car_location")}</span>
              <span>{"المنصورة, المطافى , شارع سامية الجمل"}</span>
            </div>
            <div className="interface mt-1 d-flex">
              <span>{trans("vendor.orders.car_interface")}</span>
              <span>
                {"المنصورة, المطافى , شارع سامية الجمل اعلى العمريطي للزيوت"}
              </span>
            </div>
            <p className=" fs-12-400 text-color mt-3">{data.details.note}</p>
            <form className="d-flex align-items-center mt-3 gap-2">
              <InputOrderSent {...priceData} />
              <button type="submit">{trans("rating_vendor.send")}</button>
            </form>
          </div>
        </EmptyPopup>
      )}
      <div
        className="FlatniessCard py-3 pointer px-3 px-md-4"
        onClick={() => {
          setUserChat(data.id)
          setWindow("myOffers");
        }}
      >
        <h3 className=" fs-20-400">{`${data.distance_km} ${trans(
          "vendor.orders.km"
        )}`}</h3>
        <p className="mt-2">
          {`${
            data?.details?.note.length > 100
              ? `${data.details.note.substring(0, 60)}...`
              : data.details.note
          }`}
        </p>
      </div>
    </>
  );
}

export default FlatniessCard;
