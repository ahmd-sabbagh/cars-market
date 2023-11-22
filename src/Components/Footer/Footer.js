import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { ReactComponent as Instagram } from "./Assets/instagram.svg";
import { ReactComponent as Linked } from "./Assets/linkd.svg";
import { ReactComponent as Facebook } from "./Assets/facebook.svg";
import { ReactComponent as Twitter } from "./Assets/twitter.svg";
import { Link, NavLink } from "react-router-dom";
import { trans } from "../Navbar/Navbar";
function Footer() {
  const linksText = [
    {
      text: trans("footer.links.home"),
      to: "",
    },
    {
      text: trans("footer.links.car-auction"),
      to: "/cars-market",
    },
    {
      text: trans("footer.links.about-us"),
      to: "/about-us",
    },
    {
      text: trans("footer.links.serves"),
      to: "/about-carz",
    },
    {
      text: trans("footer.links.contact-us"),
      to: "/contact-us",
    },
  ];
  const linksSocial = [
    {
      icon: <Twitter />,
      to: "",
    },
    {
      icon: <Facebook />,
      to: "",
    },
    {
      icon: <Linked />,
      to: "",
    },
    {
      icon: <Instagram />,
      to: "",
    },
  ];
  return (
    <div className="Footer mt-4 pt-5">
      <div className="container">
        <div className="d-flex flex-column gap-4 gap-md-5 align-items-center">
          <div className="logo">
            <Logo />
          </div>
          <div className="link-bar d-flex gap-4 gap-md-5 flex-wrap justify-content-center">
            {linksText.map((item, idx) => (
              <NavLink
                className={`${({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"} `}
                key={idx}
                to={item.to}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
          <div className="links d-flex gap-5">
            <NavLink
            to={""}
              className={`${({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"} `}
            >
              {trans("footer.links.uses")}
            </NavLink>
            <NavLink
            to={""}
              className={`${({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"} `}
            >
              {trans("footer.links.questions")}
            </NavLink>
          </div>
          <div className="footer-footer d-flex align-items-center justify-content-between full-width border-top py-4">
            <span className="text">{trans("footer.footer-footer")}</span>
            <div className="social d-flex gap-3 gap-md-4 align-items-center">
              {linksSocial.map((item, idx) => (
                <Link to={item.to} key={idx}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
