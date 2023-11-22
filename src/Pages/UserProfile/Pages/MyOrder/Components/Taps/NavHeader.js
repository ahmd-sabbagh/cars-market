/* eslint-disable no-unused-vars */
import React from "react";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  mainDataOrderProcessing,
  typeServices,
  typeServicesText,
} from "../../GlopalStateRecoil/AllData";

function NavHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  // Glopal State
  const [textType, setTextType] = useRecoilState(typeServicesText);
  const dataCount = useRecoilValue(mainDataOrderProcessing);
  const [servesType, setServesType] = useRecoilState(typeServices);

  return (
    <div className="NavHeader d-flex align-items-center justify-content-between px-3 px-md-0">
      <h4 className="fs-24-600">{`${trans("my_order.order_count")} (${
        dataCount.orders_count
      })`}</h4>
      <div
        className="menu position-relative d-flex align-items-center justify-content-between px-3 pointer"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span>{textType}</span>
        <span className={`transion-5 ${openMenu && "icon-rotate"}`}>
          <IoIosArrowDown />
        </span>
        {/* Window */}
        {openMenu && (
          <div className="menu-window position-absolute top-100 w-100 r-05 mt-2 start-0 p-3 box-sh bg-white">
            <ul className="d-flex flex-column gap-1">
              <li
                onClick={() => {
                  setTextType(trans("my_order.all_order"));
                  setServesType("all");
                }}
              >
                {trans("my_order.all_order")}
              </li>
              <li
                onClick={() => {
                  setTextType(trans("requestes_message.spare"));
                  setServesType("spare_parts");
                }}
              >
                {trans("requestes_message.spare")}
              </li>
              <li
                onClick={() => {
                  setTextType(trans("requestes_message.workshop"));
                  setServesType("maintenance_services");
                }}
              >
                {trans("requestes_message.workshop")}
              </li>
              <li
                onClick={() => {
                  setTextType(trans("requestes_message.sotha"));
                  setServesType("flatness");
                }}
              >
                {trans("requestes_message.sotha")}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavHeader;
