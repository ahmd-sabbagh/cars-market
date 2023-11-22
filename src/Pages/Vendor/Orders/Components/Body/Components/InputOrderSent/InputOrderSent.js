import React from "react";
import "./InputOrderSent.css";
import { ReactComponent as Pincel } from "../Assets/pencil-alt.svg";
function InputOrderSent({ placeHolder, state, setState }) {
  return (
    <div className="d-flex gap-2 full-width InputOrderSent">
      <span className="flex-c">
        <Pincel />
      </span>
      <input
        className="border-0 full-width"
        type="text"
        placeholder={placeHolder}
        defaultValue={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}

export default InputOrderSent;
