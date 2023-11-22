import React from "react";

function InputData({ title, type = "text", placeholder, state, setState }) {
  return (
    <div className="inputData d-flex flex-column gap-12">
      <span className="span">{title}</span>
      <input
        style={{ backgroundColor: "#f2f4f7" }}
        className="full-width d-block border-0 p-3 r-10"
        type={type}
        placeholder={placeholder}
        defaultValue={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default InputData;
