import React, { useEffect } from "react";
import "./TheOrders.css";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
import Spares from "./Cards/Spares";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../../Others/Error";
import { useState } from "react";
import Loader from "../../../../../../../Components/Loader/Loader";
import MaintenanceServices from "./Cards/MaintenanceServices";
import FlatniessCard from "./Cards/FlatniessCard";
import NothingLottie from "../../../../../../../Components/NothingLottie/NothingLottie";

function TheOrders() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [exist, setExist] = useState(false);
  // Get Orders Func
  const [data, setData] = useState([]);
  const getOrdersFauction = () => {
    axios
      .post(
        `${basedDomin}/vendor/orders`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setData(data.data.orders.data);
        if (data.data.orders.data.length > 0) {
          setExist(true);
        } else {
          setExist(false);
        }
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  useEffect(() => {
    getOrdersFauction();
  }, []);
  return (
    <div className="TheOrders d-flex flex-column flex-grow-1 py-4 mt-4">
      <h3 className="fs-24-600 mb-4 px-3 px-md-4">
        {trans("vendor.orders.all_orders")}
      </h3>
      {loader ? (
        <div className="flex-c bg-white r-07 mt-5" style={{ height: "350px" }}>
          <Loader width={"150px"} />
        </div>
      ) : exist ? (
        <>
          <div className="cards">
            {data.map((item) =>
              item.service_type === "spare_parts" ? (
                <Spares data={item} key={item.id} />
              ) : item.service_type === "maintenance_services" ? (
                <MaintenanceServices data={item} key={item.id} />
              ) : (
                <FlatniessCard data={item} key={item.id} />
              )
            )}
          </div>
        </>
      ) : (
        // No Orders
        <div className="flex-c flex-grow-1">
          <div
            className="flex-c flex-column gap-2"
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <div className="">
              <NothingLottie width={"300px"} />
            </div>
            <p className="fs-20-600 ">{trans("nothing_orders")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TheOrders;
