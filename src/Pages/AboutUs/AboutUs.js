import React from "react";
import "./AboutUs.css";
import { trans } from "../../Components/Navbar/Navbar";
import Baner from "./Assets/baner.png";
import Image1 from "./Assets/1.png";
import Image2 from "./Assets/2.png";
import Image3 from "./Assets/3.png";
import Card from "./Card/Card";
import CompanyLogos from "../Home/CompanyLogos/CompanyLogos";

function AboutUs() {
  const data = [
    {
      image: Image1,
      title: trans("about_us.spare"),
      description: trans("about_us.spare_desc"),
    },
    {
      image: Image2,
      title: trans("about_us.maintenance"),
      description: trans("about_us.maintenance_desc"),
    },
    {
      image: Image3,
      title: trans("about_us.flatness"),
      description: trans("about_us.flatness_desc"),
    },
  ];
  return (
    <div className="AboutUs">
      <div className="container ">
        <div className="top d-flex flex-column gap-5">
          <h3 className="fs-40-700 text-center">{trans("about_us.title")}</h3>
          <div
            className="baner-image"
            style={{ backgroundImage: `url(${Baner})` }}
          ></div>
          <div className="description">
            <p className="fs-24-400">{trans("about_us.desc")}</p>
            <p className="fs-24-400">{trans("about_us.desc_2")}</p>
            <p className="fs-24-400">{trans("about_us.desc_3")}</p>
            <p className="fs-24-400">{trans("about_us.desc_4")}</p>
            <p className="fs-24-400">{trans("about_us.desc_5")}</p>
            <p className="fs-24-400">{trans("about_us.desc_6")}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container d-flex flex-column gap-4">
          <h3 className="fs-40-700 text-center">
            {trans("about_us.sub_title")}
          </h3>
          <p className="fs-24-400 mx-auto text-center">
            {trans("about_us.sub_desc")}
          </p>
          <div className="cards mt-5">
            <div className="row g-4 justify-content-center">
              {data.map((item, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <Card {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CompanyLogos />
    </div>
  );
}

export default AboutUs;
