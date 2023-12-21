import React from "react";
import { ReactComponent as Logo } from "./Assets/cras.svg";
import { Link } from "react-router-dom";
import { trans } from "../../../Components/Navbar/Navbar";

function AboutCars() {
  return (
    <div className="AboutCars py-5 overflow-hidden">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-6">
            <div className="text d-flex flex-column gap-3">
              <h3
                className="fs-24-700"
                data-aos="fade-left"
                data-aos-offset="10"
                data-aos-duration={`1000`}
              >
                {trans("home.about_cars.title")}
              </h3>
              <h4
                className="fs-32-700"
                data-aos="fade-left"
                data-aos-offset="10"
                data-aos-duration={`1200`}
              >
                {trans("home.about_cars.half_title")}
              </h4>
              <p
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-duration={`1400`}
              >
                {trans("home.about_cars.description")}
              </p>
              <Link
                to="/about-carz"
                className="d-block fit-content mt-4 r-07 text-white"
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-duration={`1500`}
              >
                {trans("home.about_cars.link")}
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="d-flex justify-content-end"
              data-aos="zoom-in-right"
              data-aos-duration={`1000`}
              data-aos-offset="10"
            >
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCars;
