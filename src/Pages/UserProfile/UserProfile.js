import React from "react";
import SideBarWindow from "../../Components/SideBarWindow/SideBarWindow";
import SideBar from "../../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { ReactComponent as User } from "./Assets/user-circle.svg";
import { IoCarSportOutline } from "react-icons/io5";
import { ReactComponent as Order } from "./Assets/duplicate.svg";
import { ReactComponent as Requistes } from "./Assets/chat-alt-2.svg";
import { ReactComponent as MyAds } from "./Assets/document-duplicate.svg";
import { ReactComponent as Message } from "./Assets/chat-alt.svg";
import { ReactComponent as Blocked } from "./Assets/minus-circle.svg";
import { trans } from "../../Components/Navbar/Navbar";

function UserProfile() {
  const LinksData = [
    {
      icon: <User />,
      text: trans("user_profile.acc_setting"),
      to: "/my-profile/",
    },
    {
      icon: <IoCarSportOutline />,
      text: trans("user_profile.my_car"),
      to: "my-cars",
    },
    {
      icon: <Order />,
      text: trans("user_profile.my_order"),
      to: "my-order",
    },
    {
      icon: <Requistes />,
      text: trans("user_profile.requestes"),
      to: "requestes-message",
    },
    {
      icon: <MyAds />,
      text: trans("user_profile.my_ads"),
      to: "my-ads",
    },
    {
      icon: <Message />,
      text: trans("user_profile.message"),
      to: "harag-message",
    },
    {
      icon: <Blocked />,
      text: trans("vendor.sidebar.blocked_list"),
      to: "blocked",
    },
  ];
  return (
    <div className="UserProfile py-4 py-md-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <SideBarWindow>
              <SideBar linksData={LinksData} />
            </SideBarWindow>
          </div>
          <div
            className="col-12 col-lg-9 r-10"
            style={{ backgroundColor: "rgb(245 245 245 / 50%)" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
