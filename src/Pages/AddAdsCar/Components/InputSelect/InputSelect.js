import React from "react";
import ReactSelect from "react-select";
import { colorStyles } from "../../../../Others/ColorStyleReactSlick";

function InputSelect({ label, options, value, placeholder, onChange }) {
  return (
    <div className="input-data">
      <span>{label}</span>
      <ReactSelect
        options={options}
        value={value}
        placeholder={placeholder}
        isSearchable={true}
        styles={colorStyles}
        onChange={onChange}
      />
    </div>
  );
}

export default InputSelect;
