import React, { useState } from "react";
import "./Filter.css";
import { useRecoilValue } from "recoil";
import {
  citiesFilterOrderVendor,
  openFilterOrderVendor,
  typeCarsFilterOrderVendor,
} from "../../../GlopalStateRecoil/AllData";
import { trans } from "../../../../../Components/Navbar/Navbar";
import FilterScrollComponent from "./FilterScrollComponent/FilterScrollComponent";
import {
  brandsCarsFromApi,
  repeatCountries,
} from "../../../../../Recoil/All/GeneralData";
import { generateYears } from "../../../../../Recoil/All/GenerateYears";

function Filter() {
  const menuFilterIcon = useRecoilValue(openFilterOrderVendor);
  // state change
  const [companyCar, setCompanyCar] = useState([]);
  const [car, setCare] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [modelYears, setModelYears] = useState([]);
  // state change
  // Satates Data
  const brandsCarOption = useRecoilValue(brandsCarsFromApi);
  const typeCars = useRecoilValue(typeCarsFilterOrderVendor);
  const countriesState = useRecoilValue(repeatCountries);
  const cities = useRecoilValue(citiesFilterOrderVendor);
  const years = useRecoilValue(generateYears);
  // Function OnSubmit
  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="FilterVendor box-sh overflow-hidden bg-white"
      style={
        menuFilterIcon
          ? { width: "250px"}
          : { width: "0px" }
      }
    >
      <div className="p-3 window-scroll">
        <div
          className="d-flex justify-content-between align-items-center mb-4"
          style={{ width: "218px" }}
        >
          <h4>{trans("cars_market.filter.filter")}</h4>
          <form onSubmit={onsubmit}>
            <button
              type="submit"
              className="confirm-filter border-0 bg-green text-white flex-c"
            >
              {trans("cars_market.filter.confirm")}
            </button>
          </form>
        </div>
        <FilterScrollComponent
          name={trans("cars_market.filter.company")}
          state={companyCar}
          setState={setCompanyCar}
          data={brandsCarOption}
          radio={true}
          radioType="company-car"
          setOption={setCare}
        />
        {typeCars.length > 0 && (
          <FilterScrollComponent
            name={trans("cars_market.filter.car")}
            state={car}
            setState={setCare}
            data={typeCars}
          />
        )}
        <FilterScrollComponent
          name={trans("cars_market.filter.region")}
          state={country}
          setState={setCountry}
          data={countriesState}
          radio={true}
          radioType="region"
          setOption={setCity}
        />
        {cities.length > 0 && (
          <FilterScrollComponent
            name={trans("cars_market.filter.city")}
            state={city}
            setState={setCity}
            data={cities}
          />
        )}
        <FilterScrollComponent
          name={trans("cars_market.filter.manufacturing_year")}
          state={modelYears}
          setState={setModelYears}
          data={years}
        />
      </div>
    </div>
  );
}

export default Filter;
