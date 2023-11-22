import React from "react";
import "./SideBar.css";
import ProfileImage from "./ProfileImage/ProfileImage";
import Links from "./Links/Links";
import { ReactComponent as Logout } from "./Assets/log-out-02.svg";
import { trans } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar({ linksData }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="UserProfile-SideBar bg-white p-4 p-lg-0">
      <ProfileImage />
      <Links data={linksData} />
      {/* Return To Vendor Window */}
      {user?.type === "vendor" && (
        <div
          className="log-out return-user px-2 py-3 "
          data-aos="fade-left"
          data-aos-duration={`1700`}
        >
          <Link
            className="text-black"
            to={location.pathname.search("vendor") === 1 ? "/" : "/vendor"}
          >
            {location.pathname.search("vendor") === 1
              ? trans("return_buyer")
              : trans("return_vendor")}
          </Link>
        </div>
      )}
      {/* Return To Vendor Window */}
      <div className="log-out pt-2 position-relative">
        <div className="py-2 d-flex align-items-center gap-3 pointer">
          <span>
            <Logout />
          </span>
          <span className="fs-16-600">{trans("user_profile.logout")}</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
