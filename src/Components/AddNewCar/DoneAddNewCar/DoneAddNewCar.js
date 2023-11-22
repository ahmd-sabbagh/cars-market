import React from "react";
import "./DoneAddNewCar.css";
import Lottie from "lottie-react";
import Done from "../Assets/done.json"; 
import { trans } from "../../Navbar/Navbar";
import { useRecoilState } from "recoil";
import {
  addDefaultCar,
  doneAddCar,
  newCars,
} from "../../../Recoil/AddCars/AddServesCars";
function DoneAddNewCar() {
  const [open, setOpen] = useRecoilState(newCars);
  const [defaultCar, setDefaultCar] = useRecoilState(addDefaultCar);
  const [doneAdd, setDonaAdd] = useRecoilState(doneAddCar);

  return (
    <div className="DoneAddNewCar top-0 start-0 full-width flex-c">
      <div className="cont bg-white p-4 p-sm-5 pt-sm-4 r-10">
        <div className="lottie mx-auto">
          <Lottie animationData={Done} loop={true} />
        </div>
        <p>{trans("done_add_car.desc")}</p>
        <button
          className="mt-4"
          onClick={() => {
            setDonaAdd(false);
            setOpen(true);
          }}
        >
          {trans("done_add_car.button")}
        </button>
        <button
          className="bg-transparent mt-3"
          onClick={() => {
            setDonaAdd(false);
            setDefaultCar(true);
          }}
        >
          {trans("done_add_car.view_list_car")}
        </button>
      </div>
    </div>
  );
}

export default DoneAddNewCar;
