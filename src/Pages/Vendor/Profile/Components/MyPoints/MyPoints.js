import React from "react";
import Header from "../Header/Header";
import { trans } from "../../../../../Components/Navbar/Navbar";
import PointCard from "./Components/PointCard";
import { ReactComponent as Coins } from "./Assets/coins.svg";
import { ReactComponent as Mony } from "./Assets/mony.svg";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import { ReactComponent as GreenArrow } from "./Assets/arrowgreen.svg";
import { ReactComponent as RedArrow } from "./Assets/arrowred.svg";
import EmptyPopup from "../../../../../Components/EmptyPopup/EmptyPopup";
import Tables from "./Components/Popup/Tables";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function MyPoints() {
  const [open, setOpen] = useState(false);
  // Header Data
  const headerData = {
    title: trans("vendor.my_points.title"),
    desc: trans("vendor.my_points.desc"),
  };
  // Header Dat
  // Cards Data
  const cardsData = [
    {
      icon: <Coins />,
      text: trans("vendor.my_points.all_points"),
      text2: "550 نقطة",
    },
    {
      icon: <Mony />,
      text: trans("vendor.my_points.charge"),
      text2: "100 SAR",
    },
  ];
  // Cards Data
  // Transaction history
  const transactionHistory = [
    {
      icon: <GreenArrow />,
      title: "اتمام خدمة وتأكيد الشراء",
      date: "2023-11-13T13:39:34.000000Z",
      count: 2,
    },
    {
      icon: <RedArrow />,
      title: "تجديد الاشتراك",
      date: "2023-11-13T13:39:34.000000Z",
      count: 2,
    },
    {
      icon: <GreenArrow />,
      title: "دعوة للتطبيق",
      date: "2023-11-13T13:39:34.000000Z",
      count: 2,
    },
  ];
  // Transaction history
  return (
    <>
      {open && (
        <EmptyPopup flex="568px">
          <div className="d-flex justify-content-between mb-4">
            <h3 className=" fs-20-600">
              {trans("vendor.my_points.all_qiem_points")}
            </h3>
            <div
              className="fs-24-600 flex-c pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoClose />
            </div>
          </div>
          <Tables />
        </EmptyPopup>
      )}
      <div className="MyPoints p-3 p-md-4">
        <div className="head d-flex justify-content-between flex-wrap gap-3">
          <Header {...headerData} />
          <button
            className="btn-blue fit-height"
            onClick={() => {
              setOpen(true);
            }}
          >
            {trans("vendor.my_points.button")}
          </button>
        </div>
        {/* Cards */}
        <div className="cards mt-5 d-flex gap-4 flex-wrap">
          {cardsData.map((item, idx) => (
            <PointCard {...item} key={idx} />
          ))}
        </div>
        {/* Transaction history */}
        <div className="p-3 p-md-4 r-10 bg-white mt-5">
          <h3 className=" fs-20-600 mb-4">{trans("vendor.my_points.date")}</h3>
          <div className="d-flex flex-column gap-4">
            {transactionHistory.map((item, idx) => (
              <TransactionHistory {...item} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPoints;
