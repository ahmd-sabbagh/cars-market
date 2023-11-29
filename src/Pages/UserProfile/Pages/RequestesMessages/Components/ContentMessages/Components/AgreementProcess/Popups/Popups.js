import React from "react";
import EmptyPopup from "../../../../../../../../../Components/EmptyPopup/EmptyPopup";
import Done from "../Assets/done.json";
import Lottie from "lottie-react";
import { trans } from "../../../../../../../../../Components/Navbar/Navbar";
import CheckRight from "../../../../../../../../../Components/CheckRight/CheckRight";
import { useNavigate } from "react-router-dom";
import { buyerChangeUserId } from "../../../../../GlopalStateRecoil/AllData";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { basedDomin } from "../../../../../../../../../Api/basedDomin";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../../../../Others/Error";
import { useState } from "react";
function Popups({
  viewPopup,
  setViewPopup,
  confirmBuy,
  setConfirmBuy,
  setUsersChat,
}) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = useRecoilValue(buyerChangeUserId);
  const [status, setStatus] = useState(true);
  const [done, setDone] = useState(false);
  // Confirm Deal
  const confirmDealParts = () => {
    setStatus(false);
    axios
      .post(
        `${basedDomin}/buyer/orders/deal/confirm`,
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
        setDone(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Confirm Deal
  return (
    <>
      {viewPopup && (
        <EmptyPopup>
          {done ? (
            <div className="lottie">
              <div className="icon mx-auto" style={{ width: "150px" }}>
                <Lottie animationData={Done} loop={true} />
              </div>
              <div className="text text-center mb-4 fs-20-600">
                {trans("requestes_message.complet_buy")}
              </div>
              <div className="buttons d-flex gap-3">
                <button>{trans("requestes_message.rate")}</button>
                <button
                  onClick={() => {
                    setViewPopup(false);
                    navigate("/");
                  }}
                >
                  {trans("requestes_message.back")}
                </button>
              </div>
            </div>
          ) : (
            <div className="confirm-buy d-flex flex-column gap-3 justify-content-center">
              <div className="text-center">
                {trans("requestes_message.done_buy_reseved")}
              </div>
              <div className="d-flex justify-content-center">
                <CheckRight
                  state={confirmBuy}
                  setState={setConfirmBuy}
                  text={trans("requestes_message.click_here")}
                />
              </div>
              <div className="buttons d-flex align-items-center gap-2">
                <button
                  className={!confirmBuy ? "disabled" : null}
                  disabled={!confirmBuy && !status}
                  onClick={() => {
                    confirmDealParts();
                  }}
                >
                  {trans("requestes_message.sure")}
                </button>
                <button
                  onClick={() => {
                    setViewPopup(false);
                    setConfirmBuy(false);
                  }}
                >
                  {trans("requestes_message.cancel")}
                </button>
              </div>
            </div>
          )}
        </EmptyPopup>
      )}
    </>
  );
}

export default Popups;
