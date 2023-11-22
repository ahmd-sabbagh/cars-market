import React, { useEffect, useState } from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import Ad from "../../../CarsMarket/Components/Body/MainAds/Ad";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../Others/Error";
import { myAdsMainData } from "./GlopalStateRecoil/AllData";
import Loader from "../../../../Components/Loader/Loader";
import NoAdsAded from "./NoAdsAded";

function AllAds() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  //
  const [data, setData] = useRecoilState(myAdsMainData);
  const [loader, setLoader] = useState(true);
  const [exist, setExist] = useState(true);
  const getAds = () => {
    axios
      .get(`${basedDomin}/shop/ads/my-ads/processing`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data.data);
        if (data.data.data.length === 0) {
          setExist(false);
        } else {
          setExist(true);
        }
        setLoader(false);
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
    <>
      <h3 className="fs-20-600 mb-4">{`${trans("my_ads.all_ads")} (${
        data?.data?.length > 0 ? data?.data?.length : 0
      })`}</h3>
      {loader ? (
        <div className="flex-c" style={{ height: "300px" }}>
          <Loader width="150px" />
        </div>
      ) : exist ? (
        <div className="all-ads d-flex flex-column gap-3">
          {data?.data?.map((item) => (
            <Ad type="profile" {...item} key={item.id} />
          ))}
        </div>
      ) : (
        <NoAdsAded />
      )}
    </>
  );
}

export default AllAds;
