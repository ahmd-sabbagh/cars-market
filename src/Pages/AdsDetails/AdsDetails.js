import React, { useEffect } from "react";
import RouteNav from "./Components/RoteNav/RouteNav";
import { trans } from "../../Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Image from "./Components/Image/Image";
import CarDetails from "./Components/CarDetails/CarDetails";
import OtherImages from "./Components/OtherImages/OtherImages";
import Comments from "./Components/Comments/Comments";
import SimilarAds from "./Components/SimilarAds/SimilarAds";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent } from "../../Others/Error";
import { useState } from "react";
import { LoaderState, LoaderStateEdit } from "../../Recoil/All/Loader";
import { useRecoilState } from "recoil";
import { commentsData } from "./Components/GlopalStateRecoil/AllData";

function AdsDetails() {
  const prams = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useRecoilState(LoaderStateEdit);
  const [comments, setComments] = useRecoilState(commentsData);
  // Route Nav
  const routeNav = {
    oneText: trans("ads_details.route_nav.home"),
    oneTo: "/cars-market",
    two: trans("ads_details.route_nav.details"),
  };
  // Route Nav
  const [data, setData] = useState([]);
  const getAdDetails = () => {
    setLoader(false);
    axios
      .get(`${basedDomin}/shop/ads/${prams.Id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setComments(data.data.comments);
        setData(data.data);
        setLoader(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(true);
      });
  };
  // useEffect
  useEffect(() => {
    getAdDetails();
  }, [prams.Id]);
  return (
    <>
      {loader && (
        <div className="AdsDetails py-5">
          <div className="container">
            <div className="mb-5">
              <RouteNav {...routeNav} />
            </div>
            <div className="row g-4 justify-content-between">
              <div className="col-12 col-lg-7">
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <Title Data={data?.ad} />
                  <Image Data={data?.ad} />
                  <CarDetails Data={data?.ad} />
                  <OtherImages />
                  <Comments ownerId={data?.ad?.owner?.id} />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <SimilarAds Ads={data.similar_ads} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdsDetails;
