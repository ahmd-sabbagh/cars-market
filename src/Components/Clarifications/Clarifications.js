import React from "react";
import { trans } from "../Navbar/Navbar";
import { ReactComponent as Paper } from "./Assets/paper-clip.svg";

function Clarifications({ image, setImage1, setCommentes,state="", title, placeholder }) {
  return (
    <div className="Clarifications d-flex flex-column gap-2">
      <span className="span">{title}</span>
      <div className="clarifications-component border r-07 overflow-hidden p-2 position-relative">
        <textarea
          name="comments"
          rows={5}
          className="input border-0 full-width"
          placeholder={placeholder}
          defaultValue={state}
          type="text"
          onChange={(e) => {
            setCommentes(e.target.value);
          }}
        ></textarea>
        {/* Icon */}
        <label
          className={`icon position-absolute start-0 pointer ${
            image ? "bg-main p-2 r-07 mx-3 box-sh" : "p-1"
          }`}
          style={{ bottom: "25px" }}
        >
          <Paper />
          <input
            type="file"
            className="d-none"
            onChange={(e) => {
              setImage1(e.target.files[0]);
            }}
          />
        </label>
        {image && (
          <div
            className="Image bg-image mt-3 r-07"
            style={{
              backgroundImage: `url(${URL.createObjectURL(image)})`,
              width: "100%",
              height: "300px",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Clarifications;
