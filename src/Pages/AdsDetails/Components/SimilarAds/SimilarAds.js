import React from "react";
import "./SimilarAds.css";
import Ad from "../../../CarsMarket/Components/Body/MainAds/Ad";
import { trans } from "../../../../Components/Navbar/Navbar";

function SimilarAds({ Ads = [] }) {
  return (
    <div className="SimilarAds">
      <h3 className="title-dev mb-4">{trans("ads_details.other_ads")}</h3>
      <div className="all-ads d-flex flex-column gap-3">
        {Ads?.map((item) => (
          <Ad {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SimilarAds;
