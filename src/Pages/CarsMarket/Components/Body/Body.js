import React, { useEffect } from "react";
import "./Body.css";
import Header from "./Header";
import HeaderFilter from "./HeaderFilter";
import Ad from "./MainAds/Ad";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useRecoilState } from "recoil";
import {
  haragMainData,
  marketExistStatus,
} from "../Filter/GlopalStateRecoil/AllData";
import { ErrorComponent } from "../../../../Others/Error";
import { useNavigate } from "react-router-dom";
import { LoaderState } from "../../../../Recoil/All/Loader";
import NothingLottie from "../../../../Components/NothingLottie/NothingLottie";
import { trans } from "../../../../Components/Navbar/Navbar";

function Body() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  //
  const [data, setData] = useRecoilState(haragMainData);
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [exist, setExist] = useRecoilState(marketExistStatus);
  const getAds = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/shop/ads`,
        {},
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
  useEffect(() => {
    getAds();
  }, []);
  return (
    <div className="Body">
      <Header />
      <HeaderFilter />
      <div className="all-ads d-flex flex-column gap-4">
        {!loader ? (
          exist ? (
            data.map((item, idx) => <Ad {...item} key={idx} />)
          ) : (
            <div className="bg-white r-07 py-4">
              <NothingLottie width={"300px"} />
              <h3 className="fs-24-700 text-center mt-3">
                {trans("cars_market.body.no_ads")}
              </h3>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default Body;
