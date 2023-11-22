import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { ReactComponent as ArabicFlag } from "./Assets/sudiFlag.svg";
import { ReactComponent as EnglishFlag } from "./Assets/kingdomFlag.svg";
import { ReactComponent as Chat } from "./Assets/messages.svg";
import { ReactComponent as Call } from "./Assets/call.svg";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useRef } from "react";
import MenueUser from "./MenueUser/MenueUser";

function Navbar() {
  const navigat = useNavigate();
  const menuUser = useRef();
  const menuUserClick = useRef();
  const menuLanguage = useRef();
  const menuLanguageClic = useRef();
  // // State Open User Window
  const [windowOpen, setWindoOpen] = useState(true);
  const [Open, setOpen] = useState(false);
  // // State Open User Window
  // // State login
  const [login, setLogin] = useState(false);
  // // State login

  const userAccount = JSON.parse(localStorage.getItem("user"));
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
  // Local Storage
  var { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className="navbar-main bg-white position-relative ">
      <div className="nav-position flex-c py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0 flex-row-reverse flex-lg-row">
            {/* Logo Brand */}
            <Link className="navbar-brand p-0 m-0" to={"/"}>
              <div className="logo-image">
                <Logo />
              </div>
            </Link>
            {/* Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              {/* Links */}
              <ul className="navbar-nav mx-auto py-3 py-lg-0 align-items-center gap-3">
                {/* Home */}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to={"/"}
                  >
                    {t("home.nav.home")}
                  </NavLink>
                </li>
                {/* Market */}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"/cars-market"}
                  >
                    {t("home.nav.whoUs")}
                  </NavLink>
                </li>
              </ul>
              {/* Login And Language and Notification */}
              <div className="login-language d-flex align-items-center gap-2 gap-sm-4 justify-content-center">
                {/* Chat */}
                <Link>
                  <Chat />
                </Link>
                {/* Contact Us */}
                <Link
                  to={"/contact-us"}
                  className=" d-flex align-items-center gap-2 contact-us"
                >
                  <span>
                    <Call />
                  </span>
                  <span>{t("home.nav.contact-us")}</span>
                </Link>
                {/* log in */}
                {userAccount ? (
                  <div
                    className="userAccount d-flex gap-2 align-items-center position-relative pointer"
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
                    {!windowOpen && <MenueUser menuUser={menuUser} />}
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export const trans = t;

export default Navbar;
