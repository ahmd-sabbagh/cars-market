import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as User } from "../../Assets/user.svg";
import { ReactComponent as Send } from "../../Assets/send.svg";
import { ReactComponent as Arrow } from "../../Assets/arrow-down.svg";
import DotsMenu from "../../../../Components/DotsMenu/DotsMenu";
import ScrollarComponent from "../../../../Components/ScrollarComponent/ScrollarComponent";
import { useState } from "react";

function HaragMessage() {
  const [status, setStatus] = useState(true); 
  return (
    <div className="AllPageMessage py-4 px-0 px-lg-3">
      <div className="head">
        <h3 className="fs-24-600">{trans("harag_message.title")}</h3>
        <p>{trans("harag_message.disc")}</p>
      </div>
      {/* cont */}
      <div className="cont mt-5 px-3 px-md-4 bg-white overflow-hidden r-10">
        {/* All Message */}
        <div className="list-window bg-white">
          <div className="all-message py-4">
            <span className="message-count fs-20-600">{`${trans(
              "harag_message.all_message"
            )} (${"5"})`}</span>
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
          <div className="content-message">
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
                  <p className="p-2">hello</p>
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
            {/* container message */}
            <div className="container-message p-3" style={{ height: "300px" }}>
              <ScrollarComponent height="500px">
                
              </ScrollarComponent>
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
  );
}

export default HaragMessage;
