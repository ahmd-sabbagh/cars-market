import React from "react";
import InputOrderSent from "../../InputOrderSent/InputOrderSent";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { basedDomin } from "../../../../../../../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../../../Others/Error";
import { useRecoilState } from "recoil";
import { vendorMainLoader } from "../../../../../../GlopalStateRecoil/AllData";

function SpareCard({ name, id }) {
  //
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  const [loader, setLoader] = useRecoilState(vendorMainLoader);
  //
  const [price, setPrice] = useState("");
  const [industry, setIndustry] = useState("");
  const [count, setCounty] = useState("");
  const inputsData = [
    {
      placeHolder: trans("vendor.orders.industry_place"),
      state: industry,
      setState: setIndustry,
    },
    {
      placeHolder: trans("vendor.orders.price_place"),
      state: price,
      setState: setPrice,
    },
    {
      placeHolder: trans("count"),
      state: count,
      setState: setCounty,
    },
  ];
  // OnSubmit
  const formData = {
    part_id: id,
    industry,
    price,
    quantity: count,
  };
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/vendor/orders/offers/create`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setLoader(false);
      SuccsesComponent(data.message);
    } catch (error) {
      setLoader(false);
      ErrorComponent(error, navigate, setErrorValidation);
    }
  };
  return (
    <div className="SpareCard border r-07 p-3">
      <h3 className="fs-12-500 mb-2" style={{ fontWeight: "600" }}>
        {name}
      </h3>
      <div className="SpareCardInputs d-flex gap-3">
        {inputsData.map((item, idx) => (
          <InputOrderSent key={idx} {...item} />
        ))}
        <form onSubmit={submit}>
          <button type="submit">{trans("rating_vendor.send")}</button>
        </form>
      </div>
    </div>
  );
}

export default SpareCard;
