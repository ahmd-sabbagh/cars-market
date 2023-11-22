import React from "react";
import image from "../../Assets/Rectangle.png";
import RatingView from "../../../../Components/RatingView/RatingView";
import { trans } from "../../../../Components/Navbar/Navbar";

function TopHead() {
  return (
    <>
      <div className="TopHead">
        <div className="row g-4">
          <div className="col-12 col-md-8">
            <div className="main-info d-flex gap-4">
              <div
                className="image bg-image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="text">
                <h4 className="fs-20-600 mt-3">{"ورشة الهلال للميكانيكا"}</h4>
                <div className="lastseen mt-2">
                  <span className=" fs-16-400 text-color">{trans("vendor_details.last_seen")}</span>
                  <span className=" fs-16-500">{" قبل 57 دقيقة"}</span>
                </div>
                <RatingView />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="buttons d-flex justify-content-center justify-content-md-end gap-4">
              <button className="btn-blue">
                {trans("service_provider.send_message")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHead;
