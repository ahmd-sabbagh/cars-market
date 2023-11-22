import React from "react";
import { Link } from "react-router-dom";
import "./Head.css";
import { CiMenuFries } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { openListUserMessages } from "../../../../GlopalStateRecoil/AllData";
import { trans } from "../../../../../Navbar/Navbar";
import DotsMenu from "../../../../../DotsMenu/DotsMenu";

function Head({image,name}) {
  const [open, setOpen] = useRecoilState(openListUserMessages);
  return (
    <div className="head-message d-flex gap-4 justify-content-between border-bottom p-3">
      <div className="d-flex align-items-center gap-2">
        {/* Menu */}
        <div
          className="fs-24-700 pointer flex-c"
          onClick={() => {
            setOpen(true);
          }}
        >
          <CiMenuFries />
        </div>
        {/* Image */}
        <div
          className="image bg-image"
          style={{
            backgroundImage: `url(${image}), linear-gradient(90deg, rgba(2,0,36,.2) 0%, rgba(2,0,36,.2) 0%)`,
          }}
        ></div>
        <div className="text">
          <h4 className="fs-14-500">{name}</h4>
          <p className="fs-12-400 text-color">
            {trans("harag_message.active_now")}
          </p>
        </div>
      </div>
      <div className="ctr d-flex align-items-center gap-2">
        <DotsMenu>
          <div className="d-flex flex-column gap-2 chat-menu p-2">
            <div className="li pointer">
              {trans("requestes_message.block_vendor")}
            </div>
          </div>
        </DotsMenu>
      </div>
    </div>
  );
}

export default Head;
