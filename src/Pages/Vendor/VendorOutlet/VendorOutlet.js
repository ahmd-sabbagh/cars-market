import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  brandsCarsFromApi,
  repeatCountries,
} from "../../../Recoil/All/GeneralData";
import axios from "axios";
import { basedDomin } from "../../../Api/basedDomin";
import { ErrorComponent } from "../../../Others/Error";
import { useEffect } from "react";
import AOS from "aos";
import { vendorMainLoader } from "../GlopalStateRecoil/AllData";
import MainLoader from "../../../Components/MainLoader/MainLoader";
import ScrollToTop from "../../../ScrollToTopRouter/ScrollToTopRouter";
import { generateYears } from "../../../Recoil/All/GenerateYears";
import GetYears from "../../../Components/GetYears/GetYears";

function VendorOutlet() {
  const navigate = useNavigate();
  const language = localStorage.getItem("i18nextLng");
  const vendorLoader = useRecoilValue(vendorMainLoader);
  // General State
  const [countriesState, setCountriesState] = useRecoilState(repeatCountries);
  const [brandsCar, setBrandsCar] = useRecoilState(brandsCarsFromApi);
  const [years, setYears] = useRecoilState(generateYears);
  const getGeneralData = () => {
    axios
      .get(`${basedDomin}/public/data/all`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setBrandsCar(data.data.brands_car);
        setCountriesState(data.data.countries);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // General State
  useEffect(() => {
    GetYears(setYears);
    getGeneralData(); 
    AOS.init();
  }, []);
  return (
    <>
      {vendorLoader && <MainLoader />}
      <div
        className="Vendor position-relative"
        dir={language === "ar" ? "rtl" : "ltr"}
        style={{ minHeight: "100vh" }}
      >
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default VendorOutlet;
