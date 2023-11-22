import React from "react";
import "./Body.css";
import { trans } from "../../../../../Components/Navbar/Navbar";
import TheOrders from "./Components/TheOrders/TheOrders";
import Messages from "../../../../../Components/Messages/Messages";
import { useRecoilState } from "recoil";
import { WindowChangeView } from "./GlopalStateRecoil/AllData";

function Body() {
  const [window, setWindow] = useRecoilState(WindowChangeView);
  return (
    <div className="BodyOrders r-05 box-sh full-width full-height overflow-hidden d-flex flex-column">
      <div className="HeaderType d-flex align-items-center border-bottom">
        <div
          className={`tipe py-3 py-md-4 full-width text-center fs-20-600 pointer position-relative ${
            window === "theOrders" && "active"
          }`}
          onClick={() => {
            setWindow("theOrders");
          }}
        >
          {trans("vendor.orders.the_order")}
          <div
            className={`line`}
            style={{
              width: `${window === "theOrders" ? "100%" : "0px"}`,
            }}
          ></div>
        </div>
        <div
          className={`tipe py-3 py-md-4 full-width text-center fs-20-600 pointer position-relative ${
            window === "myOffers" && "active"
          }`}
          onClick={() => {
            setWindow("myOffers");
          }}
        >
          {trans("vendor.orders.my_offers")}
          <div
            className={`line`}
            style={{
              width: `${window === "myOffers" ? "100%" : "0px"}`,
            }}
          ></div>
        </div>
      </div>
      {/*  */}
      {window === "theOrders" ? <TheOrders /> : <Messages />}
    </div>
  );
}

export default Body;
