import React from "react";
import DoneRightJson from "../../Components/DoneRightJson/DoneRightJson";
import { trans } from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

function DoneAdded() {
  return (
    <div className="DoneAdded d-flex flex-column gap-4">
      <div
        className="mx-auto overflow-hidden flex-c"
        style={{ width: "120px", height: "80px" }}
      >
        <DoneRightJson />
      </div>
      <h4 className="fs-20-600 text-center">
        {trans("order_spare.popup.done")}
      </h4>
      <div className="links d-flex flex-column gap-3">
        <Link to={"/my-Profile/requestes-message"} className="btn-blue full-width">
          {trans("order_spare.popup.vendor_order")}
        </Link>
        <Link to={"/about-carz"} className="full-width btn-border-blue">
          {trans("ads_details.route_nav.home")}
        </Link>
      </div>
    </div>
  );
}

export default DoneAdded;
