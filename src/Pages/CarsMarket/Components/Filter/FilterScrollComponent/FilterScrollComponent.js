import React, { useState } from "react";
import "./CostumCheckBox.css";
import "./FilterScrollComponent.css";
import { FiChevronDown } from "react-icons/fi";
import { ReactComponent as Search } from "../../Body/Assets/search.svg";
import { trans } from "../../../../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getTypeCars } from "./Functions/GetTypesCars";
import { useRecoilState } from "recoil";
import { filterCities, filterTypesCars } from "../GlopalStateRecoil/AllData";
import { GetCities } from "./Functions/GetCities";

function FilterScrollComponent({
  name,
  setState,
  state,
  data,
  radio = false,
  radioType = "",
  setOption = null,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  // Add/Remove checked Major
  // state type car
  const [typeCar, setTypeCar] = useRecoilState(filterTypesCars);
  // state type car
  // state type car
  const [cities, setCities] = useRecoilState(filterCities);
  // state type car
  const handleCheck = (event) => {
    if (radio) {
      setState([event.target.value]);
      if (radioType === "company-car") {
        setOption([]);
        getTypeCars(event.target.value, setTypeCar, navigate);
      } else if (radioType === "region") {
        setOption([]);
        GetCities(event.target.value, setCities, navigate);
      }
    } else {
      var updatedList = [...state];
      if (event.target.checked) {
        updatedList = [...state, event.target.value];
      } else {
        updatedList.splice(state.indexOf(event.target.value), 1);
      }
      setState(updatedList);
    }
  };
  // Add/Remove checked Major
  return (
    <div className="FilterScrollComponent py-3 border-bottom">
      {/* Nav */}
      <div
        className="nav pointer d-flex align-items-center justify-content-between"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{name}</span>
        <span className={`icon transion-5 ${open && "icon-rotate"}`}>
          <FiChevronDown />
        </span>
      </div>
      {/* cont */}
      <div
        className={`cont transion-5 overflow-hidden ${open && "mt-3"}`}
        style={{ height: open ? "254px" : "0px" }}
      >
        {/* Search */}
        <div className="mb-4 search flex-grow-1 d-flex align-items-center gap-2 p-2 r-10 bg-white border">
          <span>
            <Search />
          </span>
          <input
            className="border-0 bg-transparent full-width"
            placeholder={trans("cars_market.body.search")}
            type="search"
          />
        </div>
        {/* CheckBoxes */}
        <div className="scroll-component">
          <div className="checkboxes pb-2 d-flex flex-column gap-3">
            {/* All */}
            {radioType && (
              <label className="container-custom d-flex align-items-center">
                {"الكل"}
                <input
                  name={radio ? `filter-${radioType}` : ""}
                  type={radio ? "radio" : "checkbox"}
                  onChange={() => {
                    setState([]);
                    if (radioType === "region") {
                      setCities([]);
                    } else if (radioType === "company-car") {
                      setTypeCar([]);
                    }
                  }}
                />
                <span className="checkmark"></span>
              </label>
            )}
            {/* All */}
            {data.map((item) => (
              <label
                className="container-custom d-flex align-items-center"
                key={item.value}
              >
                {item.label}
                <input
                  name={radio ? `filter-${radioType}` : ""}
                  value={item.value}
                  type={radio ? "radio" : "checkbox"}
                  onChange={handleCheck}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterScrollComponent;
