import React from "react";
import "./OrderSpareDetails.css";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import RouteNav from "../../../../../../../Components/RoteNav/RouteNav";
import OrderDetailsCard from "./Components/OrderDetailsCard";
import SpareCard from "./Components/SpareCard";
import BottomButtons from "../../BottomButtons/BottomButtons";

function OrderSpareDetails({ Data }) {
  const routeNav = {
    oneText: trans("order_details.one_text"),
    oneTo: "/my-Profile/my-order",
    two: trans("order_details.two"),
  };
  return (
    <div className="OrderSpareDetails py-4 px-0 px-md-3">
      <RouteNav {...routeNav} />
      <div className="body p-3 p-md-4 bg-white r-07 mt-4">
        <h3 className="fs-24-600">{trans("order_details.two")}</h3>
        <OrderDetailsCard
          date={Data?.publication_time}
          count={Data?.details.length}
          status={Data?.status}
          isEndTime={Data?.is_end_time}
        />
        <h3 className="fs-24-600 mt-5">{trans("my_order.required_parts")}</h3>
        <div className="mt-32">
          <div className="d-flex flex-column gap-3">
            {Data?.details.map((item) => (
              <SpareCard key={item.id} Data={item} />
            ))}
          </div>
          <BottomButtons Id={Data.id} />
        </div>
      </div>
    </div>
  );
}

export default OrderSpareDetails;
