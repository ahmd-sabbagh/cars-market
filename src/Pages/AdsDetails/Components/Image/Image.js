import React from "react";
import "./Image.css";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as Share } from "./Assets/share.svg";
import { ReactComponent as Detail } from "./Assets/exclamation-circle.svg";
import { ReactComponent as Report } from "./Assets/flag.svg";
import Popup from "../../../../Components/Popup/Popup";
import { useState } from "react";
import ShareComponent from "./Components/Share/Share";
import Deatails from "./Components/Details/Deatails";
import ReportComponent from "./Components/Report/Report";

function Image({ Data }) {
  // Popup
  const [open, setOpen] = useState({
    status: false,
    text: "",
    type: "",
  });
  // Share
  const ad_share = {
    status: true,
    text: trans("ads_details.ads_share"),
    type: "share",
  };
  // Ad Details
  const ad_details = {
    status: true,
    text: trans("ads_details.details"),
    type: "details",
  };
  // Ad Report
  const ad_report = {
    status: true,
    text: trans("ads_details.ads_report"),
    type: "report",
  };
  // Popup
  return (
    <>
      {open.status && (
        <Popup state={open} setState={setOpen}>
          {open.type === "share" ? (
            <ShareComponent />
          ) : open.type === "details" ? (
            <Deatails />
          ) : open.type === "report" ? (
            <ReportComponent
              Route="/shop/ads/report"
              Id={Data?.id}
              setState={setOpen}
              state={open}
            />
          ) : null}
        </Popup>
      )}

      <div className="Image r-10 overflow-hidden">
        <div
          className="image"
          style={{ backgroundImage: `url(${Data?.image_main})` }}
        ></div>
        <div className="footer d-flex align-items-center px-1 px-md-3">
          <div
            className="share full-width d-flex align-items-center justify-content-center gap-1 gap-md-2 pointer"
            onClick={() => {
              setOpen(ad_share);
            }}
          >
            <span>
              <Share />
            </span>
            <span>{trans("ads_details.ads_share")}</span>
          </div>
          <div
            className="detail full-width d-flex align-items-center justify-content-center gap-1 gap-md-2 pointer border-end border-start"
            onClick={() => {
              setOpen(ad_details);
            }}
          >
            <span>
              <Detail />
            </span>
            <span>{trans("ads_details.details")}</span>
          </div>
          <div
            className="report full-width d-flex align-items-center justify-content-center gap-1 gap-md-2 pointer"
            onClick={() => {
              setOpen(ad_report);
            }}
          >
            <span>
              <Report />
            </span>
            <span>{trans("ads_details.ads_report")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
