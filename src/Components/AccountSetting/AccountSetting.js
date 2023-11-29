import React from "react";
import "./AccountSetting.css";
import PersonalData from "./PersonalData";
import SecurtyData from "./SecurtyData";
import { trans } from "../Navbar/Navbar";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../Recoil/All/Loader";
import { vendorMainLoader } from "../../Pages/Vendor/GlopalStateRecoil/AllData";

function AccountSetting({ type = "" }) {
  const [loader, setLoader] = useRecoilState(
    type === "vendor" ? vendorMainLoader : LoaderState
  );
  return (
    <div className="AccountSetting py-4 px-2 px-sm-4">
      <div className="title">
        <h3 className="fs-24-600">{trans("user_profile.acc_setting")}</h3>
        <p className="mt-12 fs-16-500">{trans("account_setting.disc")}</p>
      </div>
      {/* PersonalData */}
      <PersonalData setLoader={setLoader} />
      {/* SecurtyData */}
      <SecurtyData setLoader={setLoader} />
    </div>
  );
}

export default AccountSetting;
