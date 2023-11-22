import React from "react";
import "./OutletRigester.css";
import { Outlet } from "react-router-dom";

function OutletRigester() {
  const language = localStorage.getItem("i18nextLng");

  return (
    <div
      className="OutletRigester flex-c"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container flex-c">
        <Outlet />
      </div>
    </div>
  );
}

export default OutletRigester;
