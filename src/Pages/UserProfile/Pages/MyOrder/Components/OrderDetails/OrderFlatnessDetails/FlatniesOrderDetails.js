import React from "react";

import CardHead from "./Components/CardHead";
import Details from "./Components/Details";
import "./FlatniesOrderDetails.css";
import Clarifications from "./Components/Clarifications";
import RouteNav from "../../../../../../../Components/RoteNav/RouteNav";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import BottomButtons from "../../BottomButtons/BottomButtons";

function FlatniesOrderDetails({ Data }) {
  const routeNav = {
    oneText: trans("order_details.one_text"),
    oneTo: "/my-Profile/my-order",
    two: trans("order_details.two"),
  };
  return (
    <div className="FlatniesOrderDetails py-4 px-0 px-md-3">
      <RouteNav {...routeNav} />
      <div className="body py-4 px-3 px-md-4 bg-white r-07 mt-4">
        <h3 className="fs-24-600">{trans("order_details.two")}</h3>
        <CardHead
          date={Data?.publication_time}
          status={Data?.status}
          isEndTime={Data?.is_end_time}
        />
        <h3 className="fs-24-600 mt-5">{trans("order_details.two")}</h3>
        <Details />
        <Clarifications Details={Data?.details} />
        <BottomButtons Id={Data?.id} />
      </div>
    </div>
  );
}

export default FlatniesOrderDetails;
