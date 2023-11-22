import React from "react";
import "./InputData.css";

function InputData({ label, type = "text", placeholder, setState }) {
  return (
    <div className="input-data">
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default InputData;
