import React from "react";
import { trans } from "../../../../../Components/Navbar/Navbar";
import { useRecoilState } from "recoil";
import { newCars } from "../../../../../Recoil/AddCars/AddServesCars";

function NoCars() {
  const [newCar, setOpen] = useRecoilState(newCars);
  return (
    <div className="NoCars d-flex flex-column justify-content-center align-items-center gap-4">
      <h4 className="fs-20-600 text-center">{trans("my_cars.no_cars")}</h4>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn-blue"
      >
        {trans("my_cars.add_car")}
      </button>
    </div>
  );
}

export default NoCars;
