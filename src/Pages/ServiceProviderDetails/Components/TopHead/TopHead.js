import React from "react";
import image from "../Assets/Rectangle.png";
import RatingView from "../../../../Components/RatingView/RatingView";
import { trans } from "../../../../Components/Navbar/Navbar";
import { useState } from "react";
import DeleteItem from "../../../../Components/DeleteItem/DeleteItem";

function TopHead() {
  const [block, setBlock] = useState(false);
  return (
    <>
      {block && <DeleteItem setView={setBlock} />}
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
                <p className="mt-2 text-color">
                  {"لتصليح السيارات الملاكي والنقل "}
                </p>
                <RatingView />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="buttons d-flex justify-content-center justify-content-md-end gap-4">
              <button
                className="btn-border-blue"
                onClick={() => {
                  setBlock(true);
                }}
              >
                {trans("service_provider.block")}
              </button>
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
