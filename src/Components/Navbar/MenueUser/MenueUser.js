import React from "react";
import { ReactComponent as Setting } from "../Assets/menu/user-circle.svg";
import { ReactComponent as Order } from "../Assets/menu/duplicate.svg";
import { ReactComponent as Requestes } from "../Assets/menu/chat-alt-2.svg";
import { ReactComponent as Ads } from "../Assets/menu/document-duplicate.svg";
import { ReactComponent as Message } from "../Assets/menu/chat-alt.svg";
import { ReactComponent as LogOut } from "../Assets/menu/log-out-02.svg";
import { ReactComponent as Arrow } from "../Assets/menu/arrow.svg";
import { trans } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./MenueUser.css";
import { IoCarSportOutline } from "react-icons/io5";

function MenueUser({ menuUser }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigat = useNavigate();
  const data = [
    {
      icon: <Setting />,
      text: trans("home.nav.menu.setting"),
      link: "/my-profile/",
    },
    {
      icon: (
        <IoCarSportOutline style={{ color: "#F2C94C", fontSize: "18px" }} />
      ),
      text: trans("home.nav.menu.cars"),
      link: "/my-profile/my-cars",
    },
    {
      icon: <Order />,
      text: trans("home.nav.menu.orders"),
      link: "/my-profile/my-order",
    },
    {
      icon: <Requestes />,
      text: trans("home.nav.menu.requstes"),
      link: "/my-profile/requestes-message",
    },
    {
      icon: <Ads />,
      text: trans("home.nav.menu.ads"),
      link: "/my-profile/my-ads",
    },
    {
      icon: <Message />,
      text: trans("home.nav.menu.message"),
      link: "/my-profile/harag-message",
    },
  ];
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigat("/");
    window.location.reload();
  };
  return (
    <div
      ref={menuUser}
      className={`position-absolute r-10 p-2 text-white MenueUser d-flex flex-column gap-2 overflow-hidden
      }`}
      data-aos="fade-left"
      data-aos-duration="500"
    >
      <>
        {data.map((item, idx) => (
          <Link
            className="p-2 d-flex align-items-center justify-content-between text-black"
            to={item.link}
            key={idx}
            data-aos="fade-left"
            data-aos-duration={`1${idx}00`}
          >
            <div className="d-flex gap-2 align-items-center">
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </div>
            <span className="arrow">
              <Arrow />
            </span>
          </Link>
        ))}
        {/* Return To Vendor Window */}
        {user?.type === "vendor" && (
          <div
            className="return-user border-top"
            data-aos="fade-left"
            data-aos-duration={`1700`}
          >
            <Link className="text-black" to="/vendor">
              {trans("return_vendor")}
            </Link>
          </div>
        )}

        {/* Return To Vendor Window */}
        {/* Log Out */}
        <div
          className="p-2 border-top d-flex align-items-center justify-content-between"
          data-aos="fade-left"
          data-aos-duration={`1700`}
        >
          <div
            className="d-flex align-items-center gap-2"
            onClick={() => {
              logOut();
            }}
          >
            <LogOut />
            <button className="bg-transparent border-0 d-block">
              {trans("home.nav.logout")}
            </button>
          </div>
          <span className="arrow-icon">
            <Arrow />
          </span>
        </div>
        {/* Log Out */}
      </>
    </div>
  );
}

export default MenueUser;
