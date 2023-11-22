import React from "react";
import "./Ad.css";
import moment from "moment";
import "moment/locale/ar";
import { ReactComponent as User } from "./Assets/user.svg";
import { ReactComponent as Chat } from "./Assets/chat-alt-2.svg";
import { ReactComponent as Location } from "./Assets/location-marker.svg";
import { trans } from "../../../../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import DotsMenu from "../../../../../Components/DotsMenu/DotsMenu";
import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../../../../Others/Error";
import { myAdsMainData } from "../../../../UserProfile/Pages/MyAds/GlopalStateRecoil/AllData";
import { useRecoilState } from "recoil";
import { LoaderStateEdit } from "../../../../../Recoil/All/Loader";

function Ad({
  title,
  created_at = "2023-09-07T13:20:12.000000Z",
  owner = {},
  comments_count,
  image_main,
  city,
  id,
  type = "",
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(myAdsMainData);
  const [loader, setLoader] = useRecoilState(LoaderStateEdit);
  // Time
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(created_at).locale("ar").fromNow();
  } else {
    timeago = moment(created_at).fromNow();
  }
  // Time
  // Function Delete Ad
  const submitDelete = () => {
    setLoader(false);
    axios
      .post(
        `${basedDomin}/shop/ads/my-ads/delete/${id}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        SuccsesComponent(data.message);
        setData(data.data);
        setLoader(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(true);
      });
  };
  // Function Delete Ad

  return (
    <Link
      to={type === "" ? `/ad-details/${id}` : ""}
      className="Ad MainAd transion-5 bg-white r-10 d-flex justify-content-between position-relative"
      data-aos="fade-up"
      data-aos-duration={`1000`}
      data-aos-offset="50"
    >
      {/* Control */}
      {type === "profile" && (
        <div className="Menu d-flex justify-content-end">
          <DotsMenu>
            <div
              onSubmit={submitDelete}
              className="list d-flex flex-column gap-2 p-2 fs-12-400"
            >
              <Link to={`/ad-details/${id}`}>
                {trans("cars_market.body.details")}
              </Link>
              <Link to={`/add-edit/${id}`}>
                {trans("cars_market.body.edit")}
              </Link>
              <button
                type="button"
                className="border-0 bg-transparent"
                onClick={() => {
                  submitDelete();
                }}
              >
                {trans("order_spare.delete")}
              </button>
            </div>
          </DotsMenu>
        </div>
      )}
      {/* Text */}
      <div className="text p-3 d-flex flex-column justify-content-between">
        <div className="top d-flex flex-column gap-2">
          <h3>{title}</h3>
          <p>{timeago}</p>
        </div>
        <div className="bottom d-flex flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <span>
              <User />
            </span>
            <span>{owner?.name}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span>
              <Chat />
            </span>
            <span>{`${comments_count} ${
              comments_count > 10
                ? trans("cars_market.body.comment")
                : trans("cars_market.body.comments")
            }`}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span>
              <Location />
            </span>
            <span>{city}</span>
          </div>
        </div>
      </div>
      {/* Image */}
      <div
        className="image"
        style={{ backgroundImage: `url(${image_main})` }}
      ></div>
    </Link>
  );
}

export default Ad;
