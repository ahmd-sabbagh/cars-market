import React, { useState } from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { BsFilterLeft } from "react-icons/bs";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  haragMainData,
  marketExistStatus,
} from "../Filter/GlopalStateRecoil/AllData";
import { LoaderState } from "../../../../Recoil/All/Loader";
import { basedDomin } from "../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../Others/Error";
import { useNavigate } from "react-router-dom";

function HeaderFilter() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Main State
  const [mainData, setData] = useRecoilState(haragMainData);
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [exist, setExist] = useRecoilState(marketExistStatus);
  const [hover, setHover] = useState("new");
  const data = [
    {
      text: trans("cars_market.body.lists"),
      apiLink: "new",
    },
    {
      text: trans("cars_market.body.most_relevant"),
      apiLink: "old",
    },
    {
      text: trans("cars_market.body.highest_price"),
      apiLink: "max_price",
    },
    {
      text: trans("cars_market.body.lowest_price"),
      apiLink: "min_price",
    },
  ];
  // Filter Data
  const filterFunctionGetData = (state) => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/shop/ads`,
        {
          sort_by_ads: state,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setData(data.data.data);
        setLoader(false);
        if (data.data.data.length === 0) {
          setExist(false);
        } else {
          setExist(true);
        }
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(false);
      });
  };
  // Filter Data
  return (
    <div className="HeaderFilter mb-5 d-flex align-items-md-center gap-4 overflow-hidden">
      <div className="departs d-flex align-items-center gap-3 transion-5">
        {data.map((item, idx) => (
          <button
            className={hover === item.apiLink ? "hover" : ""}
            key={idx}
            type="button"
            onClick={() => {
              setHover(item.apiLink);
              filterFunctionGetData(item.apiLink);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div
        className="icon flex-c bg-white pointer d-none d-md-flex"
        style={{ fontSize: "25px" }}
      >
        <BsFilterLeft />
      </div>
    </div>
  );
}

export default HeaderFilter;
