import React, { useState } from "react";
import "./OrderSpare.css";
import { trans } from "../../Components/Navbar/Navbar";
import { ReactComponent as Upload } from "./Assets/cloud-upload.svg";
import { ReactComponent as Plus } from "./Assets/plus.svg";
import { ReactComponent as Map } from "./Assets/map.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";
import axios from "axios";
import { apiHeaders, basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import ReactSelect from "react-select";
import { repeatCountries } from "../../Recoil/All/GeneralData";
import { colorStyles } from "../../Others/ColorStyleReactSlick";
import Popup from "./Popup";
import { LoaderState } from "../../Recoil/All/Loader";
import SelectCar from "../../Components/SelectCarFromMyCars/SelectCar";
import SelectLocationFromMap from "../../Components/SelectLocationFromMap/SelectLocationFromMap";

function OrderSpare() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  // Car value from add car popup
  const carValue = useRecoilValue(CarsTypeState);
  // Car value from add car popup
  const [shops, setShops] = useState(false);
  const [imports, setImports] = useState(false);
  const [active, setActive] = useState(true);
  const [returnData, setReturnData] = useState();
  const [doneData, setDoneData] = useState(false);
  const [viewMap, setViewMap] = useState(false);
  const [loader, setLoader] = useRecoilState(LoaderState);
  // Location
  const [crrently, setCurrently] = useState({
    lat: 0,
    lng: 0,
  });
  const mapLocation = {
    crrently,
    setCurrently,
  };
  // Form Value
  const [formValues, setFormValues] = useState([
    {
      name: "",
      industry: "",
      count: "",
      image: "",
      note: "",
    },
  ]);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    try {
      newFormValues[i][e.target.name] =
        e.target.name === "image"
          ? e.target.files[0]
          : JSON.parse(e.target.value);
    } catch (error) {
      newFormValues[i][e.target.name] = e.target.value;
    }
    setFormValues(newFormValues);
  };
  // Add Form Value
  const addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        name: "",
        industry: "",
        count: "",
        image: "",
        note: "",
      },
    ]);
  };
  // Remove Form Value
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  // State of City
  const [citySelect, setCitySelect] = useState();
  function selectCity(data) {
    setCitySelect(data);
  }
  // State of City
  // State of countries
  const countriesState = useRecoilValue(repeatCountries);
  const [cityes, setCityes] = useState();
  const [countries, setCountries] = useState();
  function selectCountries(data) {
    setCountries(data);
    setCitySelect(null);
    setCityes([]);
    setActive(false);
    axios
      .get(`${basedDomin}/public/data/cities/${data.value}`, apiHeaders)
      .then(({ data }) => {
        setCityes(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // State of countries
  // Function Submit
  const formData = {
    users_car_id: carValue?.id,
    lat: crrently.lat,
    long: crrently.lng,
    country_id: countries?.value,
    city_id: citySelect?.value,
    parts: formValues,
    import_spare_parts: imports ? "1" : "0",
    new_spare_parts: shops ? "1" : "0",
  };
  const submit = async (e) => {
    e.preventDefault();
    setActive(true);
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/orders/parts/create`,
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
      setReturnData(data.data.details);
      setDoneData(true);
      setLoader(false);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(false);
      setLoader(false);
    }
  };
  return (
    <>
      {doneData && <Popup returnData={returnData} />}
      {viewMap && (
        <SelectLocationFromMap
          setViewMap={setViewMap}
          mapLocation={mapLocation}
        />
      )}
      <div className="OrderSpare py-5">
        <div className="container">
          <form className="width-90" onSubmit={submit}>
            <div className="head mb-5">
              <h3 className="fs-32-700">{trans("order_spare.title")}</h3>
              <p className="mt-3">{trans("order_spare.desc")}</p>
            </div>
            {/* General Info */}
            <div className="row g-4">
              <div className="col-12">
                <div className="d-flex flex-column gap-2">
                  <span className="span">
                    {trans("order_workshop.chose_car")}
                  </span>
                  <SelectCar setActive={setActive} />
                </div>
              </div>
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
                />
                {errorValidation.hasOwnProperty("country_id") && (
                  <span className="text-error fs-14-400">
                    {errorValidation.country_id[0]}
                  </span>
                )}
              </div>
              <div className="col-12">
                <div className="d-flex flex-column gap-2">
                  <span className="span">{trans("order_spare.location")}</span>
                  <div
                    className={`d-flex align-items-center ${
                      crrently.lat > 0 && "done"
                    }`}
                  >
                    <input
                      readOnly={true}
                      defaultValue={""}
                      name="locaion"
                      className="full-width p-3 border"
                      placeholder={
                        crrently.lat > 0
                          ? trans("car_holder.current_done")
                          : trans("car_holder.location_placeholder")
                      }
                      type="text"
                    />
                    <div
                      className={`flex-c map-icon pointer`}
                      onClick={() => {
                        setViewMap(true);
                      }}
                    >
                      <Map />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat Component */}
            {formValues.map((element, index) => (
              <div className="body mt-4" key={index}>
                {index >= 1 && (
                  <div className="text-center mb-4 text-green fs-24-700 d-flex align-items-center">
                    <span className="line"></span>
                    <span
                      className="d-block"
                      style={{ minWidth: "150px" }}
                    >{`القطعة (${index + 1})`}</span>
                    <span className="line"></span>
                  </div>
                )}
                <div className="row g-4">
                  {/* Name Spare */}
                  <div className="col-12">
                    <div className="d-flex flex-column gap-2">
                      <span className="span">{trans("order_spare.name")}</span>
                      <input
                        name="name"
                        className="input"
                        placeholder={trans("order_spare.name_placeholder")}
                        type="text"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* Quality */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-column gap-2">
                      <span className="span">
                        {trans("order_spare.quality")}
                      </span>
                      <input
                        name="industry"
                        className="input"
                        placeholder={trans("order_spare.quality_placeholder")}
                        type="text"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* Quantity */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-column gap-2">
                      <span className="span">
                        {trans("order_spare.quantity")}
                      </span>
                      <input
                        name="count"
                        className="input"
                        placeholder={trans("order_spare.quantity_placeholder")}
                        type="number"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* Photo */}
                  <div className="col-12">
                    <div className="d-flex flex-column gap-2">
                      <span className="span">
                        {trans("order_spare.add_photo")}
                      </span>
                      <label
                        htmlFor={`select${index}`}
                        className="pointer py-4 d-flex flex-column align-items-center justify-content-center gap-2 upload-photo"
                      >
                        <span className="icon">
                          <Upload />
                        </span>
                        <span className="text text-green">
                          {trans("order_spare.add_photo_placeholder")}
                        </span>
                        {element?.image && (
                          <span
                            className="image-view mt-4"
                            style={{
                              backgroundImage: `url(${URL.createObjectURL(
                                element?.image
                              )})`,
                            }}
                          ></span>
                        )}
                      </label>
                      <input
                        name="image"
                        id={`select${index}`}
                        type="file"
                        onChange={(e) => handleChange(index, e)}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  {/* Comments */}
                  <div className="col-12">
                    <div className="d-flex flex-column gap-2">
                      <span className="span">
                        {trans("order_spare.comments")}
                      </span>
                      <textarea
                        name="note"
                        rows={5}
                        className="input"
                        placeholder={trans("order_spare.comments_placeholder")}
                        type="text"
                        onChange={(e) => handleChange(index, e)}
                      ></textarea>
                    </div>
                  </div>
                  {/* Delete */}
                  {index >= 1 && (
                    <div className="col-12">
                      <div
                        className="pointer fit-content ms-0 me-auto bg-danger text-white fs-16-700 py-2 px-5 r-10"
                        onClick={() => {
                          removeFormFields(index);
                        }}
                      >
                        {trans("order_spare.delete")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Check Box */}
            <div className="mt-4 checkbox-label d-flex align-items-center gap-3 justify-content-center">
              <label className={`${shops && "active"}`}>
                {trans("order_spare.shops")}
                <input
                  type="checkbox"
                  className="d-none"
                  onChange={() => {
                    setShops(!shops);
                  }}
                />
              </label>
              <label className={`${imports && "active"}`}>
                {trans("order_spare.import")}
                <input
                  type="checkbox"
                  className="d-none"
                  onChange={() => {
                    setImports(!imports);
                  }}
                />
              </label>
            </div>
            {/* Check Box */}
            {/* Add spare */}
            <div className="mt-4">
              <div className="add-spare d-flex align-items-center">
                <span className="line"></span>
                <div
                  className="add-spare-button pointer d-flex align-items-center justify-content-center gap-3 text-green"
                  onClick={() => {
                    addFormFields();
                  }}
                >
                  <Plus /> {trans("order_spare.add_more")}
                </div>
                <span className="line"></span>
              </div>
            </div>
            {/* Submit */}
            <div className="mt-4">
              <button
                disabled={active}
                className={`d-block mx-auto mx-sm-0 ${active && "disabled"}`}
                type="submit"
              >
                {trans("order_spare.button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderSpare;
