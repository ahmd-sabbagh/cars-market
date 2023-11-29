import React from "react";
import RegisterData from "../RegisterData/RegisterData";
import Orders from "../Orders/Orders";
import { useState } from "react";

function VendorHome() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

  return <>{user?.is_register_vendor_data ? <Orders /> : <RegisterData setUser={setUser} />}</>;
}

export default VendorHome;
