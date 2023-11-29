import "./RequestesMessage.css";
import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as User } from "../../Assets/user.svg";
import { ReactComponent as Send } from "../../Assets/send.svg";
import { ReactComponent as Arrow } from "../../Assets/arrow-down.svg";
import { ReactComponent as Down } from "../../Assets/chevron-down.svg";
import { ReactComponent as Hent } from "../../Assets/exclamation-circle.svg";
import Done from "../../Assets/done.json";
import DotsMenu from "../../../../Components/DotsMenu/DotsMenu";
import ScrollarComponent from "../../../../Components/ScrollarComponent/ScrollarComponent";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SparParts from "./SparParts";
import EmptyPopup from "../../../../Components/EmptyPopup/EmptyPopup";
import CheckRight from "../../../../Components/CheckRight/CheckRight";
import Lottie from "lottie-react";

function RequestesMessage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const [open, setOpen] = useState(false);
  const [doneDeal, setDoneDeal] = useState(true);
  const [doneSelect, setDoneSelect] = useState(false);
  const [confirmBuy, setConfirmBuy] = useState(false);
  const [viewPopup, setViewPopup] = useState(false);
  const [done, setDone] = useState(false);
  const [textType, setTextType] = useState(trans("requestes_message.spare"));

  // spare parts
  const [spare, setSpare] = useState([]);
  const handleCheckSpare = (event) => {
    var updatedList = [...spare];
    if (event.target.checked) {
      updatedList = [...spare, event.target.value];
    } else {
      updatedList.splice(spare.indexOf(event.target.value), 1);
    }
    setSpare(updatedList);
  };
  // spare parts
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
                  disabled={!confirmBuy}
                  onClick={() => {
                    setDone(true);
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

      <div className="RequestesMessage AllPageMessage py-4 px-0 px-lg-3">
        <div className="head">
          <h3 className="fs-24-600">{trans("requestes_message.title")}</h3>
          <p>{trans("requestes_message.disc")}</p>
        </div>
        {/* cont */}
        <div className="cont mt-5 px-3 px-md-4 bg-white overflow-hidden r-10">
          {/* All Message */}
          <div className="list-window bg-white">
            <div className="all-message py-4">
              {/* Head */}
              <div className="top d-flex align-items-center justify-content-between">
                <span className="message-count fs-20-600">{`${trans(
                  "requestes_message.all_requestes"
                )} (${"5"})`}</span>
                <div
                  className="types position-relative pointer r-05 border"
                  style={{ padding: "4px 10px" }}
                >
                  {/* window ctrl */}
                  <div
                    className="d-flex"
                    style={{ gap: "10px" }}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <span>{textType}</span>
                    <div
                      className={`icon fit-height transion-5 ${
                        open && "icon-rotate"
                      }`}
                    >
                      <Down />
                    </div>
                  </div>
                  {/* window */}
                  <div
                    className={`types-window position-absolute bg-white box-sh r-07 p-2 top-100 mt-1 ${
                      !open && "d-none"
                    }`}
                  >
                    <ul className="d-flex flex-column gap-1">
                      <li
                        onClick={() => {
                          setTextType(trans("requestes_message.spare"));
                        }}
                      >
                        {trans("requestes_message.spare")}
                      </li>
                      <li
                        onClick={() => {
                          setTextType(trans("requestes_message.workshop"));
                        }}
                      >
                        {trans("requestes_message.workshop")}
                      </li>
                      <li
                        onClick={() => {
                          setTextType(trans("requestes_message.sotha"));
                        }}
                      >
                        {trans("requestes_message.sotha")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Message Tap */}
              <div className="side mt-4">
                <ScrollarComponent height="300px">
                  <div className="d-flex flex-column gap-2">
                    <div
                      className="link-message d-flex gap-3 pointer justify-content-between transion-5"
                      onClick={() => {
                        setStatus(true);
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="image flex-c">
                          <User />
                        </div>
                        <div className="text">
                          <h4 className="mt-1">{"ابو وليد للسيارات"}</h4>
                          <p className="mt-2">{"كم السوم من فضلك للجدية ؟"}</p>
                        </div>
                      </div>
                      <div className="time">{"4:57 PM"}</div>
                    </div>
                    <div
                      className="link-message d-flex gap-3 pointer justify-content-between transion-5"
                      onClick={() => {
                        setStatus(true);
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="image flex-c">
                          <User />
                        </div>
                        <div className="text">
                          <h4 className="mt-1">{"ابو وليد للسيارات"}</h4>
                          <p className="mt-2">{"كم السوم من فضلك للجدية ؟"}</p>
                        </div>
                      </div>
                      <div className="time">{"4:57 PM"}</div>
                    </div>
                  </div>
                </ScrollarComponent>
              </div>
            </div>
          </div>
          {/* Content Message */}
          <div
            className={`control transion-5 full-width pt-4 ${
              status && "right-0"
            }`}
          >
            <div className="content-message d-flex flex-column gap-2">
              {/* Head */}
              <div className="head-message d-flex gap-4 justify-content-between border-bottom pb-3">
                <div className="d-flex align-items-center gap-3 px-3">
                  <div className="image flex-c">
                    <User />
                  </div>
                  <div className="text">
                    <h4>{"ابو وليد للسيارات"}</h4>
                    <p className="mt-1">{trans("harag_message.active_now")}</p>
                  </div>
                </div>
                <div className="ctr d-flex align-items-center gap-2">
                  <DotsMenu>
                    <div className="d-flex flex-column gap-2 chat-menu p-2">
                      <Link className="li">
                        {trans("requestes_message.vendor_details")}
                      </Link>
                      <div className="li pointer">
                        {trans("requestes_message.block_vendor")}
                      </div>
                    </div>
                  </DotsMenu>
                  <div
                    className="back pointer px-3 d-md-none"
                    onClick={() => {
                      setStatus(false);
                    }}
                  >
                    <Arrow />
                  </div>
                </div>
              </div>
              {/* Spare */}
              <div className="spare-parts">
                <ScrollarComponent height="210px">
                  <div className="d-flex flex-column gap-2">
                    <SparParts handleCheckSpare={handleCheckSpare} />
                    <SparParts handleCheckSpare={handleCheckSpare} />
                    <SparParts handleCheckSpare={handleCheckSpare} />
                    <SparParts handleCheckSpare={handleCheckSpare} />
                  </div>
                </ScrollarComponent>
              </div>
              {/* container message */}
              <div
                className="container-message p-3"
                style={{ height: "300px" }}
              >
                <ScrollarComponent height="500px"></ScrollarComponent>
              </div>
              {/* Done Deal Btn */}
              <div className="done-deal-btn">
                {doneSelect ? (
                  <div className="d-flex flex-column gap-2">
                    <div className="hent d-flex align-items-center justify-content-center gap-2">
                      <span>
                        <Hent />
                      </span>
                      <div className=" fs-14-400">
                        {trans("requestes_message.heddin_spare")}
                      </div>
                    </div>
                    <button
                      className={`btn-blue full-width ${
                        !spare.length && "disabled"
                      }`}
                      disabled={!spare.length}
                      onClick={() => {
                        setViewPopup(true);
                      }}
                    >
                      {trans("requestes_message.done_buy")}
                    </button>
                  </div>
                ) : (
                  <>
                    {doneDeal ? (
                      <button
                        className="btn-blue full-width"
                        onClick={() => {
                          if (spare.length) {
                            setDoneSelect(true);
                          } else {
                            setDoneDeal(false);
                          }
                        }}
                      >
                        {trans("requestes_message.confirm_with_vendor")}
                      </button>
                    ) : (
                      <div className="select-spare bg-main r-07 p-4">
                        <div className=" text-white">
                          {trans("requestes_message.select_spare")}
                        </div>
                        <button
                          className={`border-0 bg-white mt-3 r-05 fs-16-600 ${
                            !spare.length && "disabled"
                          }`}
                          style={{ padding: "9px 37px" }}
                          disabled={!spare.length}
                          onClick={() => {
                            setDoneSelect(true);
                          }}
                        >
                          {trans("requestes_message.confirm")}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
              {/* Text Send Message */}
              <div className="send-message border-top">
                <div className="input-message d-flex">
                  <input
                    placeholder={trans("harag_message.write_message")}
                    className="flex-grow-1 border-0 bg-transparent"
                    type="text"
                  />
                  <div className="icon bg-green pointer">
                    <Send />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestesMessage;
