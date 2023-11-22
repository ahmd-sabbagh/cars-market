import React, { useState } from "react";
import { trans } from "../Navbar/Navbar";
import ReactSelect from "react-select";
import { colorStyles } from "../../Others/ColorStyleReactSlick";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { apiHeaders, basedDomin } from "../../Api/basedDomin";
import { brandsCarsFromApi } from "../../Recoil/All/GeneralData";
import { ErrorComponent } from "../../Others/Error";
import { useNavigate } from "react-router-dom";

function ChooseCarAndSelectType({
  errorValidation,
  setActive,
  carBrand,
  setCarBrand,
  carSelect,
  setCarSelect,
}) {
  const navigate = useNavigate();
  // State of City
  function selectCar(data) {
    setCarSelect(data);
  }
  // State of City
  // State of countries
  const carsBrand = useRecoilValue(brandsCarsFromApi);
  const [cars, setCars] = useState();
  function selectCarBrand(data) {
    setCarBrand(data);
    setCarSelect();
    setCars([]);
    setActive(true);
    axios
      .get(`${basedDomin}/public/data/types-car/${data.value}`, apiHeaders)
      .then(({ data }) => {
        setCars(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  }
  // State of countries
  return (
    <>
      <div className="col-12 col-md-6">
        <span className="span d-block mb-2">
          {trans("add_ads_car.company_car")}
        </span>
        <ReactSelect
          options={carsBrand}
          value={carBrand}
          placeholder={trans("add_ads_car.company_car")}
          isSearchable={true}
          onChange={selectCarBrand}
          styles={colorStyles}
        />
        {errorValidation.hasOwnProperty("country_id") && (
          <span className="text-error fs-14-400">
            {errorValidation.country_id[0]}
          </span>
        )}
      </div>
      <div className="col-12 col-md-6">
        <span className="span d-block mb-2">
          {trans("add_ads_car.car")}
        </span>
        <ReactSelect
          options={cars}
          value={carSelect}
          placeholder={trans("add_ads_car.car_placeholder")}
          isSearchable={true}
          onChange={selectCar}
          styles={colorStyles}
        />
        {errorValidation.hasOwnProperty("country_id") && (
          <span className="text-error fs-14-400">
            {errorValidation.country_id[0]}
          </span>
        )}
      </div>
    </>
  );
}

export default ChooseCarAndSelectType;
