import React from "react";
import "./OutletRigester.css";
import { Outlet } from "react-router-dom";

function OutletRigester() {
  const language = localStorage.getItem("i18nextLng");

  return (
    <div
      className="OutletRigester flex-c"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="container flex-c">
        <Outlet />
      </div>
    </div>
  );
}

export default OutletRigester;
