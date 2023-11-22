import React from "react";
import { Link } from "react-router-dom";
import DoneRightJson from "../DoneRightJson/DoneRightJson";
import { trans } from "../Navbar/Navbar";

function DoneAdded({
  link1Text,
  link1To,
  link2Text,
  link2To,
  title = trans("order_spare.popup.done"),
}) {
  return (
    <div className="DoneAdded d-flex flex-column gap-4">
      <div
        className="mx-auto overflow-hidden flex-c"
        style={{ width: "120px", height: "80px" }}
      >
        <DoneRightJson />
      </div>
      <h4 className="fs-20-600 text-center">{title}</h4>
      <div className="links d-flex gap-3">
        <Link to={link1To} className="btn-blue full-width">
          {link1Text}
        </Link>
        <Link to={link2To} className="full-width btn-border-blue">
          {link2Text}
        </Link>
      </div>
    </div>
  );
}

export default DoneAdded;
