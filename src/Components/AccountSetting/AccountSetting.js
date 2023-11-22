import React from "react";
import "./AccountSetting.css";
import PersonalData from "./PersonalData";
import SecurtyData from "./SecurtyData";
import { trans } from "../Navbar/Navbar";

function AccountSetting() {
  return (
    <div className="AccountSetting py-4 px-2 px-sm-4">
      <div className="title">
        <h3 className="fs-24-600">{trans("user_profile.acc_setting")}</h3>
        <p className="mt-12 fs-16-500">{trans("account_setting.disc")}</p>
      </div>
      {/* PersonalData */}
      <PersonalData />
      {/* SecurtyData */}
      <SecurtyData />
    </div>
  );
}

export default AccountSetting;
