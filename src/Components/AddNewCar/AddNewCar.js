import React, { useEffect, useRef, useState } from "react";
import "./AddNewCar.css";
import { ReactComponent as Car } from "./Assets/car.svg";
import { ReactComponent as Camera } from "./Assets/camera.svg";
import { ReactComponent as Hent } from "./Assets/hent.svg";
import { trans } from "../Navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { doneAddCar, newCars } from "../../Recoil/AddCars/AddServesCars";
import GetYears from "../GetYears/GetYears";
import {
  brandsCarsFromApi,
  typesCarsFromApi,
} from "../../Recoil/All/GeneralData";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import DropdownToAll from "../DropdownToAll/DropdownToAll";
import { refreshDataGetCars } from "../../Pages/UserProfile/Pages/MyCars/GlopalStateRecoil/AllData";

function  AddNewCar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useRecoilState(newCars);
  const [doneAdd, setDonaAdd] = useRecoilState(doneAddCar);
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // Use Ref
  const tapRef = useRef();
  // Use Ref
  const [active, setActive] = useState(false);
  // Refresh Get Cars For User Profile Of My Cars Window
  const [refresh, setRefresh] = useRecoilState(refreshDataGetCars);
  // Get Genrate Years
  const [years, setYears] = useState([]);
  useEffect(() => {
    GetYears(setYears);
    const tapHandler = (e) => {
      if (!tapRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  // Get Genrate Years
  // States Data
  const brandsCarOption = useRecoilValue(brandsCarsFromApi);
  const [typesCarOption, setTypesCarOption] = useRecoilState(typesCarsFromApi);
  const [companyCar, setCompanyCar] = useState();
  const [typesCar, setTypesCar] = useState();
  const [modelYears, setModelYears] = useState();
  const [structerNum, setStructerNum] = useState("");
  // selectionComponent
  const selectionComponent = [
    {
      setActive,
      carsOption: brandsCarOption,
      state: companyCar,
      setState: setCompanyCar,
      placeholder: trans("order_spare.chose_car"),
      setTypesCarOption,
      type: "company_car",
    },
    {
      setActive,
      carsOption: typesCarOption,
      state: typesCar,
      setState: setTypesCar,
      placeholder: trans("add_new_car.type_car_placeholder"),
    },
    {
      setActive,
      carsOption: years,
      state: modelYears,
      setState: setModelYears,
      placeholder: trans("add_new_car.year_car_lable"),
    },
  ];

  // Function On Submit
  const formData = {
    brands_car_id: companyCar?.value,
    structure_num: structerNum,
    model_year: modelYears?.value,
    types_car_id: typesCar?.value,
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setActive(false);
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/cars/create`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setOpen(false);
      setDonaAdd(true);
      setRefresh(!refresh);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(true);
    }
  };
  return (
    <>
      <div className="AddNewCar top-0 start-0 full-width flex-c">
        <div className="cont bg-white p-4 p-md-5" ref={tapRef}>
          {/* Top */}
          <div className="top d-flex flex-column flex-lg-row align-items-center gap-4 gap-lg-5">
            <div className="text ">
              <h4 className="fs-24-700 text-phone">
                {trans("add_new_car.title")}
              </h4>
              <p className="fs-16-400 mt-3 text-phone text-color">
                {trans("add_car.desc")}
              </p>
            </div>
            <div className="shape d-sm-none d-lg-block">
              <Car />
            </div>
          </div>
          {/* Bottom */}
          <form
            onSubmit={onSubmit}
            className="bottom d-flex flex-column gap-2 gap-lg-4"
          >
            {/* Company Car */}
            <div className="d-flex flex-column gap-2">
              <span className="span">
                {trans("add_new_car.car_company_lable")}
              </span>
              <DropdownToAll {...selectionComponent[0]} />
            </div>
            {/* Row */}
            <div className=" d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-4">
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
            {/* Number */}
            <div className="number d-flex align-items-end gap-3 gap-lg-4">
              {/* number */}
              <div className="d-flex flex-column gap-2 full-width">
                <span className="span">{trans("add_new_car.number")}</span>
                <input
                  type="text"
                  placeholder={trans("add_new_car.number_placeholder")}
                  className="border r-07 p-2 p-md-3"
                  onChange={(e) => {
                    setStructerNum(e.target.value);
                  }}
                />
              </div>
              {/* photo */}
              <div className="photo flex-c">
                <Camera />
              </div>
            </div>
            {/* Hent */}
            <div className="hent d-flex align-items-center gap-2">
              <span>
                <Hent />
              </span>
              <p>{trans("add_new_car.hent")}</p>
            </div>
            <div className="buttons">
              <button
                type="submit"
                disabled={!active}
                className={`${!active && "disabled"}`}
              >
                {trans("add_car.button_save")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewCar;
