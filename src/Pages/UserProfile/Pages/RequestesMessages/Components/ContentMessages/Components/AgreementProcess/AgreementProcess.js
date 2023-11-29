import React, { useState } from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import { ReactComponent as Hent } from "./Assets/exclamation-circle.svg";
import "./AgreementProcess.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  buyerChangeUserId,
  choseSparePartsArray,
  openWindowOrdersInChat,
} from "../../../../GlopalStateRecoil/AllData";
import Popups from "./Popups/Popups";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../../../Others/Error";
import { basedDomin } from "../../../../../../../../Api/basedDomin";
import { LoaderState } from "../../../../../../../../Recoil/All/Loader";

function AgreementProcess({
  is_confirm_deal,
  is_done_deal,
  order,
  setUsersChat,
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useRecoilState(LoaderState);
  // open window spares
  const [open, setOpen] = useRecoilState(openWindowOrdersInChat);
  // open window spares
  // Spare
  const userId = useRecoilValue(buyerChangeUserId);
  const spares = useRecoilValue(choseSparePartsArray);
  // Spare
  const [doneDeal, setDoneDeal] = useState(true);
  const [viewPopup, setViewPopup] = useState(false);
  const [confirmBuy, setConfirmBuy] = useState(false);

  const popupsObj = {
    viewPopup,
    setViewPopup,
    confirmBuy,
    setConfirmBuy,
    setUsersChat,
  };
  // function done deal
  const partsBody = {
    order_id: userId.order_id,
    vendor_id: userId.vendor_id,
    ...(order.service_type === "spare_parts" && { parts_ids: spares }),
  };

  const doneDealParts = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/buyer/orders/deal/${
          order.service_type === "spare_parts" ? "done-deal-parts" : "done-deal"
        }`,
        partsBody,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setUsersChat(data.data);
        SuccsesComponent(data.message);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // function done deal
  // function cancel deal
  const cancelDealParts = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/buyer/orders/deal/delete`,
        {
          order_id: userId.order_id,
          vendor_id: userId.vendor_id,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setUsersChat(data.data);
        SuccsesComponent(data.message);
        setLoader(false);
        console.log(data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // function cancel deal
  return (
    <>
      {/* popups */}
      <Popups {...popupsObj} />
      {!is_confirm_deal && (
        <>
          {/* popups */}
          {/* three step */}
          <div className="AgreementProcess px-3 mb-2">
            {is_done_deal ? (
              <div className="d-flex flex-column gap-2">
                <div className="hent d-flex align-items-center justify-content-center gap-2">
                  <span>
                    <Hent />
                  </span>
                  <div className=" fs-14-400">
                    {trans("requestes_message.heddin_spare")}
                  </div>
                </div>
                {/* Buttons */}
                <div className="d-flex gap-3">
                  {/* confirm */}
                  <button
                    className={`btn-blue full-width }`}
                    onClick={() => {
                      setViewPopup(true);
                    }}
                  >
                    {trans("requestes_message.done_buy")}
                  </button>
                  {/* cancel confirm */}
                  <button
                    className={`btn-border-blue full-width`}
                    onClick={() => {
                      cancelDealParts();
                    }}
                  >
                    {trans("requestes_message.cancel_buy")}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {!is_done_deal && (
                  <>
                    {/* first step */}
                    {doneDeal ? (
                      <button
                        className="btn-blue full-width"
                        onClick={() => {
                          if (order.service_type === "spare_parts") {
                            if (spares.length) {
                              doneDealParts();
                            } else {
                              setDoneDeal(false);
                              setOpen(true);
                            }
                          } else {
                            doneDealParts();
                          }
                        }}
                      >
                        {trans("requestes_message.confirm_with_vendor")}
                      </button>
                    ) : (
                      <>
                        {/* second step */}
                        <div className="select-spare bg-main r-07 p-4">
                          <div className=" text-white">
                            {trans("requestes_message.select_spare")}
                          </div>
                          <button
                            className={`border-0 bg-white mt-3 r-05 fs-16-600 ${
                              !spares.length && "disabled"
                            }`}
                            style={{ padding: "9px 37px" }}
                            disabled={!spares.length}
                            onClick={() => {
                              doneDealParts();
                            }}
                          >
                            {trans("requestes_message.confirm")}
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default AgreementProcess;
