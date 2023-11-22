import React, { useState } from "react";
import "./MaintenanceWorkshop.css";
import { trans } from "../../Components/Navbar/Navbar";
import { ReactComponent as Map } from "./Assets/map.svg";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { useRecoilState, useRecoilValue } from "recoil";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";
import DropdownToAll from "../../Components/DropdownToAll/DropdownToAll";
import CountriesAndCites from "../../Components/CountriesAndCites/CountriesAndCites";
import Clarifications from "../../Components/Clarifications/Clarifications";
import EmptyPopup from "../../Components/EmptyPopup/EmptyPopup";
import DoneAdded from "./DoneAdded";
import { LoaderState } from "../../Recoil/All/Loader";
import SelectCar from "../../Components/SelectCarFromMyCars/SelectCar";

function MaintenanceWorkshop() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [errorValidation, setErrorValidation] = useState({});
  const [image, setImage1] = useState();
  const [commentes, setCommentes] = useState();
  // countries and cities
  const [countries, setCountries] = useState();
  const [citySelect, setCitySelect] = useState();
  const countriesAndCitiesObj = {
    errorValidation,
    setActive,
    countries,
    setCountries,
    citySelect,
    setCitySelect,
  };
  // countries and cities
  // Function Select Car servies
  const options = [
    { value: "1", label: trans("order_workshop.mechanical") },
    { value: "2", label: trans("order_workshop.electrical") },
    { value: "3", label: trans("order_workshop.plumber") },
  ];
  const [car, setCar] = useState();
  const typeServe = {
    setActive,
    carsOption: options,
    state: car,
    setState: setCar,
    placeholder: trans("order_workshop.chose_type_placeholder"),
  };
  // Function Select Car servies
  // Get Car Function
  const carsValue = useRecoilValue(CarsTypeState);
  // Get Car Function
  // Function Submit
  const formData = {
    users_car_id: carsValue?.id,
    lat: "30.068041265940835",
    long: "31.552700570802507",
    country_id: countries?.value,
    city_id: citySelect?.value,
    image,
    note: commentes,
    mechanical: car?.value === "1" ? 1 : 0,
    electrical: car?.value === "2" ? 1 : 0,
    plumber: car?.value === "3" ? 1 : 0,
  };
  const submit = async (e) => {
    e.preventDefault();
    setActive(true);
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/orders/maintenance-service/create`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setDone(true);
      setLoader(false);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(true);
      setLoader(false);
    }
  };
  return (
    <>
      {done && (
        <EmptyPopup flex=" 474px">
          <DoneAdded />
        </EmptyPopup>
      )}
      <div className="MaintenanceWorkshop py-5">
        <div className="container">
          <form className="width-90" onSubmit={submit}>
            <div className="head">
              <h3 className="fs-32-700">{trans("order_workshop.title")}</h3>
              <p className="mt-3">{trans("order_workshop.desc")}</p>
            </div>
            <div className="mt-5">
              <div className="row g-4">
                {/* Choose Car */}
                <div className="col-12 col-md-6">
                  <div className="d-flex flex-column gap-2">
                    <span className="span">
                      {trans("order_workshop.chose_car")}
                    </span>
                    <SelectCar setActive={setActive} />
                  </div>
                </div>
                {/* Choose Car */}
                <div className="col-12 col-md-6">
                  <div className="d-flex flex-column gap-2">
                    <span className="span">
                      {trans("order_workshop.chose_type")}
                    </span>
                    <DropdownToAll {...typeServe} />
                  </div>
                </div>
                {/* Choose Countries */}
                <CountriesAndCites {...countriesAndCitiesObj} />
                <div className="col-12">
                  <div className="d-flex flex-column gap-2">
                    <span className="span">
                      {trans("order_spare.location")}
                    </span>
                    <div className="d-flex align-items-center">
                      <input
                        readOnly={true}
                        defaultValue={"01254512sasdx14"}
                        name="locaion"
                        className="full-width p-3 border"
                        placeholder={trans("order_spare.location")}
                        type="text"
                      />
                      <div className="flex-c map-icon pointer">
                        <Map />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Commentes */}
                <div className="col-12">
                  <Clarifications
                    title={trans("order_spare.comments")}
                    placeholder={trans("order_spare.comments_placeholder")}
                    image={image}
                    setImage1={setImage1}
                    setCommentes={setCommentes}
                  />
                </div>
                {/* Submit */}
                <div className="col-12">
                  <button
                    disabled={!active}
                    className={`d-block mx-auto mx-sm-0 ${
                      !active && "disabled"
                    }`}
                    type="submit"
                  >
                    {trans("order_spare.button")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MaintenanceWorkshop;
