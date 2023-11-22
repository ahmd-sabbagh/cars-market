import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ClipboardCopy from "./CopyText";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { useState } from "react";

function CardInvitation({ title, desc, link, image }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="CardInvitation border p-3 r-07 transion-5">
      <div
        className="head d-flex justify-content-between pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className=" fs-16-600">{title}</div>
        <div className={`arrow transion-5 ${open && "icon-rotate"}`}>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Description */}
      <div
        className="pt-4 mt-3 border-top"
        style={{ display: open ? "block" : "none" }}
      >
        <p className=" fs-14-400 mb-4" style={{ maxWidth: "410px" }}>
          {desc}
        </p>
        {image ? (
          <>
            <div className="image mx-auto flex-c">
              <img src={image} alt="" />
            </div>
            <button className="btn-green mx-auto d-block mt-4">
              {trans("vendor.FriendsClaims.card_three.print")}
            </button>
          </>
        ) : (
          <ClipboardCopy copyText={link} />
        )}
      </div>
    </div>
  );
}

export default CardInvitation;
