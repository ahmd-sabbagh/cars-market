import React from "react";
import EmptyPopup from "../../Components/EmptyPopup/EmptyPopup";
import DoneRightJson from "../../Components/DoneRightJson/DoneRightJson";
import { ReactComponent as Hent } from "./Assets/exclamation-circle.svg";
import { Link } from "react-router-dom";
import { trans } from "../../Components/Navbar/Navbar";

function Popup({ returnData }) {
  const data = returnData[0];
  return (
    <>
      <EmptyPopup>
        <div className="spare-done d-flex flex-column gap-3">
          <div className="icon-right mx-auto">
            <DoneRightJson />
          </div>
          <h4 className="fs-20-600 text-center">
            {trans("order_spare.popup.done")}
          </h4>
          {/* informations */}
          <div className="informations p-3 mt-4">
            <div className="top d-flex justify-content-between gap-4">
              <div className="text">
                <div className="tittle d-flex flex-column">
                  <span>{trans("order_spare.popup.name")}</span>
                  <h4 className="fs-12-500">{data?.name}</h4>
                </div>
                <div className="desc d-flex flex-column mt-2">
                  <span>{trans("order_spare.popup.quality")}</span>
                  <h4 className="fs-12-500">{data?.industry}</h4>
                </div>
              </div>
              <div
                className="image bg-image"
                style={{ backgroundImage: `url(${data?.image})` }}
              ></div>
            </div>
            {/* Clarifications */}
            <div className="clarifications">
              <span>{trans("order_spare.popup.clarifications")}</span>
              <p className="fs-12-500">
                {data?.note?.length > 100
                  ? `${data?.note.substring(1, 100)}...`
                  : data?.note}
              </p>
            </div>
          </div>
          {/* Count */}
          {returnData?.length > 1 && (
            <div className="d-flex align-items-center gap-1">
              <span>{trans("order_spare.num_spare")}</span>
              <span>
                +{returnData?.length > 1 && returnData?.length - 1}
              </span>
            </div>
          )}
          {/* Hent */}
          <div className="Hent d-flex align-items-center gap-2">
            <span>
              <Hent />
            </span>
            <p>
              {trans("order_spare.popup.hent")}
              <Link to={"/my-Profile/my-order"}>
                {trans("order_spare.popup.my_order")}
              </Link>
            </p>
          </div>
          {/* Link */}
          <Link
            to={"/my-Profile/requestes-message"}
            className="btn-blue mx-auto mt-3"
          >
            {trans("order_spare.popup.vendor_order")}
          </Link>
        </div>
      </EmptyPopup>
    </>
  );
}

export default Popup;
