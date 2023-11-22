import React, { useEffect, useState } from "react";
import "./RegisterData.css";
import { trans } from "../../../Components/Navbar/Navbar";
import ReactSelect from "react-select";
import { colorStyles } from "../../../Others/ColorStyleReactSlick";
import UploadImage from "./Components/UploadImage";
import InputData from "../Components/InputData/InputData";
import CountriesAndCites from "../../../Components/CountriesAndCites/CountriesAndCites";
import { ReactComponent as Map } from "./Assets/map.svg";
import SelectLocationFromMap from "../../../Components/SelectLocationFromMap/SelectLocationFromMap";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { vendorMainLoader } from "../GlopalStateRecoil/AllData";
import axios from "axios";
import { basedDomin } from "../../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../../Others/Error";

function RegisterData() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [viewMap, setViewMap] = useState(false);
  const [loader, setLoader] = useRecoilState(vendorMainLoader);
  // State
  const [active, setActive] = useState(false);
  const [errorValidation, setErrorValidation] = useState({});
  const [image, setImage] = useState("");
  const [nameMarket, setNameMarket] = useState("");
  const [streetName, setStreetName] = useState("");
  const [countries, setCountries] = useState([]);
  const [citySelect, setCitySelect] = useState([]);
  const citiesArray = Array.isArray(citySelect)
    ? citySelect.map((item) => item.value)
    : [citySelect?.value];
  const [marketDesc, setMarketDesc] = useState("");
  // State
  // Name Market
  const nameMarketObj = {
    title: trans("vendor.register.name_market"),
    placeholder: trans("vendor.register.name_market_write"),
    state: nameMarket,
    setState: setNameMarket,
  };
  // Name Market
  // Street Name
  const streetNameObj = {
    title: trans("vendor.register.street_name"),
    placeholder: trans("vendor.register.street_place"),
    state: streetName,
    setState: setStreetName,
  };
  // Street Name
  // Type Serves
  const [typeServes, setTypeServes] = useState();
  const typeServesOption = [
    {
      label: trans("home.order.spare"),
      value: "spare_parts",
    },
    {
      label: trans("home.order.maintenance"),
      value: "maintenance_services",
    },
    {
      label: trans("home.order.flatness"),
      value: "flatness",
    },
  ];
  const selectTypeServes = (data) => {
    setTypeServes(data);
  };
  // Type Serves
  // Type Workshop
  const [typeWorkshope, setWorkshop] = useState();
  const typeWorkshopOptions = [
    {
      label: trans("order_workshop.mechanical"),
      value: "mechanical",
    },
    {
      label: trans("order_workshop.electrical"),
      value: "electrical",
    },
    {
      label: trans("order_workshop.plumber"),
      value: "plumber",
    },
  ];
  const selectTypeWorkshop = (data) => {
    setWorkshop(data);
  };
  // Type Workshop
  // Type Btn
  const [newSpare, setNewSpare] = useState(false);
  const [oldSpare, setOldSpare] = useState(false);
  // Type Btn
  // Countries And Cityes
  const adressObj = {
    errorValidation,
    setActive,
    countries,
    setCountries,
    citySelect,
    setCitySelect,
    multi: typeServes?.value === "flatness" ? true : false,
  };
  // Countries And Cityes
  // Location
  const [crrently, setCurrently] = useState({
    lat: 0,
    lng: 0,
  });
  const mapLocation = {
    crrently,
    setCurrently,
  };
  //
  // Function Submit
  const formData = {
    service_type: typeServes?.value,
    lat: crrently.lat,
    long: crrently.lng,
    shop_image: image,
    shop_name: nameMarket,
    import_spare_parts: oldSpare ? "1" : "0",
    new_spare_parts: newSpare ? "1" : "0",
    country_id: countries?.value,
    cities: citiesArray,
    maintenance_services_type: typeWorkshope?.value,
    street_name: streetName,
    shop_details: marketDesc,
  };
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post(
        `${basedDomin}/vendor/register-data`,
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
      setLoader(false);
      console.log(data);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(false);
      setLoader(false);
    }
  };
  // Function Submit
  useEffect(() => {
    setCitySelect([]);
  }, [typeServes]);
  return (
    <>
      {viewMap && (
        <SelectLocationFromMap
          setViewMap={setViewMap}
          mapLocation={mapLocation}
        />
      )}
      <div className="RegisterData mt-4 mt-md-5 pb-4 pb-md-5">
        <div className="container">
          <h3 className="fs-24-700 mb-4">{trans("vendor.register.title")}</h3>
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <form onSubmit={submit} className="d-flex flex-column gap-4">
                {/* Type Serves */}
                <div className="d-flex flex-column gap-12">
                  <span className="span">
                    {trans("vendor.register.servece_title")}
                  </span>
                  <ReactSelect
                    options={typeServesOption}
                    value={typeServes}
                    placeholder={trans("vendor.register.servece_place")}
                    isSearchable={true}
                    onChange={selectTypeServes}
                    styles={colorStyles}
                  />
                </div>
                {/* CheckBox */}
                {typeServes?.value === "spare_parts" && (
                  <div className="d-flex flex-column gap-12">
                    <span className="span">
                      {trans("vendor.register.market_atvity")}
                    </span>
                    <div className="checkboxes-register d-flex gap-3">
                      {/* New */}
                      <label className={`pointer`}>
                        <input
                          type="checkbox"
                          className="d-none"
                          checked={newSpare}
                          onChange={(e) => {
                            setNewSpare(!newSpare);
                          }}
                        />
                        {trans("home.order.spare")}
                      </label>
                      {/* Old */}
                      <label className={`pointer`}>
                        <input
                          type="checkbox"
                          className="d-none"
                          checked={oldSpare}
                          onChange={(e) => {
                            setOldSpare(!oldSpare);
                          }}
                        />
                        {trans("vendor.register.old")}
                      </label>
                    </div>
                  </div>
                )}
                {/* If Type Serves Be Workshop */}
                {typeServes?.value === "maintenance_services" && (
                  <div className="d-flex flex-column gap-12">
                    <span className="span">
                      {trans("vendor.register.workshop_type")}
                    </span>
                    <ReactSelect
                      options={typeWorkshopOptions}
                      value={typeWorkshope}
                      placeholder={trans("vendor.register.workshop_type")}
                      isSearchable={true}
                      onChange={selectTypeWorkshop}
                      styles={colorStyles}
                    />
                  </div>
                )}
                {typeServes?.value !== "flatness" && (
                  <>
                    {/* Upload Image */}
                    <UploadImage
                      title={trans("vendor.register.market_image")}
                      image={image}
                      setImage={setImage}
                      errorValidation={errorValidation}
                    />
                    {/* Name Market */}
                    <InputData {...nameMarketObj} />
                    {/* Street Name */}
                    <InputData {...streetNameObj} />
                  </>
                )}
                {/* Adress */}
                <div className="row g-4">
                  <CountriesAndCites {...adressObj} />
                </div>
                {/* Location Map */}
                <div
                  className={`d-flex flex-column gap-12 ${
                    crrently.lat > 0 && "done-map"
                  }`}
                >
                  <span className="span">
                    {trans("vendor.register.location")}
                  </span>
                  <div className="d-flex gap-3 gap-md-4">
                    <div
                      className="fs-12-400 bg r-10 flex-grow-1 p-3 text"
                      style={{ color: "#acacac" }}
                    >
                      {crrently.lat > 0
                        ? trans("car_holder.current_done")
                        : trans("vendor.register.location_place")}
                    </div>
                    <div
                      className={`icon p-3 px-md-4 bg r-10 pointer`}
                      onClick={() => {
                        setViewMap(true);
                      }}
                    >
                      <Map />
                    </div>
                  </div>
                </div>
                {/* Market Description */}
                {typeServes?.value !== "flatness" && (
                  <div className="d-flex flex-column gap-12">
                    <span className="span">
                      {trans("vendor.register.market_desc")}
                    </span>
                    <textarea
                      defaultValue={marketDesc}
                      className="bg border-0 r-10 p-3"
                      cols="30"
                      rows="5"
                      placeholder={trans("vendor.register.write_here")}
                      onChange={(e) => {
                        setMarketDesc(e.target.value);
                      }}
                    ></textarea>
                  </div>
                )}
                {/* Submit */}
                <button
                  className="btn-blue"
                  type="submit"
                  style={{ maxWidth: "300px" }}
                >
                  {trans("vendor.register.start_now")}
                </button>
              </form>
            </div>
            <div className="col-12 col-lg-4 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterData;
