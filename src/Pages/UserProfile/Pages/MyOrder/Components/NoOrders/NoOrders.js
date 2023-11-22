import React, { useState } from "react";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  typeServices,
  typeServicesText,
} from "../../GlopalStateRecoil/AllData";
import { useRecoilState } from "recoil";
import NothingLottie from "../../../../../../Components/NothingLottie/NothingLottie";
import PopupSelectTypeServes from "../../../../../../Components/PopupSelectTypeServes/PopupSelectTypeServes";

function NoOrders({ setLoader, typeServes = "" }) {
  const [servesType, setServesType] = useRecoilState(typeServices);
  const [textType, setTextType] = useRecoilState(typeServicesText);
  const [selectType, setSelectType] = useState(false);
  return (
    <>
      {selectType && <PopupSelectTypeServes setSelectType={setSelectType} />}
      <div className="NoOrders bg-white r-07">
        <div className="body d-flex flex-column align-items-center justify-content-center gap-4 full-height">
          {/* Lottie */}
          <div className="">
            <NothingLottie width={"300px"} />
          </div>
          {/* text */}
          <p className="fs-20-600">{trans("my_order.not")}</p>
          {/* Buttons */}
          <div className="d-flex gap-4">
            {/* <Link
              to={"/about-carz"}
              className="btn-blue fit-height d-block full-width"
            >
              {trans("my_order.order_serves")}
            </Link> */}
            <div
              className="btn-blue fit-height d-block pointer"
              onClick={() => {
                setSelectType(true);
              }}
            >
              {trans("my_order.order_serves")}
            </div>
            {servesType !== "all" && (
              <button
                className="btn-border-blue p-0"
                type="button"
                onClick={() => {
                  setServesType("all");
                  setTextType(trans("my_order.all_order"));
                  setLoader(true);
                }}
              >
                {trans("my_order.all_order")}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NoOrders;
