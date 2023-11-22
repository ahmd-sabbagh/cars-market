import React from "react";
import { Outlet } from "react-router-dom";
import { trans } from "../../../Components/Navbar/Navbar";
import { ReactComponent as Orders } from "./Assets/duplicate.svg";
import { ReactComponent as Myoffers } from "./Assets/chat-alt-2.svg";
import { ReactComponent as MyPoints } from "./Assets/cash.svg";
import { ReactComponent as Subscrib } from "./Assets/sparkles.svg";
import { ReactComponent as FriendsInvitation } from "./Assets/user-add.svg";
import { ReactComponent as Folder } from "./Assets/folder-open.svg";
import { ReactComponent as Blocked } from "./Assets/minus-circle.svg";
import { ReactComponent as User } from "./Assets/user-circle.svg";
import SideBarWindow from "../../../Components/SideBarWindow/SideBarWindow";
import SideBar from "../../../Components/SideBar/SideBar";

function Profile() {
  const LinksData = [
    {
      icon: <Orders />,
      text: trans("vendor.sidebar.order"),
      to: "/vendor/",
    },
    // {
    //   icon: <Myoffers />,
    //   text: trans("vendor.sidebar.my_offer"),
    //   to: "",
    // },
    {
      icon: <MyPoints />,
      text: trans("vendor.sidebar.my_point"),
      to: "/vendor/profile/",
    },
    {
      icon: <Subscrib />,
      text: trans("vendor.sidebar.subbsc"),
      to: "subscriptions",
    },
    {
      icon: <FriendsInvitation />,
      text: trans("vendor.sidebar.friends_ivitations"),
      to: "friends-claims",
    },
    {
      icon: <Folder />,
      text: trans("vendor.sidebar.giving_offers"),
      to: "package-used",
    },
    {
      icon: <Blocked />,
      text: trans("vendor.sidebar.blocked_list"),
      to: "blocked",
    },
    {
      icon: <User />,
      text: trans("vendor.sidebar.setting"),
      to: "setting",
    },
  ];
  return (
    <div className="Profile-Vendor pb-4 py-lg-5">
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

export default Profile;
