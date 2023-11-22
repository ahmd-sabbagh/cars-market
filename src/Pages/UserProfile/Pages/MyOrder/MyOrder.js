import { useRecoilState, useRecoilValue } from "recoil";
import { trans } from "../../../../Components/Navbar/Navbar";
import Header from "../Components/Header";
import NoOrders from "./Components/NoOrders/NoOrders";
import Taps from "./Components/Taps/Taps";
import "./MyOrder.css";
import {
  ExistStatus,
  TapsType,
  changeData,
  mainDataOrderProcessing,
  myOrderLoader,
  typeServices,
} from "./GlopalStateRecoil/AllData";
import { useEffect } from "react";
import { GetOrdersProcessing } from "./Api/GetOrdersProcessing";
import { useNavigate } from "react-router-dom";
function MyOrder() {
  const navigate = useNavigate();
  const [exist, setExist] = useRecoilState(ExistStatus);
  const [loader, setLoader] = useRecoilState(myOrderLoader);
  // Main State Data
  const [allData, setAllData] = useRecoilState(mainDataOrderProcessing);
  const changeStatus = useRecoilValue(changeData);
  const typeServes = useRecoilValue(typeServices);
  // Main State Data
  const tapType = useRecoilValue(TapsType);
  useEffect(() => {
    GetOrdersProcessing(
      `/buyer/orders/${tapType}?service=`,
      setAllData,
      setExist,
      setLoader,
      navigate,
      typeServes
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeStatus, typeServes, tapType]);
  // Header Data
  const headers = {
    title: trans("my_order.title"),
    disc: trans("my_order.disc"),
    button: trans("my_order.order_serves"),
    to: "/about-carz",
    buttonStatus: allData?.orders?.data.length,
  };
  return (
    <div className="MyOrder py-4 px-0 px-md-3">
      <Header {...headers} />
      <Taps />
    </div>
  );
}

export default MyOrder;
