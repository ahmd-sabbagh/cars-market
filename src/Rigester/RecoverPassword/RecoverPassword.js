import React, { useState } from "react";
import { ReactComponent as Phone } from "../Assets/phone.svg";
import { ReactComponent as Shape } from "../Assets/recover.svg";
import { useTranslation } from "react-i18next";
import { basedDomin } from "../../Api/basedDomin";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { useRecoilState } from "recoil";
import { CountryCode, MobilNumber } from "../../Recoil/Register/Registeration";
function RecoverPassword() {
  const { t, i18n } = useTranslation();
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // State Form
  const [mobile, setMobile] = useRecoilState(MobilNumber);
  const [code_country, setCode_country] = useRecoilState(CountryCode);
  // State Form
  // Form Data
  const formData = {
    mobile_or_email: mobile,
    code_country,
  };
  // Form Data
  // function Submit
  const navigat = useNavigate();
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/password/reset/send-code`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      SuccsesComponent(data.message);
      navigat("/register/verify");
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  // function Submit
  return (
    <div className="RecoverPassword form-cont bg-white py-4 pt-md-5 px-3 px-md-5 d-flex flex-column gap-4 align-items-center">
      <div className="logo">
        <Shape />
      </div>
      <h3 className="fs-24-700">{t("register.recover.title")}</h3>
      <p>{t("register.recover.desc")}</p>
      {/* Form */}
      <form className="full-width d-flex flex-column gap-4" onSubmit={onsubmit}>
        {/* Phone Number */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("mobile_or_email") && "border border-red"
            }`}
          >
            <span className="icon">
              <Phone />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="number"
              id="phone_number"
              placeholder={t("register.sign_up.phone")}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          {errorValidation.hasOwnProperty("mobile_or_email") && (
            <span className="text-error fs-14-400">
              {errorValidation.mobile_or_email[0]}
            </span>
          )}
        </div>
        {/* Submit */}
        <button className="border-0 bg-green text-white button-font r-07 py-3 px-4">
          {t("register.recover.send_code")}
        </button>
      </form>
      <div className="no-have d-flex align-items-center gap-1">
        <span>{t("register.recover.remember")}</span>
        <Link to={"/register/sign-in"}>{t("register.recover.sign")}</Link>
      </div>
    </div>
  );
}

export default RecoverPassword;
