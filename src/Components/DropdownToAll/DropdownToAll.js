import React, { useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "./Assets/chevron-down.svg";
import { useState } from "react";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent } from "../../Others/Error";
import { useNavigate } from "react-router-dom";

function DropdownToAll({
  placeholder,
  setActive,
  carsOption,
  state,
  setState,
  setTypesCarOption,
  type = "",
}) {
  const navigate = useNavigate();
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

  // function get type cars
  const getTypeCars = (id) => {
    axios
      .get(`${basedDomin}/public/data/types-car/${id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setTypesCarOption(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // function get type cars
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
          {state ? (
            state.label
          ) : (
            <span className="placeholder-span">{placeholder}</span>
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
          className="ListDropdown z-3 full-width border r-07 position-absolute top-100 start-0 bg-white mt-1 box-sh d-flex flex-column gap-2"
        >
          {carsOption?.length ? (
            carsOption?.map((item) => (
              <div
                key={item.value}
                className="list pointer d-flex align-items-center gap-3"
                onClick={() => {
                  setState(item);
                  setOpen(false);
                  setActive(true);
                  if (type === "company_car") {
                    getTypeCars(item.value);
                  }
                }}
              >
                {item?.logo ? (
                  <div className="image">
                    <img src={item.logo} alt="" />
                  </div>
                ) : (
                  <div className="circel"></div>
                )}

                <span className="text">{item.label}</span>
              </div>
            ))
          ) : (
            <div className="py-4 text-center">
              {"لا توجد سيارات"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownToAll;
