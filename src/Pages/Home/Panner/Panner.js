import axios from "axios";
import { useState } from "react";
import Slider from "react-slick";
import { basedDomin } from "../../../Api/basedDomin";
import { ErrorComponent } from "../../../Others/Error";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Panner.css";

function Panner() {
  const navigate = useNavigate();
  const [adsImage, setAdsImage] = useState([]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: adsImage.length > 1 ? true : false,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  // Get Bar Ads
  const getBarAds = () => {
    axios
      .get(`${basedDomin}/public/data/services-and-ads`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setAdsImage(data.data.ads);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Get Bar Ads
  useEffect(() => {
    getBarAds();
  }, []);
  return (
    <div className="Panner mt-3">
      <div className="container-fluid full-height text-white">
        <Slider {...settings}>
          {adsImage.map((item, idx) => (
            <div key={idx} className="full-height">
              <div
                className="bg-image full-height "
                style={{ backgroundImage: `url(${item})` }}
              >
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Panner;
