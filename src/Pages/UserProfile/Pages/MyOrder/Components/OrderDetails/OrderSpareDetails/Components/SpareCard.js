import React from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import DotsMenu from "../../../../../../../../Components/DotsMenu/DotsMenu";
import { DeleteSparePartFun } from "../DeleteSparePartFun";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../../../../../../../Recoil/All/Loader";
import { refreshDataForOrderSpareDetails } from "../GlopalStateRecoil/AllData";
import EmptyPopup from "../../../../../../../../Components/EmptyPopup/EmptyPopup";
import EditSpareParts from "./EditSpareParts";
import { useState } from "react";

function SpareCard({ Data }) {
  const navigate = useNavigate();
  const [loader, setLoder] = useRecoilState(LoaderState);
  const [refresh, setRefresh] = useRecoilState(refreshDataForOrderSpareDetails);
  const [viewEdit, setWiewEdit] = useState(false);
  return (
    <>
      {viewEdit && (
        <EmptyPopup>
          <EditSpareParts Data={Data} setWiewEdit={setWiewEdit} />
        </EmptyPopup>
      )}
      <div className="SpareCard p-3 r-07 border d-flex justify-content-between gap-3 box-sh">
        <div className="d-flex gap-3">
          <div
            className="image bg-image r-05"
            style={{ backgroundImage: `url(${Data?.image})` }}
          ></div>
          <div className="text">
            <h5 className="mb-1 mb-md-2">{Data?.name}</h5>
            <div className="text d-flex flex-sm-column flex-wrap gap-2 gap-sm-1">
              <div className="date d-flex align-items-center gap-1">
                <span className="text-color">
                  {trans("order_details.industry")}
                </span>
                <span>{Data?.industry}</span>
              </div>
              {/* Price */}
              <div className="num d-flex align-items-center gap-1">
                <span className="text-color">
                  {trans("order_details.spare_num")}
                </span>
                <span>{Data?.count}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Control */}
        <DotsMenu>
          <div className="d-flex flex-column menu">
            <button
              type="button"
              onClick={() => {
                setWiewEdit(true);
              }}
            >
              {trans("order_details.order_edit")}
            </button>
            <button
              type="button"
              onClick={() => {
                setLoder(true);
                DeleteSparePartFun(
                  "/buyer/orders/parts/delete/",
                  Data.id,
                  setLoder,
                  navigate,
                  refresh,
                  setRefresh
                );
              }}
            >
              {" "}
              {trans("order_details.delete_spare")}{" "}
            </button>
          </div>
        </DotsMenu>
      </div>
    </>
  );
}

export default SpareCard;
