import React, { useEffect, useState } from "react";
import { ReactComponent as Shape } from "../Assets/recoverCode.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import "./Inputs.css";
import { useRecoilState } from "recoil";
import {
  CountryCode,
  MobilNumber,
  verifyCode,
} from "../../Recoil/Register/Registeration";
import { basedDomin } from "../../Api/basedDomin";
import axios from "axios";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";

function SendCode() {
  const token = localStorage.getItem("token");
  const navigat = useNavigate();
  const { t, i18n } = useTranslation();
  // Validation State
  const [errorValidation, setErrorValidation] = useState();
  // Validation State
  // Validation State
  // State Form
  const [code, setCodse] = useRecoilState(verifyCode);
  const [mobile, setMobile] = useRecoilState(MobilNumber);
  const [code_country, setCode_country] = useRecoilState(CountryCode);
  // State Form
  // Validation Mobile Number
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!mobile || !code_country) {
      navigat("/register/recover-password");
    }
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
    mobile_or_email: mobile,
    code_country,
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/password/reset/check-single-code`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      SuccsesComponent(data.message);
      navigat("/register/new-password");
    } catch (error) {
      ErrorComponent(error, navigat, setErrorValidation);
    }
  };
  // function Submit
  // Resend Code Function
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    axios
      .post(
        `${basedDomin}/public/password/reset/send-code`,
        {
          mobile_or_email: mobile,
          code_country,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then(({ data }) => SuccsesComponent(data.message))
      .catch((error) => {
        ErrorComponent(error, navigat);
      });
  };
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
              setCodse(e);
            }}
          />
        </div>
        {/* Submit */}
        <button className="border-0 bg-green text-white button-font r-07 py-3 px-4">
          {t("register.recover_code.confirm")}
        </button>
      </form>
      {/*  */}
      <div className=" d-flex align-items-center gap-1">
        {seconds > 0 || minutes > 0 ? (
          <p>
            الوقت المتبقي: {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        ) : (
          <>
            <p>{t("register.recover_code.not_reseave")}</p>
            <button
              className="border-0 bg-transparent mx-auto d-block"
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOTP}
            >
              {t("register.recover_code.resend")}
            </button>
          </>
        )}
      </div>
      {/*  */}
    </div>
  );
}

export default SendCode;
