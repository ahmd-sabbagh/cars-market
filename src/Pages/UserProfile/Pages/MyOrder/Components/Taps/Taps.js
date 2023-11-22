import { trans } from "../../../../../../Components/Navbar/Navbar";
import "./Taps.css";
import NavHeader from "./NavHeader";
import OrderCard from "../Card/OrderCard";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ExistStatus,
  TapsType,
  mainDataOrderProcessing,
  myOrderLoader,
} from "../../GlopalStateRecoil/AllData";
import Loader from "../../../../../../Components/Loader/Loader";
import NoOrders from "../NoOrders/NoOrders";

function Taps() {
  const [tap, setTap] = useRecoilState(TapsType);
  const data = useRecoilValue(mainDataOrderProcessing);
  const [exist, setExist] = useRecoilState(ExistStatus);
  const [loader, setLoader] = useRecoilState(myOrderLoader);

  return (
    <div className="Taps bg-white r-10 pb-4 mt-5">
      {/* Nav Tap */}
      <div className="nav-tab pt-4 d-flex align-items-center">
        <div
          className={`flex-grow-1 text-center pb-4 fs-20-600 pointer ${
            tap === "processing" && "active"
          }`}
          onClick={() => {
            setTap("processing");
          }}
        >
          {trans("my_order.order_now")}
        </div>
        <div
          className={`flex-grow-1 text-center pb-4 fs-20-600 pointer ${
            tap === "finished" && "active"
          }`}
          onClick={() => {
            setTap("finished");
          }}
        >
          {trans("my_order.last_order")}
        </div>
      </div>
      {/* Body */}

      <div className="px-md-4">
        <NavHeader />
        {loader ? (
          <div
            className="flex-c bg-white r-07 mt-5"
            style={{ height: "350px" }}
          >
            <Loader width={"150px"} />
          </div>
        ) : exist ? (
          <>
            <div className="d-flex flex-column gap-4">
              {data.orders?.data.map((item) => (
                <OrderCard data={item} key={item.id} />
              ))}
            </div>
          </>
        ) : (
          <NoOrders typeServes={"order"} setLoader={setLoader} />
        )}
      </div>
    </div>
  );
}

export default Taps;
