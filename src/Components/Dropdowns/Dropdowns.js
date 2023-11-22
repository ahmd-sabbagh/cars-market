import React, { useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "./Assets/chevron-down.svg";
import { useState } from "react";
import { trans } from "../Navbar/Navbar";
import { useRecoilState } from "recoil";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../Others/Error";

function Dropdowns({ index, handleChange }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // get car from select popup
  const [valueSelect, setValueSelect] = useRecoilState(CarsTypeState);
  // get car from select popup
  const [open, setOpen] = useState(false);
  const tapRef = useRef();
  const clickRef = useRef();
  // Get Car Function
  const [carsOption, setCarsOption] = useState();
  const getCarFun = () => {
    axios
      .get(`${basedDomin}/buyer/cars`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCarsOption(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Get Car Function
  useEffect(() => {
    getCarFun();
    const tapHandler = (e) => {
      if (
        !tapRef?.current?.contains(e.target) &&
        !clickRef?.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  return (
    <div className="Dropdowns position-relative">
      {/* input */}
      <div
        className="input-costome-select d-flex align-items-center justify-content-between border r-07 p-3 bg-white"
        onClick={() => {
          setOpen(!open);
        }}
        ref={clickRef}
      >
        <div>
          {valueSelect ? (
            valueSelect?.brand_car.label
          ) : (
            <span className="placeholder-span">
              {trans("order_spare.chose_car")}
            </span>
          )}
        </div>
        <span className={`arrow flex-c transion-5 ${open && "icon-rotate"}`}>
          <Arrow />
        </span>
      </div>
      {/* List Dropdown */}
      {}
      {open && (
        <div
          ref={tapRef}
          className="ListDropdown p-3 full-width border r-07 position-absolute top-100 start-0 bg-white mt-1 box-sh d-flex flex-column gap-2"
        >
          {carsOption?.map((item) => (
            <div
              key={item.id}
              data-name="carId"
              className="list pointer d-flex align-items-center gap-3"
              data-data={JSON.stringify(item)}
              onClick={(e) => {
                handleChange(index, e);
                setValueSelect(item);
                console.log(e.target.getAttribute("data-data"));
                setOpen(false);
              }}
            >
              <div className="image flex-c">
                <img src={item.brand_car.logo} alt="" />
              </div>
              <span className="text">{item.brand_car.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdowns;
