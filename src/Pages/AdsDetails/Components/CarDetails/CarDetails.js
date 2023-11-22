import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";

function CarDetails({ Data }) {
  return (
    <div>
      <h3 className="title-dev mb-4">{trans("ads_details.car_details")}</h3>
      <p
        className="fs-16-400 text-color"
        // dangerouslySetInnerHTML={{
        //   __html: details?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
        // }}
      >
        {Data?.details}
      </p>
    </div>
  );
}

export default CarDetails;
