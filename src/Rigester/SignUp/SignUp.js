import React, { useState } from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { ReactComponent as User } from "../Assets/user.svg";
import { ReactComponent as Phone } from "../Assets/phone.svg";
import { ReactComponent as Email } from "../Assets/mail.svg";
import { ReactComponent as Lock } from "../Assets/lock.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { basedDomin } from "../../Api/basedDomin";
import axios from "axios";
import { ErrorComponent } from "../../Others/Error";
import { useRecoilState } from "recoil";
import { RegisterTypeUser } from "../GlopalRecoilState/AllData";

function SignUp() {
  var { t, i18n } = useTranslation();
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // State Form
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPassword_confirmation] = useState();
  const [type, setType] = useRecoilState(RegisterTypeUser);
  const [code_country, setCode_country] = useState();
  // State Form
  // Form Data
  const formData = {
    name,
    mobile,
    password,
    password_confirmation,
    email,
    type,
    code_country: "20",
    lang: "ar",
    fcm_token: "fcm",
  };
  // Form Data
  // function Submit
  const navigat = useNavigate();
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/register`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.data.token);
      if (localStorage.getItem("user")) {
        navigat("/verify-code");
      }
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  // function Submit
  return (
    <div className="SignUp form-cont py-4 pt-md-5 px-3 px-md-5 d-flex flex-column gap-3 align-items-center">
      <div className="logo">
        <Logo />
      </div>
      <h3 className="fs-24-700">{t("register.sign_up.title")}</h3>
      <p>{t("register.sign_up.desc")}</p>
      {/* Type */}
      <div className="typs d-flex gap-3 full-width flex-column flex-md-row">
        {/* Vendor */}
        <button
          className={`border-0 full-width p-3 r-07 ${
            type === "buyer" && "active"
          }`}
          onClick={() => {
            setType("buyer");
          }}
        >
          {t("register.sign_up.vendor")}
        </button>
        {/* Buyer */}
        <button
          className={`border-0 full-width p-3 r-07 ${
            type === "vendor" && "active"
          }`}
          onClick={() => {
            setType("vendor");
          }}
        >
          {t("register.sign_up.buyer")}
        </button>
      </div>
      {/* Form */}
      <form className="full-width d-flex flex-column gap-3" onSubmit={onsubmit}>
        {/* User Name */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("name") && "border border-red"
            }`}
          >
            <span className="icon">
              <User />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="text"
              placeholder={t("register.sign_up.name")}
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          {errorValidation.hasOwnProperty("name") && (
            <span className="text-error fs-14-400">
              {errorValidation.name[0]}
            </span>
          )}
        </div>
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
        {/* Email */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("email") && "border border-red"
            }`}
          >
            <span className="icon">
              <Email />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="email"
              id="email"
              placeholder={t("register.sign_up.email")}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {errorValidation.hasOwnProperty("email") && (
            <span className="text-error fs-14-400">
              {errorValidation.email[0]}
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
        {/* confirm password */}
        <div className="d-flex flex-column gap-2">
          <div
            className={`input-sign d-flex gap-2 p-3 r-10  ${
              errorValidation.hasOwnProperty("password_confirmation") &&
              "border border-red"
            }`}
          >
            <span className="icon">
              <Lock />
            </span>
            <input
              className={`full-width border-0 outline-0`}
              type="password"
              placeholder={t("register.sign_up.confirm_password")}
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
          {t("register.sign_up.login")}
        </button>
      </form>
      <div className="no-have d-flex align-items-center gap-1">
        <span>{t("register.sign_up.you_have")}</span>
        <Link to={"/register/sign-in"}>{t("register.sign_up.log_in")}</Link>
      </div>
    </div>
  );
}

export default SignUp;
