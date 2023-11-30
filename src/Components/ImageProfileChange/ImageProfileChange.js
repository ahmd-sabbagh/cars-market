import React from "react";
import "./ImageProfileChange.css";
import { ReactComponent as Import } from "./Assets/import.svg";
import { trans } from "../Navbar/Navbar";

function ImageProfileChange({ setState, state, setActive }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="head-profile-image mb-4 d-flex align-items-center gap-4 r-10 p-4 justify-content-center"
      style={{ backgroundColor: "#f0f8f4" }}
    >
      {/* image */}
      <div className="image flex-c overflow-hidden">
        {state ? (
          <img src={URL.createObjectURL(state)} alt="" />
        ) : (
          <img src={user?.image} alt="" />
        )}
      </div>
      {/* input select image */}
      <div className="select-image d-flex flex-column gap-2">
        <label
          htmlFor="select"
          className=" d-flex align-items-center justify-content-between py-2 px-3 r-10 pointer"
        >
          {trans("add_photo")}
          <span className="flex-c icon">
            <Import />
          </span>
        </label>
        <p>{trans("uplaod_photo")}</p>
        <input
          id="select"
          type="file"
          accept="image/png,image/jpeg"
          onChange={(e) => {
            setState(e.target.files[0]);
            setActive(true);
          }}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default ImageProfileChange;
