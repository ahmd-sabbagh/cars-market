import React, { useState } from "react";
import { trans } from "../../../../../../../Components/Navbar/Navbar";

function Information({ Data }) {
  const [count, setCount] = useState(2);
  const [status, setStatus] = useState(false);
  return (
    <div className="Information">
      {/* Order Requier */}
      {Data.service_type === "spare_parts" && Array.isArray(Data?.details) ? (
        <h4 className="fs-16-600">{`${trans("my_order.required_parts")} (${
          Data.details.length
        })`}</h4>
      ) : null}
      {/* Order Requier */}
      {/* Details */}
      <div
        className={`parts d-flex flex-column gap-1 ${
          Data.service_type === "spare_parts" && "mt-4"
        }`}
      >
        {Array.isArray(Data.details) ? (
          Data?.details
            .slice(0, count)
            .map((item) => (
              <span key={item.id}>{`${item.name} / ${item.industry}`}</span>
            ))
        ) : (
          <span>{`${
            Data?.details?.note.length > 100
              ? `${Data.details.note.substring(0, 100)}...`
              : Data.details.note
          }`}</span>
        )}
      </div>
      {/* Details */}
      {/* Buttons View All And Less */}
      {Array.isArray(Data.details) && status ? (
        <button
          className="mt-3 border-0 bg-transparent"
          onClick={() => {
            setCount(2);
            setStatus(false);
          }}
        >
          {trans("my_order.view_less")}
        </button>
      ) : Data.details.length > 2 ? (
        <button
          className="mt-3 border-0 bg-transparent"
          onClick={() => {
            setCount(Data.details.length);
            setStatus(true);
          }}
        >
          {trans("my_order.view_more")}
        </button>
      ) : null}
    </div>
  );
}

export default Information;
