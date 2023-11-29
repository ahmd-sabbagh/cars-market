import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { trans } from "../Navbar/Navbar";
import ImageProfileChange from "../ImageProfileChange/ImageProfileChange";
function PersonalData({ setLoader }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  const [image, setImage] = useState("");
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // function subit
  const formData = {
    name: name ? name : user?.name,
    email: email ? email : user?.email,
    image: image ? image : user?.image,
  };
  const submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/profile/update`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setLoader(false);
      localStorage.setItem("user", JSON.stringify(data.data));
      setActive(false);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(false);
      setLoader(false);
    }
  };
  // function subit
  return (
    <form onSubmit={submit} className="personal-data bg-white r-10 p-4 mt-32">
      <h3 className="fs-20-600 mb-4">
        {trans("account_setting.personal_data")}
      </h3>
      {/* Head Profile Image */}
      <ImageProfileChange
        state={image}
        setState={setImage}
        setActive={setActive}
      />
      <div className="row g-4">
        {/* Name */}
        <div className="col-12 col-sm-6">
          <div className="name d-flex flex-column" style={{ gap: "12px" }}>
            <label htmlFor="name" className="fs-16-500">
              {trans("account_setting.full_name")}
            </label>
            <input
              defaultValue={user?.name}
              type="text"
              id="name"
              className="border-0 p-3 r-10"
              placeholder={trans("account_setting.full_name")}
              onChange={(e) => {
                setName(e.target.value);
                setActive(true);
              }}
            />
          </div>
        </div>
        {/* Email */}
        <div className="col-12 col-sm-6">
          <div className="name d-flex flex-column" style={{ gap: "12px" }}>
            <label htmlFor="email" className="fs-16-500">
              {trans("account_setting.email")}
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              id="email"
              className="border-0 p-3 r-10"
              placeholder={trans("account_setting.email")}
              onChange={(e) => {
                setEmail(e.target.value);
                setActive(true);
              }}
            />
          </div>
        </div>
        {/* Submit */}
        <div className="col-12">
          <button
            disabled={!active}
            className={`btn-blue ${!active && "disabled"}`}
            type="submit"
          >
            {trans("account_setting.save_data")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PersonalData;
