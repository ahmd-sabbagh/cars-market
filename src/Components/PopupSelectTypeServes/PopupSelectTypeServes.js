import React from "react";
import "./PopupSelectTypeServes.css";
import sparts from "./Assets/1.png";
import workShop from "./Assets/2.png";
import sotha from "./Assets/3.png";
import { Link } from "react-router-dom";
import { trans } from "../Navbar/Navbar";
import { IoMdClose } from "react-icons/io";

function PopupSelectTypeServes({ setSelectType }) {
  return (
    <div className="PopupSelectTypeServes flex-c px-3">
      <div className="types bg-white px-4 py-5 px-md-5 r-10 d-flex align-items-center gap-4 position-relative flex-wrap">
        {/* cancel */}
        <div
          className="cancel flex-c box-sh pointer"
          onClick={() => {
            setSelectType(false);
          }}
        >
          <IoMdClose />
        </div>
        {/* cancel */}
        <Link
          to={"/order-spare"}
          className="type bg-white p-3 r-07 d-flex flex-column gap-3 align-items-center box-sh flex-grow-1"
          data-aos="fade-up"
          data-aos-duration={`3000`}
          data-aos-offset="50"
        >
          <div
            className="image bg-image"
            style={{ backgroundImage: `url(${sparts})` }}
          ></div>
          <h3 className="fs-16-700">{trans("home.order.spare")}</h3>
        </Link>
        <Link
          to={"/workshop"}
          className="type bg-white p-3 r-07 d-flex flex-column gap-3 align-items-center box-sh flex-grow-1"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <div
            className="image bg-image"
            style={{ backgroundImage: `url(${workShop})` }}
          ></div>
          <h3 className="fs-16-700">{trans("home.order.maintenance")}</h3>
        </Link>
        <Link
          to={"/flatnies"}
          className="type bg-white p-3 r-07 d-flex flex-column gap-3 align-items-center box-sh flex-grow-1"
          data-aos="fade-up"
          data-aos-duration={`3000`}
          data-aos-offset="50"
        >
          <div
            className="image bg-image"
            style={{ backgroundImage: `url(${sotha})` }}
          ></div>
          <h3 className="fs-16-700">{trans("home.order.flatness")}</h3>
        </Link>
      </div>
    </div>
  );
}

export default PopupSelectTypeServes;
