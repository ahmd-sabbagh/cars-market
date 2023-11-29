import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { trans } from "../../../../../Components/Navbar/Navbar";
import PointCard from "./Components/PointCard";
import { ReactComponent as Coins } from "./Assets/coins.svg";
import { ReactComponent as Mony } from "./Assets/mony.svg";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import EmptyPopup from "../../../../../Components/EmptyPopup/EmptyPopup";
import Tables from "./Components/Popup/Tables";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../Others/Error";
import Loader from "../../../../../Components/Loader/Loader";

function MyPoints() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // Header Data
  const headerData = {
    title: trans("vendor.my_points.title"),
    desc: trans("vendor.my_points.desc"),
  };
  // Header Dat
  // Get Dat
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  const getPointsData = () => {
    axios
      .get(`${basedDomin}/vendor/plans/transactions`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data.data);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  useEffect(() => {
    getPointsData();
  }, []);
  // Get Dat
  // Cards Data
  const cardsData = [
    {
      icon: <Coins />,
      text: trans("vendor.my_points.all_points"),
      text2: `${data?.points} ${trans("vendor.my_points.point")}`,
    },
    {
      icon: <Mony />,
      text: trans("vendor.my_points.charge"),
      text2: `${data?.wallet} SAR`,
    },
  ];
  // Cards Data
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
      <div className="MyPoints px-2 px-md-3 py-3 py-md-4 d-flex flex-column gap-5 full-height">
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
        {loader ? (
          <div
            className="flex-c bg-white r-07"
            style={{ height: "300px" }}
          >
            <Loader width={"150px"} />
          </div>
        ) : (
          <>
            <div className="cards d-flex gap-4 flex-wrap">
              {cardsData.map((item, idx) => (
                <PointCard {...item} key={idx} />
              ))}
            </div>
            {/* Transaction history */}
            <div className="p-3 p-md-4 r-10 bg-white flex-grow-1">
              <h3 className="fs-20-600 mb-4">
                {trans("vendor.my_points.date")}
              </h3>
              {data?.transactions.data.length > 0 ? (
                <div className="d-flex flex-column gap-4">
                  {data?.transactions.data.map((item,idx) => (
                    <TransactionHistory {...item} key={idx} />
                  ))}
                </div>
              ) : (
                <p className="fs-20-600 text-center">
                  {trans("not_transaction")}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MyPoints;
