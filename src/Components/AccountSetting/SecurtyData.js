import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import axios from "axios";
import { LoaderState } from "../../Recoil/All/Loader";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";
import { trans } from "../Navbar/Navbar";

function SecurtyData() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [active, setActive] = useState(false);
  // states
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  // states
  // function subit
  const formData = {
    old_password: oldPassword,
    password,
    password_confirmation: newPassword,
  };
  const submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/public/profile/update/password`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setLoader(false);
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
        {trans("account_setting.securty_data")}
      </h3>
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="name d-flex flex-column" style={{ gap: "12px" }}>
            <label className="fs-16-500">
              {trans("account_setting.old_password")}
            </label>
            <input
              type="text"
              className="border-0 p-3 r-10"
              placeholder={trans("account_setting.old_password")}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="name d-flex flex-column" style={{ gap: "12px" }}>
            <label className="fs-16-500">
              {trans("account_setting.password")}
            </label>
            <input
              type="password"
              className="border-0 p-3 r-10"
              placeholder={trans("account_setting.password")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="name d-flex flex-column" style={{ gap: "12px" }}>
            <label className="fs-16-500">
              {trans("account_setting.password_confirm")}
            </label>
            <input
              type="password"
              id="new_password"
              className="border-0 p-3 r-10"
              placeholder={trans("account_setting.password_confirm")}
              onChange={(e) => {
                setNewPassword(e.target.value);
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
            {trans("account_setting.change_password")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SecurtyData;
