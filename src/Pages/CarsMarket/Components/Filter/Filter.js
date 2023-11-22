import React, { useState } from "react";
import "./Filter.css";
import SavedFliter from "./SavedFliter";
import { trans } from "../../../../Components/Navbar/Navbar";
import FilterScrollComponent from "./FilterScrollComponent/FilterScrollComponent";
import { ReactComponent as SaveMark } from "../Body/Assets/bookmark.svg";
import ChooseType from "./ChooseType/ChooseType";
import Range from "./Range/Range";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  brandsCarsFromApi,
  repeatCountries,
} from "../../../../Recoil/All/GeneralData";
import {
  filterCities,
  filterSavedData,
  filterTypesCars,
  haragMainData,
  marketExistStatus,
} from "./GlopalStateRecoil/AllData";
import { generateYears } from "../../../../Recoil/All/GenerateYears";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";
import { LoaderState } from "../../../../Recoil/All/Loader";

function Filter() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [data, setData] = useRecoilState(haragMainData);
  const [savedFilterData, setSavedFilterData] = useRecoilState(filterSavedData);
  const [exist, setExist] = useRecoilState(marketExistStatus);
  // state change
  const [companyCar, setCompanyCar] = useState([]);
  const [car, setCare] = useState([]);
  const [modelYears, setModelYears] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [valuePrice, setValue] = useState({ min: null, max: null });
  const [valueKillo, setValueKillo] = useState({ min: null, max: null });
  const [typeFuelOp, setTypeFuelOp] = useState([]);
  const [motionVectorOp, setMotionVectorpOp] = useState([]);
  // state change
  // Satates Data
  const brandsCarOption = useRecoilValue(brandsCarsFromApi);
  const typeCars = useRecoilValue(filterTypesCars);
  const years = useRecoilValue(generateYears);
  const countriesState = useRecoilValue(repeatCountries);
  const cities = useRecoilValue(filterCities); 
  // Satates Data
  // typeFuel
  const typeFuel = [
    { name: "diesel", view: trans("cars_market.filter.type_fuel.diesel") },
    { name: "hybrid", view: trans("cars_market.filter.type_fuel.hybrid") },
    {
      name: "electricity",
      view: trans("cars_market.filter.type_fuel.electricity"),
    },
    { name: "petrol", view: trans("cars_market.filter.type_fuel.petrol") },
  ];
  // motionVector
  const motionVector = [
    {
      name: "automatic",
      view: trans("cars_market.filter.motion_vector.automatic"),
    },
    {
      name: "normal",
      view: trans("cars_market.filter.motion_vector.manual_normal"),
    },
  ];
  // Range price Object
  const rangePrise = {
    min: 0,
    max: 100000,
    setValue,
    textType: "ر.س",
    title: trans("cars_market.filter.price"),
    defaultValue: [50000, 90000],
  };
  // Range Object
  const rangeKillo = {
    min: 10000,
    max: 100000,
    setValue: setValueKillo,
    textType: "",
    title: trans("cars_market.filter.killo"),
    defaultValue: [20000, 50000],
  };
  // state
  const formData = {
    name: "",
    brands_ids: companyCar,
    types_ids: car,
    models_years: modelYears,
    countries: country,
    cities: city,
    min_price: valuePrice.min,
    max_price: valuePrice.max,
    min_km: valueKillo.min,
    max_km: valueKillo.max,

    gearbox: motionVectorOp,

    fuel_type: typeFuelOp,
    is_web: true,
  };
  // Function onSubmit
  const onsubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(`${basedDomin}/shop/ads`, formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.data.data);
      setLoader(false);
      if (data.data.data.length === 0) {
        setExist(false);
      } else {
        setExist(true);
      }
    } catch (error) {
      ErrorComponent(error, navigate);
      setLoader(false);
    }
  };
  // Save Filter Submit
  const filterSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/filters/create`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSavedFilterData(data.data);
      SuccsesComponent(data.message);
      setLoader(false);
    } catch (error) {
      ErrorComponent(error, navigate);
      setLoader(false);
    }
  };
  return (
    <div className="Filter bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>{trans("cars_market.filter.filter")}</h4>
        <form onSubmit={onsubmit}>
          <button
            type="submit"
            className="confirm border-0 bg-green text-white flex-c"
          >
            {trans("cars_market.filter.confirm")}
          </button>
        </form>
      </div>
      <SavedFliter />
      <div className="save-filter d-flex justify-content-between align-align-items-center pt-3 pointer">
        <span className="fs-16-600 text-green">
          {trans("cars_market.filter.new_filter")}
        </span>
        <form onSubmit={filterSubmit}>
          <button
            type="submit"
            className="icon SaveMark border-0 bg-transparent"
          >
            <SaveMark />
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
        name={trans("cars_market.filter.manufacturing_year")}
        state={modelYears}
        setState={setModelYears}
        data={years}
      />
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

      <div className="RangeContainer">
        <Range {...rangePrise} />
        <Range {...rangeKillo} />
      </div>
      <ChooseType
        name={trans("cars_market.filter.fuel")}
        data={typeFuel}
        state={typeFuelOp}
        setState={setTypeFuelOp}
      />
      <ChooseType
        name={trans("cars_market.filter.motion")}
        data={motionVector}
        state={motionVectorOp}
        setState={setMotionVectorpOp}
      />
    </div>
  );
}

export default Filter;
