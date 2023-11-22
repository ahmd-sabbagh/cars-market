import React, { useState } from "react";
import { trans } from "../Navbar/Navbar";
import ReactSelect from "react-select";
import { colorStyles } from "../../Others/ColorStyleReactSlick";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { apiHeaders, basedDomin } from "../../Api/basedDomin";
import { repeatCountries } from "../../Recoil/All/GeneralData";
import { ErrorComponent } from "../../Others/Error";
import { useNavigate } from "react-router-dom";

function CountriesAndCites({
  errorValidation,
  setActive,
  countries,
  setCountries,
  citySelect,
  setCitySelect,
  multi = false,
}) {
  const navigate = useNavigate();
  // State of City
  function selectCity(data) {
    setCitySelect(data);
  }
  // State of City
  // State of countries
  const countriesState = useRecoilValue(repeatCountries);
  const [cityes, setCityes] = useState();
  function selectCountries(data) {
    setCountries(data);
    setCitySelect([]);
    setCityes([]);
    setActive(true);
    axios
      .get(`${basedDomin}/public/data/cities/${data.value}`, apiHeaders)
      .then(({ data }) => {
        setCityes(data.data);
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
          {trans("order_spare.country")}
        </span>
        <ReactSelect
          options={countriesState}
          value={countries}
          placeholder={trans("order_spare.country")}
          isSearchable={true}
          onChange={selectCountries}
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
          {trans("order_spare.province")}
        </span>
        <ReactSelect
          options={cityes}
          value={citySelect}
          placeholder={trans("order_spare.province")}
          isSearchable={true}
          onChange={selectCity}
          styles={colorStyles}
          isMulti={multi}
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

export default CountriesAndCites;
