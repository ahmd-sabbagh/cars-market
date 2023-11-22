import React from "react";
import "./VendorDetails.css";
import { trans } from "../../Components/Navbar/Navbar";
import TopHead from "./Components/TopHead/TopHead";
import OtherAds from "./Components/SimilarAds/OtherAds";
import CustomerRating from "./Components/CustomerRating/CustomerRating";

function VendorDetails() {
  return (
    <div className="VendorDetails">
      <div className="bg-white py-5">
        <div className="container">
          <h3 className="fs-24-700 mb-5">{trans("vendor_details.title")}</h3>
          <TopHead />
          <div className="row">
            <div className="col-12 col-md-8">
              <OtherAds />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-white py-5 mt-3">
        <div className="container">
          <CustomerRating />
        </div>
      </div>
    </div>
  );
}

export default VendorDetails;
