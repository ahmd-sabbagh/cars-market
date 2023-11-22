import React, { useState } from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import Customer from "./Customer";
import Popup from "../../../../Components/Popup/Popup";
import AddRating from "../../../../Components/AddRating/AddRating";
import "./CustomerRating.css";

function CustomerRating() {
  const [addRating, setAddRating] = useState({
    status: false,
    text: "تقييم البائع",
  });
  return (
    <>
      {addRating.status && (
        <Popup state={addRating} setState={setAddRating} width="460px">
          <div>
            <AddRating />
            <div className="add-text d-flex flex-column gap-3 mt-32">
              <div className="fs-16-500">{trans("rating_vendor.add")}</div>
              <textarea
                className="border r-07 p-3"
                placeholder={trans("rating_vendor.place")}
                rows="3"
              ></textarea>
              <button className="btn-blue">
                {trans("rating_vendor.send")}
              </button>
            </div>
          </div>
        </Popup>
      )}

      <div className="CustomerRating">
        <h3 className="fs-60-600">{trans("service_provider.comments")}</h3>
        <div className="mt-4 d-flex flex-column gap-3">
          <Customer />
          <Customer />
          <div className="view-all">
            <button className="border-0 bg-transparent fs-16-600">
              {trans("service_provider.all_view")}
            </button>
          </div>
        </div>
        {/* Add Rating */}
        <button
          className="btn-border-blue mt-32 px-5"
          onClick={() => {
            setAddRating({ ...addRating, status: true });
          }}
        >
          {trans("service_provider.add_rate")}
        </button>
      </div>
    </>
  );
}

export default CustomerRating;
