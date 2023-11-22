import React from "react";
import "./OrderCard.css";
import Nav from "./Components/Nav";
import Information from "./Components/Information";
import Buttons from "./Components/Buttons";

function OrderCard({ data }) {
  return (
    <div className="OrderCard border r-05 box-sh">
      <Nav
        time={data.publication_time}
        servesType={data.service_type}
        status={data.status}
        isEndTime={data.is_end_time}
      />
      <div className="body d-flex flex-column gap-4 flex-md-row  justify-content-between p-3 p-md-4 ">
        <Information Data={data} />
        <Buttons Data={data} />
      </div>
    </div>
  );
}

export default OrderCard;
