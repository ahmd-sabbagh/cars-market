import React, { useState } from "react";
import "./CarHolder.css";
import { trans } from "../../Components/Navbar/Navbar";

function CarHolder() {
  const [choose, bsetChoose] = useState();
  return (
    <div className="CarHolder">
      <div className="container">
        <div className="head">
          <h3 className="fs-32-700">{trans("car_holder.title")}</h3>
          <p className="mt-3">{trans("car_holder.desc")}</p>
        </div>
        <form className="mt-5">
          <div className="row g4">
            <div className="col-12">
              <span className="span">{trans("car_holder.choose_us")}</span>
              <div className="chooses">
                <div className="my-car">{trans("car_holder.my_cars")}</div>
                <div className="unlisted-cars">
                  {trans("car_holder.other_cars")}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarHolder;
