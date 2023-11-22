import React, { useEffect, useState } from "react";
import { ReactComponent as Shape } from "../Assets/recoverCode.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import "./Inputs.css";
import { basedDomin } from "../../Api/basedDomin";
import axios from "axios";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { useRecoilValue } from "recoil";
import { RegisterTypeUser } from "../GlopalRecoilState/AllData";
function VerifyCode() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigat = useNavigate();
  const { t, i18n } = useTranslation();
  const typeUser = useRecoilValue(RegisterTypeUser);
  // Validation State
  const [errorValidation, setErrorValidation] = useState();
  // Validation State
  const [code, setCode] = useState();
  // Validation Mobile Number
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    //interval
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    //interval

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // function Submit
  const formData = {
    code,
    mobile_or_email: user?.mobile,
    code_country: user?.code_country,
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/checkcode`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      if (typeUser === "vendor") {
        if (user.is_register_vendor_data) {
          navigat("/");
        } else {
          navigat("/vendor");
        }
      } else {
        navigat("/");
      }
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  // function Submit
  return (
    <div className="SendCode form-cont bg-white py-4 py-md-5 px-3 px-md-5 d-flex flex-column gap-4 align-items-center">
      <div className="logo">
        <Shape />
      </div>
      <h3 className="fs-24-700">{t("register.recover_code.title")}</h3>
      <p>{t("register.recover_code.desc")}</p>
      {/* Form */}
      <form className="full-width d-flex flex-column gap-4" onSubmit={onsubmit}>
        {/* Virify */}
        <div className="Inputs">
          <VerificationInput
            length={6}
            passwordMode={true}
            validChars="A-Za-z0-9"
            classNames={{
              container: "container",
              character: `character ${errorValidation && "red"}`,
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
            }}
            onChange={(e) => {
              setCode(e);
            }}
          />
        </div>
        {/* Submit */}
        <button className="border-0 bg-green text-white button-font r-07 py-3 px-4">
          {t("register.recover_code.confirm")}
        </button>
      </form>
      <div className="no-have d-flex align-items-center gap-1">
        <span>{t("register.recover_code.not_reseave")}</span>
        <Link to={"/register"}>{t("register.recover_code.resend")}</Link>
      </div>
    </div>
  );
}

export default VerifyCode;
