import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";

function SparParts({ handleCheckSpare, value = 1 }) {
  return (
    <label className="full-width pointer">
      <input
        className="d-none"
        value={value}
        type="checkbox"
        onChange={handleCheckSpare}
      />
      <div className="spare py-1 px-3 r-07 d-flex  justify-content-between border">
        <div className="text">
          <span className="title">{"دريكسيون لسيارة هيونداى النترا"}</span>
          <div className="made">
            <span>{trans("order_details.industry")}</span>
            <span>{"صيني"}</span>
          </div>
        </div>
        <div className="price fs-12-500">{"400 SAR"}</div>
      </div>
    </label>
  );
}

export default SparParts;
