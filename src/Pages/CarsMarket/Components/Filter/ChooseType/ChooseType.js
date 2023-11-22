import React, { useState } from "react";
import "./ChooseType.css";
import { FiChevronDown } from "react-icons/fi";

function ChooseType({
  name,
  data,
  setState,
  state,
  type = "checkbox",
  namedif = "",
}) {
  const [open, setOpen] = useState(true);
  // Handel change

  const handleCheck = (event) => {
    if (type === "radio") {
      setState(event.target.value);
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
  return (
    <div className="ChooseType">
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
      {/* Cont */}
      <div
        className={`cont transion-5 overflow-hidden ${open && "mt-3"}`}
        style={open ? { minHeight: "34px" } : { height: "0px" }}
      >
        <div className="d-flex align-items-center gap-3 flex-wrap">
          {data.map((item, idx) => (
            <label className="pointer" key={idx}>
              {item.view}
              <input
                name={namedif}
                type={type}
                style={{ display: "none" }}
                value={item.name}
                onChange={handleCheck}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseType;
