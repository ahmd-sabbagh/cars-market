import React from "react";
import { trans } from "../../../Components/Navbar/Navbar";
import image1 from "./Assets/1.png";
import image2 from "./Assets/2.png";
import image3 from "./Assets/3.png";
import { ReactComponent as Shape } from "./Assets/car.svg";
import { Link } from "react-router-dom";

function Orders() {
  const data = [
    {
      image: image1,
      title: trans("home.order.spare"),
      desc: trans("home.order.spare_desc"),
    },
    {
      image: image2,
      title: trans("home.order.maintenance"),
      desc: trans("home.order.maintenance_desc"),
    },
    {
      image: image3,
      title: trans("home.order.flatness"),
      desc: trans("home.order.flatness_desc"),
    },
  ];
  return (
    <div className="Orders py-5">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-md-6">
            <div className="blue">
              <h3 className="fs-32-700 text-white mb-4">
                {trans("home.order.title")}
              </h3>
              <div className="parts d-flex flex-column gap-4">
                {data.map((item, idx) => (
                  <div className="d-flex gap-4" key={idx}>
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="text">
                      <h3 className="fs-24-700 text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="green d-flex flex-column gap-4">
              <div className="shap fit-content mx-auto">
                <Shape />
              </div>
              <p className="text-center text-white">
                {trans("home.order.description")}
              </p>
              <Link to={"/cars-market"} className="d-block mx-auto fit-content">
                {trans("home.order.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
