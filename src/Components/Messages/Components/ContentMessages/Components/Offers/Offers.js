import "./Offers.css";
import { trans } from "../../../../../Navbar/Navbar";
import { FiChevronDown } from "react-icons/fi";
import Car from "./Components/Car";
import Spare from "./Components/Spare";
import { useState } from "react";
import Flatnies from "./Components/Flatnies";

function Offers({ car, order_details }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="Offers-Window border r-07 pointer position-absolute bg-white overflow-hidden mt-1"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="Head d-flex justify-content-between align-items-center p-3 ">
        <span className="fs-20-600">{trans("vendor.orders.the_order")}</span>
        <span className="flex-c fs-24-700">
          <FiChevronDown />
        </span>
      </div>
      {/* Window */}
      <div
        className={`Window transion-5 ${open && "mt-3 mt-md-4"}`}
        style={{ height: open ? "300px" : "0px" }}
      >
        <div className="car p-2 r-07 mx-auto">
          {car ? (
            <Car {...car} />
          ) : (
            <Flatnies from={order_details.from_lat} to={order_details.to_lat} />
          )}
        </div>
        {Array.isArray(order_details) ? (
          <div className="window-scroll d-flex flex-column gap-3 mt-3">
            {order_details.map(
              (item) => item.offer_part && <Spare {...item} key={item.id} />
            )}
          </div>
        ) : order_details.note ? (
          <div className="mt-3 px-3">
            <h3 className="fs-20-600">{trans("note")}</h3>
            <p className="fs-14-400 text-color mt-1">{order_details.note}</p>
          </div>
        ) : (
          <div className="fs-20-600 mt-3">{trans("no_note")}</div>
        )}
      </div>
    </div>
  );
}

export default Offers;
