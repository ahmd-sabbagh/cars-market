import React from "react";
import { trans } from "../../Components/Navbar/Navbar";
import { MdEmail } from "react-icons/md";
import { ReactComponent as Telephone } from "./Assets/telephone.svg";
import { ReactComponent as Locatin } from "./Assets/location.svg";
function Info() {
  return (
    <div className="window bg-green r-10 p-5">
      <div className="head border-bottom border-white pb-5">
        <h3 className="fs-24-600 text-white">{trans("contact_us.stay")}</h3>
        <p className="fs-16-400 text-white mt-3">
          {trans("contact_us.stay_desc")}
        </p>
      </div>
      {/* Icon */}
      <div className="parts d-flex flex-column gap-5 mt-5">
        <div className="hover d-flex  align-items-center gap-3">
          <div className="icon flex-c">
            <MdEmail />
          </div>
          <div className="text">
            <h4>{trans("contact_us.email")}</h4>
            <p>someone@gmail.com</p>
          </div>
        </div>
        <div className="hover d-flex  align-items-center gap-3">
          <div className="icon flex-c">
            <Telephone />
          </div>
          <div className="text">
            <h4>{trans("contact_us.ph_number")}</h4>
            <p>+966 2548 2215 55</p>
          </div>
        </div>
        <div className="hover d-flex  align-items-center gap-3">
          <div className="icon flex-c">
            <Locatin />
          </div>
          <div className="text">
            <h4>{trans("contact_us.adress")}</h4>
            <p>شارع السيدة عائشة. عمارة الدالي, الدور11 امام مبني المطافي</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
