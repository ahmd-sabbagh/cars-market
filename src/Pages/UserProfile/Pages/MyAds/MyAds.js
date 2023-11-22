import React from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import Header from "../Components/Header";
import "./MyAds.css";
import AllAds from "./AllAds";
import { useRecoilValue } from "recoil";
import { myAdsMainData } from "./GlopalStateRecoil/AllData";

function MyAds() {
  const dataLength = useRecoilValue(myAdsMainData);
  const headers = {
    title: trans("my_ads.title"),
    disc: trans("my_ads.disc"),
    button: trans("my_ads.add_ad"),
    to: "/add-ad",
    buttonStatus: dataLength && dataLength.data.length,
    buttonOrLink:"ads"
  };
  return (
    <div className="MyAds py-4 px-md-3">
      <Header {...headers} />
      <div className="all-ads p-3 p-md-4 r-07 bg-white mt-5">
        <AllAds />
      </div>
    </div>
  );
}

export default MyAds;
