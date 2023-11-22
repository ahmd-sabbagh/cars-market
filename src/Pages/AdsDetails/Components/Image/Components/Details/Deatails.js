import React from "react";
import "./Details.css";
import { trans } from "../../../../../../Components/Navbar/Navbar";

function Deatails() {
  return (
    <div className="Deatails">
      <span className="title-popup d-block mb-4">
        {trans("ads_details.details")}
      </span>
      <table className="table table-bordered r-10">
        <tbody>
          <tr>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.ads_num")}</span>
                <span>{"1254584"}</span>
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.ad_type")}</span>
                <span>{"بيع"}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.num_read")}</span>
                <span>{"1284"}</span>
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.response")}</span>
                <span>{"1284"}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.share")}</span>
                <span>{"22 يناير, 2023"}</span>
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <span>{trans("ads_details.popup_details.update")}</span>
                <span>{"منذ 8 ساعات"}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deatails;
