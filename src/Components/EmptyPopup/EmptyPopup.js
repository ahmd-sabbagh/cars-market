import React from "react";
import "./EmptyPopup.css";

function EmptyPopup({ children, flex = "" }) {
  return (
    <div className="EmptyPopup flex-c px-2">
      <div
        className="cont bg-white px-3 px-md-4 py-4 r-10"
        style={{ flexBasis: flex }}
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        {children}
      </div>
    </div>
  );
}

export default EmptyPopup;
