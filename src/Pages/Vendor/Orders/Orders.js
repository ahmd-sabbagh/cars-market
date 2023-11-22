import React from "react";
import "./Order.css";
import Filter from "./Components/Filter/Filter";
import Body from "./Components/Body/Body";
import { openFilterOrderVendor } from "../GlopalStateRecoil/AllData";
import { useRecoilValue } from "recoil";

function Orders() {
  const menuFilterIcon = useRecoilValue(openFilterOrderVendor);
  return (
    <div className={`OrdersVendor mt-4 mt-md-5 position-relative`}>
      <div className="container">
        <div className={`d-flex ${menuFilterIcon && "gap-4"} content`}>
          <Filter />
          <div className="body-padding flex-grow-1 full-hieght">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
