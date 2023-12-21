import React from "react";
import { trans } from "../../../Components/Navbar/Navbar";
import { ReactComponent as Gallery } from "./Assets/gallary.svg";
import { ReactComponent as Google } from "./Assets/google.svg";
import { ReactComponent as App } from "./Assets/app.svg";
import { Link } from "react-router-dom";

function Applications() {
  return (
    <div className="Applications">
      <div className="container">
        <h3
          className="text-center fs-40-700"
          data-aos="zoom-in-up"
          data-aos-duration={`1200`}
          data-aos-offset="10"
        >
          {trans("home.application")}
        </h3>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {/* <Link>
            <Gallery />
          </Link> */}
          <Link data-aos="fade-left" data-aos-duration={`1200`} data-aos-offset="10">
            <Google />
          </Link>
          <Link data-aos="fade-right" data-aos-duration={`1200`} data-aos-offset="10">
            <App />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Applications;
