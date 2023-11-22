import React from "react";
import { trans } from "../../Components/Navbar/Navbar";
import { useState } from "react";
import SelectCar from "../../Components/SelectCarFromMyCars/SelectCar";
import DropdownToAll from "../../Components/DropdownToAll/DropdownToAll";
import { useRecoilValue } from "recoil";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";

function ChooseCar({ setActive, selectionComponent }) {
  const carsValue = useRecoilValue(CarsTypeState);
  const [myCar, setMyCar] = useState(carsValue ? true : false);
  const [ourCar, setOurCar] = useState(false);
  return (
    <div className="ChooseCar mt-5">
      <span className="span">{trans("car_holder.choose_us")}</span>
      <div className="choose d-flex gap-4" style={{ marginTop: "12px" }}>
        <button
          type="button"
          className={myCar ? "active" : null}
          onClick={() => {
            setOurCar(false);
            setMyCar(true);
          }}
        >
          {trans("car_holder.my_cars")}
        </button>
        <button
          type="button"
          className={ourCar ? "active" : null}
          onClick={() => {
            setMyCar(false);
            setOurCar(true);
          }}
        >
          {trans("car_holder.other_cars")}
        </button>
      </div>
      {/* My Car */}
      {myCar && (
        <div className="mt-4" data-aos="fade-up" data-aos-duration="1000">
          <span className="span mb-12">
            {trans("order_workshop.chose_car")}
          </span>
          <SelectCar setActive={setActive} />
        </div>
      )}
      {/* My Car */}
      {/* OurCar */}
      {ourCar && (
        <div className="mt-4" data-aos="fade-up" data-aos-duration="1000">
          {/* Company Car */}
          <div className="d-flex flex-column gap-2">
            <span className="span">
              {trans("add_new_car.car_company_lable")}
            </span>
            <DropdownToAll {...selectionComponent[0]} />
          </div>
          {/* Row */}
          <div className=" d-flex mt-4 flex-column flex-lg-row align-items-center gap-3 gap-lg-4">
            {/* type car */}
            <div className="d-flex flex-column gap-2 full-width">
              <span className="span">
                {trans("add_new_car.type_car_lable")}
              </span>
              <DropdownToAll {...selectionComponent[1]} />
            </div>
            {/* year car */}
            <div className="d-flex flex-column gap-2 full-width">
              <span className="span">
                {trans("add_new_car.year_car_lable")}
              </span>
              <DropdownToAll {...selectionComponent[2]} />
            </div>
          </div>
        </div>
      )}
      {/* OurCar */}
    </div>
  );
}

export default ChooseCar;
