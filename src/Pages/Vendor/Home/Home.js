import React from "react";
import RegisterData from "../RegisterData/RegisterData";
import Orders from "../Orders/Orders";

function VendorHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  return <>{user?.is_register_vendor_data ? <Orders /> : <RegisterData />}</>;
}

export default VendorHome;
