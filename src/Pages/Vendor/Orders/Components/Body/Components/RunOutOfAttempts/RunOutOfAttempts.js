import React from "react";
import EmptyPopup from "../../../../../../../Components/EmptyPopup/EmptyPopup";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

function RunOutOfAttempts({}) {
  return (
    <EmptyPopup flex="583px">
      <p className="fs-20-600 text-center">{trans("vendor.attempts.title")}</p>
      <div className="buttons d-flex flex-column flex-md-row mt-4 gap-3">
        <Link className="btn-blue d-block full-width">
          {trans("vendor.attempts.subscribe_now")}
        </Link>
        <button className="btn-border-blue full-width" type="button">
          {trans("vendor.attempts.remember_later")}
        </button>
      </div>
    </EmptyPopup>
  );
}

export default RunOutOfAttempts;
