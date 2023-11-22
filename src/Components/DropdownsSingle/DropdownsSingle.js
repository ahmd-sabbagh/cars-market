import React, { useEffect, useRef } from "react";
import "./DropdownsSingle.css";
import { ReactComponent as Arrow } from "./Assets/chevron-down.svg";
import { useState } from "react";
import { trans } from "../Navbar/Navbar";
import { useRecoilState } from "recoil";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";
import Loader from "../Loader/Loader";

function DropdownsSingle({ setActive, carsOption, loader }) {
  const [valueSelect, setValueSelect] = useRecoilState(CarsTypeState);

  const [open, setOpen] = useState(false);
  const tapRef = useRef();
  const clickRef = useRef();
  useEffect(() => {
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
      {open && (
        <div
          ref={tapRef}
          className="ListDropdown z-3 full-width border  position-absolute top-100 start-0 bg-white mt-1 box-sh d-flex flex-column gap-2"
        >
          {loader ? (
            <div className="loade">
              <Loader />
            </div>
          ) : carsOption?.length ? (
            carsOption?.map((item) => (
              <div
                key={item.id}
                className="list pointer d-flex align-items-center gap-3"
                onClick={() => {
                  setValueSelect(item);
                  setOpen(false);
                  setActive(true);
                }}
              >
                <div className="image">
                  <img src={item.brand_car.logo} alt="" />
                </div>
                <span className="text">{item.brand_car.label}</span>
              </div>
            ))
          ) : (
            <div className="list pointer d-flex align-items-center gap-3 text-center">
              {"لا توجد سيارات لديك"}
            </div>
          )}
          {/* {carsOption?.length ? (
            carsOption?.map((item) => (
              <div
                key={item.id}
                className="list pointer d-flex align-items-center gap-3"
                onClick={() => {
                  setValueSelect(item);
                  setOpen(false);
                  setActive(true);
                }}
              >
                <div className="image">
                  <img src={item.brand_car.logo} alt="" />
                </div>
                <span className="text">{item.brand_car.label}</span>
              </div>
            ))
          ) : (
            <div className="list pointer d-flex align-items-center gap-3 text-center">
              {"لا توجد سيارات لديك"}
            </div>
          )} */}
        </div>
      )}
    </div>
  );
}

export default DropdownsSingle;
