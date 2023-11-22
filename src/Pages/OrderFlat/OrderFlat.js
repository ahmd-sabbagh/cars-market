import React, { useState } from "react";
import "./OrderFlat.css";
import { ReactComponent as MapIcon } from "./Assets/map.svg";
import { trans } from "../../Components/Navbar/Navbar";
import MapComponent from "./Map";
import ChooseCar from "./ChooseCar";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  brandsCarsFromApi,
  typesCarsFromApi,
} from "../../Recoil/All/GeneralData";
import GetYears from "../../Components/GetYears/GetYears";
import CountriesAndCites from "../../Components/CountriesAndCites/CountriesAndCites";
import Clarifications from "../../Components/Clarifications/Clarifications";
import { LoaderState } from "../../Recoil/All/Loader";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";
import EmptyPopup from "../../Components/EmptyPopup/EmptyPopup";
import DoneAdded from "../MaintenanceWorkshop/DoneAdded";
import { generateYears } from "../../Recoil/All/GenerateYears";

function OrderFlat() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const years = useRecoilValue(generateYears);
  const [active, setActive] = useState(false);
  const [errorValidation, setErrorValidation] = useState({});
  // Comments
  const [image, setImage1] = useState();
  const [commentes, setCommentes] = useState();
  // States Data
  const brandsCarOption = useRecoilValue(brandsCarsFromApi);
  const [typesCarOption, setTypesCarOption] = useRecoilState(typesCarsFromApi);
  const [companyCar, setCompanyCar] = useState();
  const [typesCar, setTypesCar] = useState();
  const [modelYears, setModelYears] = useState();
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
  // selectionComponent
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
  // Marker Maps
  const [onClickType, setOnClickType] = useState("");
  const [zoom, setZoom] = useState(5);
  const [crrently, setCurrently] = useState({
    lat: 0,
    lng: 0,
  });
  const [interfaceLocation, setInterfaceLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const MarkerData = {
    crrently,
    setCurrently,
    interfaceLocation,
    setInterfaceLocation,
    onClickType,
  };
  // Marker Maps
  const [done, setDone] = useState(false);
  const [loader, setLoader] = useRecoilState(LoaderState);
  const carsValue = useRecoilValue(CarsTypeState);
  // Fuction Submit
  const formData = {
    from_lat: crrently.lat,
    to_lat: interfaceLocation.lat,
    from_long: crrently.lng,
    to_long: interfaceLocation.lng,

    note: commentes,
    image: image,

    types_car_id: typesCar?.value,
    brands_car_id: companyCar ? companyCar?.value : carsValue?.id,
    model_year: modelYears?.value,

    country_id: countries?.value,
    city_id: citySelect?.value,
  };
  const submit = async (e) => {
    e.preventDefault();
    setActive(true);
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/orders/flatness/create`,
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
  // Fuction Submit
  return (
    <>
      {done && (
        <EmptyPopup flex=" 474px">
          <DoneAdded />
        </EmptyPopup>
      )}
      <div className="OrderFlat">
        <div className="container">
          <form onSubmit={submit}>
            <div className="row g-4 g-lg-0">
              <div className="col-12 col-lg-8">
                <div className="order-flat pt-5 pb-0 pb-lg-5">
                  {/* Head */}
                  <div className="head">
                    <h3 className="fs-24-700">{trans("car_holder.title")}</h3>
                    <p className="mt-3">{trans("car_holder.desc")}</p>
                  </div>
                  {/* ChooseCar */}
                  <ChooseCar
                    setActive={setActive}
                    selectionComponent={selectionComponent}
                  />
                  {/* ChooseCar */}
                  {/* Location Maps */}
                  <div className="select-location mt-4">
                    {/* current */}
                    <span className="span">{trans("car_holder.location")}</span>
                    <div
                      className={`current-location pointer mt-12 mb-4 border r-07 p-3 d-flex justify-content-between ${
                        crrently.lat > 0 && "done"
                      }`}
                      onClick={() => {
                        setOnClickType("current");
                        setZoom(8);
                      }}
                    >
                      <div className="fs-14-400 map-text">
                        {crrently.lat > 0
                          ? trans("car_holder.current_done")
                          : trans("car_holder.location_placeholder")}
                      </div>
                      <div className="icon">
                        <MapIcon />
                      </div>
                    </div>
                    <span className="span">
                      {trans("car_holder.interface")}
                    </span>
                    {/* InterFace */}
                    <div
                      className={`current-location pointer mt-12 border r-07 p-3 d-flex justify-content-between ${
                        interfaceLocation.lat > 0 && "done"
                      }`}
                      onClick={() => {
                        setOnClickType("interface");
                        setZoom(4);
                      }}
                    >
                      <div className="fs-14-400 map-text">
                        {interfaceLocation.lat > 0
                          ? trans("car_holder.interface_done")
                          : trans("car_holder.interface_placeholder")}
                      </div>
                      <div className="icon">
                        <MapIcon />
                      </div>
                    </div>
                  </div>
                  {/* Location Maps */}
                  {/* Choose Countries */}
                  <div className="mt-4">
                    <div className="row g-4">
                      <CountriesAndCites {...countriesAndCitiesObj} />
                    </div>
                  </div>
                  {/* Clarifications */}
                  <div className="mt-4">
                    <Clarifications
                      image={image}
                      setImage1={setImage1}
                      setCommentes={setCommentes}
                    />
                  </div>
                  {/* Submit */}
                  <button
                    className="btn-blue mt-4 mx-auto mx-lg-0 d-block"
                    type="submit"
                  >
                    {trans("car_holder.button")}
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="map box-sh">
                  <MapComponent {...MarkerData} zoom={zoom} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderFlat;
