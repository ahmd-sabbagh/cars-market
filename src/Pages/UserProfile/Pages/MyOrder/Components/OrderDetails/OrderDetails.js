import React, { useEffect } from "react";
import axios from "axios";
import { basedDomin } from "../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../Others/Error";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import OrderSpareDetails from "./OrderSpareDetails/OrderSpareDetails";
import FlatniesOrderDetails from "./OrderFlatnessDetails/FlatniesOrderDetails";
import { useRecoilValue } from "recoil";
import { refreshDataForOrderSpareDetails } from "./OrderSpareDetails/GlopalStateRecoil/AllData";
import Loader from "../../../../../../Components/Loader/Loader";
import OrderWorkShopDetails from "./OrderWorkShopDetails/OrderWorkShopDetails";
function OrderDetails() {
  const prams = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loader, setLoder] = useState(true);
  // Get Order Details Function
  const refrehData = useRecoilValue(refreshDataForOrderSpareDetails);
  const [data, setData] = useState();
  const getOrderDetails = () => {
    axios
      .get(`${basedDomin}/buyer/orders/details/${prams?.Id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data.data);
        setLoder(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Get Order Details Function
  useEffect(() => {
    getOrderDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refrehData]);
  return (
    <>
      {loader ? (
        <div className="flex-c" style={{ height: "100%" }}>
          <Loader width={"300px"} />
        </div>
      ) : data?.service_type === "spare_parts" ? (
        <OrderSpareDetails Data={data} />
      ) : data?.service_type === "flatness" ? (
        <FlatniesOrderDetails Data={data} />
      ) : (
        <OrderWorkShopDetails Data={data} />
      )}
    </>
  );
}

export default OrderDetails;
