import React, { useState } from "react";
import "./Details.css";
import { trans } from "../../../../Components/Navbar/Navbar";
import InputSelect from "../InputSelect/InputSelect";
import InputData from "../InputData/InputData";
import CheckRight from "../../../../Components/CheckRight/CheckRight";
// import JoditEditorComponent from "../JoditEditor/JoditEditor";
import CountriesAndCites from "../../../../Components/CountriesAndCites/CountriesAndCites";
import ChooseCarAndSelectType from "../../../../Components/ChooseCarAndSelectType/ChooseCarAndSelectType";
import { useRecoilState, useRecoilValue } from "recoil";
import { generateYears } from "../../../../Recoil/All/GenerateYears";
import ChooseType from "../../../CarsMarket/Components/Filter/ChooseType/ChooseType";
import Clarifications from "../../../../Components/Clarifications/Clarifications";
import EmptyPopup from "../../../../Components/EmptyPopup/EmptyPopup";
import DoneAdded from "../../../../Components/DoneAdded/DoneAdded";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";
import { LoaderState } from "../../../../Recoil/All/Loader";
import { useNavigate } from "react-router-dom";

function Deatails({ imageMain }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [errorValidation, setErrorValidation] = useState({});
  const [active, setActive] = useState(false);
  const years = useRecoilValue(generateYears);
  const [loader, setLoader] = useRecoilState(LoaderState);
  // Model
  const [model, setModel] = useState();
  function modelHandler(data) {
    setModel(data);
  }
  // Model Years
  const modelObj = {
    label: trans("add_ads_car.model"),
    options: years,
    value: model,
    placeholder: trans("add_ads_car.model_placeholder"),
    onChange: modelHandler,
  };
  // States
  const [title, setTitle] = useState("");
  const [quantity_km, setQuantity_km] = useState("");
  const [price, setPrice] = useState("");
  const [hide, setHide] = useState(false);
  const [image, setImage] = useState();
  const [commentes, setCommentes] = useState();
  const [typeFuelOp, setTypeFuelOp] = useState([]);
  const [motionVectorOp, setMotionVectorpOp] = useState([]);
  // States
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
  // Car Brand
  const [carBrand, setCarBrand] = useState();
  const [carSelect, setCarSelect] = useState();
  const carBrandAndCarName = {
    errorValidation,
    setActive,
    carBrand,
    setCarBrand,
    carSelect,
    setCarSelect,
  };
  // Car Brand

  // Function Submit
  const formData = {
    image_main: imageMain,
    title,
    country_id: countries?.value,
    city_id: citySelect?.value,
    brands_car_id: carBrand?.value,
    types_car_id: carSelect?.value,
    model_year: model?.value,
    quantity_km,
    details: commentes,
    price,
    is_hide_mobile: hide ? "1" : "0",
    fuel_type: typeFuelOp,
    gearbox: motionVectorOp,
  };
  const submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/ads/my-ads/create`,
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
      setLoader(false);
      ErrorComponent(error, navigate, setErrorValidation);
    }
  };
  return (
    <>
      {done && (
        <EmptyPopup flex=" 474px">
          <DoneAdded
            link1Text={trans("add_ads_car.route_nav.harag")}
            link1To="/cars-market"
            link2Text={trans("home.nav.menu.ads")}
            link2To="/my-Profile/my-ads"
          />
        </EmptyPopup>
      )}
      <form
        onSubmit={submit}
        className="Deatails d-flex flex-column gap-3 gap-lg-4"
      >
        {/* Aress */}
        <div className="adress">
          <InputData
            label={trans("add_ads_car.add_adress")}
            placeholder={trans("add_ads_car.adress_placeholder")}
            setState={setTitle}
          />
          <p className="mt-3">{trans("add_ads_car.adress_disc")}</p>
        </div>
        {/* Selections */}
        <div className="row g-3 g-lg-4">
          {/* country and city */}
          <CountriesAndCites {...countriesAndCitiesObj} />
          {/* Car Brand */}
          <ChooseCarAndSelectType {...carBrandAndCarName} />
          <div className="col-12">
            <InputSelect {...modelObj} />
          </div>
        </div>
        {/* Counter Killo */}
        <InputData
          label={trans("add_ads_car.counter")}
          placeholder={trans("add_ads_car.counter_placeholder")}
          type="number"
          setState={setQuantity_km}
        />
        {/* Price */}
        <InputData
          label={trans("add_ads_car.price")}
          placeholder={trans("add_ads_car.price_placeholder")}
          type="number"
          setState={setPrice}
        />
        {/* Check Right */}
        <CheckRight
          state={hide}
          setState={setHide}
          text={trans("add_ads_car.hide")}
        />
        {/* Car Details */}
        <Clarifications
          title={trans("add_ads_car.car_details")}
          placeholder={trans("add_ads_car.car_details_placeholder")}
          image={image}
          setImage1={setImage}
          setCommentes={setCommentes}
        />
        {/* <div className="input-data">
        <span>{trans("add_ads_car.car_details")}</span>
        <textarea
          placeholder={trans("add_ads_car.car_details_placeholder")}
          rows="6"
        ></textarea>
      </div> */}
        {/* typeFuelOp */}
        <ChooseType
          name={trans("cars_market.filter.fuel")}
          data={typeFuel}
          state={typeFuelOp}
          setState={setTypeFuelOp}
          type="radio"
          namedif="fuel"
        />
        {/* motionVectorOp */}
        <ChooseType
          name={trans("cars_market.filter.motion")}
          data={motionVector}
          state={motionVectorOp}
          setState={setMotionVectorpOp}
          type="radio"
          namedif="motion"
        />
        {/* <JoditEditorComponent /> */}
        {/* Btn Submit */}
        <button type="submit" className="btn-blue full-width">
          {trans("add_ads_car.send")}
        </button>
      </form>
    </>
  );
}

export default Deatails;
