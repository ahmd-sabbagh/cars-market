import React, { useEffect } from "react";
import { trans } from "../../../../../Components/Navbar/Navbar";
import Header from "../Header/Header";
import CardInvitation from "./Components/CardInvitation";
import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../../../../Others/Error";
import { useState } from "react";
import "./FriendsClaims.css"

function FriendsClaims() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState("");
  // Header Data
  const headerData = {
    title: trans("vendor.FriendsClaims.title"),
    desc: trans("vendor.FriendsClaims.desc"),
  };
  // Header Dat
  // Card Info
  const cardInfo = [
    {
      title: trans("vendor.FriendsClaims.card_one.link_invite"),
      desc: trans("vendor.FriendsClaims.card_one.desc"),
      link: data?.invitation_code_link,
    },
    {
      title: trans("vendor.FriendsClaims.card_two.link_invite"),
      desc: trans("vendor.FriendsClaims.card_two.desc"),
      link: data?.invitation_code,
    },
    {
      title: trans("vendor.FriendsClaims.card_three.link_invite"),
      desc: trans("vendor.FriendsClaims.card_three.desc"),
      image: data?.qr_code,
    },
  ];
  // Card Info
  const getinvitationCode = () => {
    axios
      .get(`${basedDomin}/vendor/invitation_code`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  useEffect(() => {
    getinvitationCode();
  }, []);
  return (
    <div className="FriendsClaims p-md-3 p-md-4">
      <Header {...headerData} />
      <div className="mt-5 bg-white p-3 p-md-4 r-07 d-flex flex-column gap-3 gap-md-4">
        {cardInfo.map((item, idx) => (
          <CardInvitation {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default FriendsClaims;
