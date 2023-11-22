import React from "react";
import "./Report.css";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { ReactComponent as Flag } from "./Assets/flag.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../../Components/Loader/Loader";
import axios from "axios";
import { basedDomin } from "../../../../../../Api/basedDomin";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../Others/Error";
function ReportComponent({ Route, Id, setState, state }) {
  // Main State
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [errorValidation, setErrorValidation] = useState({});
  // Main State
  const [comment, setText] = useState("");
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}${Route}`,
        {
          comment,
          ad_id: Id,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setLoader(false);
      setState({ ...state, status: false });
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setLoader(false);
    }
  };
  return (
    <div className="ReportComponent">
      <span className="title-popup d-block mb-4">
        {trans("ads_details.popup_report.title")}
      </span>
      <form onSubmit={submit} className=" d-flex flex-column gap-4">
        <textarea
          className={`full-width d-block r-10 p-3 ${
            errorValidation.hasOwnProperty("comment") && "border border-red"
          }`}
          rows="4"
          placeholder={trans("ads_details.popup_report.placeholder")}
          style={{ backgroundColor: "#F7F7F7" }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <div className="d-flex justify-content-end">
          <button
            disabled={loader}
            type="submit"
            className={`border-0 bg-main text-white flex-c r-10 d-flex align-items-center gap-2 ${
              loader && "disabled"
            }`}
            style={{ width: "113px", height: "56px" }}
          >
            {loader ? (
              <Loader width={"30px"} />
            ) : (
              <>
                <span>
                  <Flag />
                </span>
                <span>{trans("ads_details.popup_report.send")}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportComponent;
