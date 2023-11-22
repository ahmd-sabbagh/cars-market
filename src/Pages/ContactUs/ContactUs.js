import React, { useState } from "react";
import "./ContactUs.css";
import { trans } from "../../Components/Navbar/Navbar";
import Info from "./Info";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigat = useNavigate();
    // Validation State
    const [errorValidation, setErrorValidation] = useState({});
    // Validation State
  // States
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  // States
  const formData = {
    name,
    email,
    message,
  };
  // Function Submit
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/contact-us`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      SuccsesComponent(data.message);
    } catch (error) {
      ErrorComponent(error, navigat,setErrorValidation);
    }
  };
  // Function Submit
  
  return (
    <div className="ContactUs py-5">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-12 col-lg-6">
            <div>
              <div className="head ">
                <h3 className="fs-32-700">{trans("contact_us.title")}</h3>
                <p className="fs-16-400 mt-3">{trans("contact_us.desc")}</p>
              </div>
              {/* Form */}
              <form onSubmit={submit} className="d-flex flex-column gap-4 mt-5">
                {/* Name */}
                <div className="d-flex flex-column gap-2">
                  <span className="span">{trans("contact_us.name")}</span>
                  <input
                    className="input"
                    placeholder={trans("contact_us.name_placeholder")}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                  />
                </div>
                {/* Email */}
                <div className="d-flex flex-column gap-2">
                  <span className="span">{trans("contact_us.email")}</span>
                  <input
                    className="input"
                    placeholder={trans("contact_us.email_placeholder")}
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                  />
                </div>
                {/* Message */}
                <div className="d-flex flex-column gap-2">
                  <span className="span">{trans("contact_us.message")}</span>
                  <textarea
                    rows={5}
                    className="input"
                    placeholder={trans("contact_us.message_placeholder")}
                    type="text"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                  ></textarea>
                </div>
                {/* Submit */}
                <button
                  className="d-block mx-auto mx-sm-0 bg-green border-0 fit-content text-white fs-16-700 r-10 py-3 px-5"
                  type="submit"
                >
                  {trans("contact_us.button")}
                </button>
              </form>
            </div>
          </div>
          {/* Info */}
          <div className="col-12 col-lg-5">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
