import React, { useEffect, useState } from "react";
import { ReactComponent as Shape } from "../Assets/new-password.svg";
import { useTranslation } from "react-i18next";
import { ReactComponent as Lock } from "../Assets/lock.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { useRecoilState } from "recoil";
import {
  CountryCode,
  MobilNumber,
  verifyCode,
} from "../../Recoil/Register/Registeration";
function NewPassword() {
  const { t, i18n } = useTranslation();
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // State Form
  const [password, setPassword] = useState();
  const [password_confirmation, setPassword_confirmation] = useState();
  const [code, setCodse] = useRecoilState(verifyCode);
  const [mobile, setMobile] = useRecoilState(MobilNumber);
  const [code_country, setCode_country] = useRecoilState(CountryCode);
  // State Form
  useEffect(() => {
    if (!code) {
      navigat("/register/verify");
    } else if (!mobile || !code_country) {
      navigat("/register/recover-password");
    }
  }, []);
  // Submit
  const navigat = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/password/reset/check-code`,
        {
          password,
          password_confirmation,
          code,
          mobile_or_email: mobile,
          code_country,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      SuccsesComponent(data.message);
      navigat("/register/sign-in");
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  return (
    <div className="NewPassword form-cont bg-white py-4 py-md-5 px-3 px-md-5 d-flex flex-column gap-4 align-items-center">
      <div className="logo">
        <Shape />
      </div>
      <h3 className="fs-24-700">{t("register.new_password.title")}</h3>
      <p>{t("register.new_password.desc")}</p>
      <form className="full-width d-flex flex-column gap-4" onSubmit={onSubmit}>
        {/* password */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("password") && "border border-red"
            }`}
          >
            <span className="icon">
              <Lock />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="password"
              placeholder={t("register.new_password.placeholder1")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {errorValidation.hasOwnProperty("password") && (
            <span className="text-error fs-14-400">
              {errorValidation.password[0]}
            </span>
          )}
        </div>
        {/* confirm password */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("password_confirmation") && "border border-red"
            }`}
          >
            <span className="icon">
              <Lock />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="password"
              placeholder={t("register.new_password.placeholder2")}
              onChange={(e) => {
                setPassword_confirmation(e.target.value);
              }}
            />
          </div>
          {errorValidation.hasOwnProperty("password_confirmation") && (
            <span className="text-error fs-14-400">
              {errorValidation.password_confirmation[0]}
            </span>
          )}
        </div>
        {/* Submit */}
        <button className="border-0 bg-green text-white button-font r-07 py-3 px-4">
          {t("register.new_password.submit")}
        </button>
      </form>
    </div>
  );
}

export default NewPassword;
