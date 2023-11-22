import React, { useState } from "react";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { OperationsFun } from "../../../Api/OperationsFun";
import LoaderButton from "../../../../../../../Components/LoaderButton/LoaderButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { TapsType, changeData } from "../../../GlopalStateRecoil/AllData";

function Buttons({ Data }) {
  const navigate = useNavigate();
  const status = Data?.status;
  const [cancelLoder, setCancelLoder] = useState(false);
  const [oprator, setOprator] = useState(false);
  const [typeId, setTypeId] = useRecoilState(changeData);
  // Oprations
  const Oprations = () => {
    if (status === "processing") {
      OperationsFun(
        "/buyer/orders/pending/",
        Data.id,
        setOprator,
        status,
        navigate,
        setTypeId
      );
    } else {
      OperationsFun(
        "/buyer/orders/re-publication/",
        Data.id,
        setOprator,
        status,
        navigate,
        setTypeId
      );
    }
  };
  // Oprations
  const tapType = useRecoilValue(TapsType);
  return (
    <div className="Buttons d-flex flex-column gap-3 mt-4 mt-md-0 flex-grow-1">
      {/* control */}
      {tapType === "processing" && (
        <div className="d-flex align-items-center gap-3">
          <div className="flex-grow-1">
            <button
              className="border-0 fs-16-500 text-white"
              type="button"
              disabled={oprator}
              onClick={() => {
                Oprations();
                setOprator(true);
              }}
            >
              {oprator ? (
                <LoaderButton height="20px" width="60px" />
              ) : status === "processing" ? (
                trans("my_order.progress_order")
              ) : status === "pending" && Data.is_end_time ? (
                trans("my_order.repeat_share")
              ) : (
                trans("my_order.stop_pending")
              )}
            </button>
          </div>
          {/* cancel */}
          <div className="flex-grow-1">
            <button
              className="border-0 fs-16-500 text-white"
              type="button"
              style={{ backgroundColor: "#d7363c" }}
              disabled={cancelLoder}
              onClick={() => {
                OperationsFun(
                  "/buyer/orders/cancel/",
                  Data.id,
                  setCancelLoder,
                  `cancel-${Data.id}`,
                  navigate,
                  setTypeId
                );
                setCancelLoder(true);
              }}
            >
              {cancelLoder ? (
                <LoaderButton height="20px" width="60px" />
              ) : (
                trans("my_order.cancel")
              )}
            </button>
          </div>
        </div>
      )}
      {/* Details */}
      <Link
        to={`/my-profile/order-details/${Data?.id}`}
        className={`text-center fs-16-500 ${
          tapType === "finished" && "bg-main text-white border-0"
        }`}
      >
        {trans("my_order.order_details")}
      </Link>
    </div>
  );
}

export default Buttons;
