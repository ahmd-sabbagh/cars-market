import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { ReactComponent as ArabicFlag } from "./Assets/sudiFlag.svg";
import { ReactComponent as EnglishFlag } from "./Assets/kingdomFlag.svg";
import { ReactComponent as Chat } from "./Assets/messages.svg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { FaHome, FaUser } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { openFilterOrderVendor } from "../GlopalStateRecoil/AllData";

function Navbar() {
  const navigate = useNavigate();
  // // State Open User Window
  const [windowOpen, setWindoOpen] = useState(true);
  const [Open, setOpen] = useState(false);
  // // State Open User Window
  // Ref
  const menuUser = useRef();
  const menuUserClick = useRef();
  const menuLanguage = useRef();
  const menuLanguageClic = useRef();
  // Ref
  // Lo
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/register/sign-in");
    window.location.reload();
  };
  useEffect(() => {
    // MenueUser
    const menuUserHandler = (e) => {
      if (
        !menuUser?.current?.contains(e.target) &&
        !menuUserClick?.current?.contains(e.target)
      ) {
        setWindoOpen(true);
      }
    };
    const menuLanguageHandler = (e) => {
      if (
        !menuLanguage?.current?.contains(e.target) &&
        !menuLanguageClic?.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", menuUserHandler);
    document.addEventListener("mousedown", menuLanguageHandler);
    return () => {
      document.removeEventListener("mousedown", menuUserHandler);
      document.removeEventListener("mousedown", menuLanguageHandler);
    };
  }, []);
  var { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const userAccount = JSON.parse(localStorage.getItem("user"));
  // Open Filter Menu
  const [openFilter, setOpenFilter] = useRecoilState(openFilterOrderVendor);
  // Open Filter Menu
  return (
    <div className="NavbarVendor">
      <div className="container">
        <div className="cont d-flex align-items-center justify-content-between gap-4">
          {/* Logo */}
          <div className="logo-icon d-flex align-items-center gap-4 py-2">
            <div
              className={`icon pointer ${openFilter && "icon-outline"}`}
              onClick={() => {
                setOpenFilter(!openFilter);
              }}
            >
              <MdOutlineMenu style={{ fontSize: "30px" }} />
            </div>
            <Link className="logo">
              <Logo />
            </Link>
          </div>
          {/* Ads */}
          <div className="ads flex-grow-1 d-none d-md-flex text-center flex-c">
            <span>مساحة اعلانية</span>
          </div>
          {/* user profile */}
          <div className="user-profile py-2">
            <div className="login-language  d-flex align-items-center gap-3">
              {userAccount ? (
                <div
                  className="userAccount position-relative d-flex align-items-center gap-2 pointer"
                  onClick={() => {
                    setWindoOpen(!windowOpen);
                  }}
                  ref={menuUserClick}
                >
                  <div className="image overflow-hidden">
                    <img src={userAccount?.image} alt="" />
                  </div>
                  <span className="name">
                    {userAccount?.name?.split(" ")[0]}
                  </span>
                  <div
                    className={`icon transion-5 flex-c ${
                      !windowOpen && "icon-rotate"
                    }`}
                  >
                    <IoIosArrowDown />
                  </div>
                  {/* window */}
                  <div
                    className={`position-absolute useraccount-window r-10 p-2 text-white ${
                      windowOpen && "d-none"
                    }`}
                    ref={menuUser}
                  >
                    <Link
                      to={""}
                      className="d-flex align-items-center gap-2 pointer py-1 px-2 text-black"
                    >
                      <FaHome />
                      {t("home.nav.home")}
                    </Link>
                    <Link
                      to={"profile/"}
                      className="mt-2 d-flex align-items-center gap-2 pointer py-1 px-2 text-black"
                    >
                      <FaUser />
                      {t("home.nav.windowUser.my_account")}
                    </Link>
                    <div
                      className="logout mt-2 d-flex align-items-center gap-2 pointer py-1 px-2 text-black"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <IoExit />
                      {t("home.nav.windowUser.logOut")}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to={"/register/sign-in "} className="login flex-c">
                  {t("home.nav.login")}
                </Link>
              )}

              {/* Language */}
              <div
                className="language-cont d-flex align-items-center gap-2 pointer position-relative"
                onClick={() => {
                  setOpen(!Open);
                }}
                ref={menuLanguageClic}
              >
                <div className="language flex-c">
                  {lang === "ar" ? (
                    <ArabicFlag />
                  ) : (
                    <EnglishFlag style={{ transform: "scale(1.5)" }} />
                  )}
                </div>
                <div
                  className={`arrow-icon transion-5 flex-c ${
                    Open && "icon-rotate"
                  }`}
                >
                  <IoIosArrowDown />
                </div>
                {/* Language Menu */}
                <div
                  className={`menu position-absolute bg-white r-10 py-2 ${
                    Open ? "d-blok" : "d-none"
                  }`}
                  ref={menuLanguage}
                >
                  <div
                    className="en d-flex align-items-center gap-2 px-4 py-2"
                    onClick={() => {
                      setOpen(!Open);
                      window.localStorage.i18nextLng = "en";
                      window.location.reload(false);
                    }}
                  >
                    <span className="icon">
                      <EnglishFlag />
                    </span>
                    {t("home.nav.english")}
                  </div>
                  <div
                    className="ar d-flex align-items-center gap-2 px-4 py-2"
                    onClick={() => {
                      setOpen(!Open);
                      window.localStorage.i18nextLng = "ar";
                      window.location.reload(false);
                    }}
                  >
                    <span className="icon">
                      <ArabicFlag />
                    </span>
                    {t("home.nav.arabic")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ads phone */}
        <div className="ads flex-grow-1 d-md-none"></div>
      </div>
    </div>
  );
}

export default Navbar;
