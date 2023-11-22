import React, { useEffect, useRef, useState } from "react";
import "./AddCar.css";
import { ReactComponent as Car } from "./Assets/car.svg";
import { trans } from "../Navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addDefaultCar,
  newCars,
  typeServes,
} from "../../Recoil/AddCars/AddServesCars";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent } from "../../Others/Error";
import DropdownsSingle from "../DropdownsSingle/DropdownsSingle";

function AddCar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [defaultCar, setDefaultCar] = useRecoilState(addDefaultCar);
  const [open, setOpenState] = useRecoilState(newCars);

  const type = useRecoilValue(typeServes);
  // Use Ref
  const contRef = useRef();
  const tapRef = useRef(); 
  // Use Ref
  const [active, setActive] = useState(false);
  const [loader, setLoader] = useState(true);

  // Get Car Function
  const [carsOption, setCarsOption] = useState(); 
  const getCarFun = () => {
    axios
      .get(`${basedDomin}/buyer/cars`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCarsOption(data.data);
        setLoader(false)
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Get Car Function
  useEffect(() => {
    getCarFun();
    const tapHandler = (e) => {
      if (!tapRef?.current?.contains(e.target)) {
        setDefaultCar(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  return (
    <div className="AddCar top-0 start-0 full-width flex-c" ref={contRef}>
      <div className="cont bg-white p-4 p-sm-5" ref={tapRef}>
        {/* Top */}
        <div className="top d-flex flex-column flex-lg-row align-items-center gap-5">
          <div className="text ">
            <h4 className="fs-24-700 text-phone">{trans("add_car.title")}</h4>
            <p className="fs-16-400 mt-3 text-phone text-color">
              {trans("add_car.desc")}
            </p>
          </div>
          <div className="shape">
            <Car />
          </div>
        </div>
        {/* Bottom */}
        <div className="bottom">
          <div className="end-name d-flex flex-column gap-2">
            <span className="label">{trans("add_car.lable")}</span>
            <DropdownsSingle setActive={setActive} carsOption={carsOption} loader={loader} />
          </div>
          <div className="buttons mt-4">
            <button
              disabled={!active}
              className={`${!active && "disabled"}`}
              onClick={() => {
                navigate(type);
              }}
            >
              {trans("add_car.button_save")}
            </button>
            <button
              className="mt-4 bg-transparent"
              onClick={() => {
                setDefaultCar(false);
                setOpenState(true);
              }}
            >
              {trans("add_car.button_add_car")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
