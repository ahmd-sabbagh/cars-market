import React, { useState } from "react";
import { ReactComponent as Lock } from "../Assets/lock.svg";
import { ReactComponent as Phone } from "../Assets/phone.svg";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { basedDomin } from "../../Api/basedDomin";
import axios from "axios";
import { ErrorComponent } from "../../Others/Error";

function Login() {
  const { t, i18n } = useTranslation();
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // State Form
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [code_country, setCode_country] = useState();
  // State Form
  // Form Data
  const formData = {
    mobile,
    password,
    code_country: "20",
    fcm_token: "test",
  };
  // Form Data
  // function Submit
  const navigat = useNavigate();
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/login`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.data.token);
      if (data.data.mobile_verified_at) {
        if (data.data.type === "vendor") {
          navigat("/vendor");
        } else {
          navigat("/");
        }
        window.location.reload();
      } else {
        navigat("/register/verify-code");
      }
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  // function Submit
  return (
    <div className="Login form-cont bg-white py-4 pt-md-5 px-3 px-md-5 d-flex flex-column gap-4 align-items-center">
      <div className="logo">
        <Logo />
      </div>
      <h3 className="fs-24-700">{t("register.login.title")}</h3>
      <p>{t("register.login.desc")}</p>
      {/* Form */}
      <form className="full-width d-flex flex-column gap-4" onSubmit={onsubmit}>
        {/* Phone Number */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("mobile") && "border border-red"
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
          {errorValidation.hasOwnProperty("mobile") && (
            <span className="text-error fs-14-400">
              {errorValidation.mobile[0]}
            </span>
          )}
        </div>
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
              placeholder={t("register.sign_up.password")}
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
        {/* Forget Password Link */}
        <Link to={"/register/recover-password"} className="forgetPass">
          {t("register.login.forget_pass")}
        </Link>
        {/* Submit */}
        <button className="border-0 bg-green text-white button-font r-07 py-3 px-4">
          {t("register.sign_up.login")}
        </button>
      </form>
      <div className="no-have d-flex align-items-center gap-1">
        <span>{t("register.login.have_account")}</span>
        <Link to={"/register"}>{t("register.login.join_now")}</Link>
      </div>
    </div>
  );
}

export default Login;
