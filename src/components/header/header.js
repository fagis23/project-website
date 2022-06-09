import React, { useEffect, useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.jpg";
import call from "../../assets/call.png";
import location from "../../assets/location.png";
import hamburger from "../../assets/menu.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  const [active, setActive] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setActive(window.location.href.split("/").slice(-1).toString());
  }, [active]);

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__logo">
          <img alt="loading" src={logo} />
        </div>
        <div className="header__top__location">
          <div className="header__top__location__call">
            <div className="header__top__location__call__icon">
              <img alt="loading" src={call} />
            </div>
            <div className="header__top__location__text1">
              <div className="header__top__location__text1__title">
                <span className="header__top__location__text1__title1">
                  Telp
                </span>
                <span className="header__top__location__text1__title2">
                  {" " + "081333000198"}
                </span>
              </div>
              <div className="header__top__location__text1__desc">
                <span>Call us Now 24/7 Customer Support</span>
              </div>
            </div>
          </div>

          <div className="header__top__location__location">
            <div className="header__top__location__location__icon">
              <img alt="loading" src={location} />
            </div>
            <div className="header__top__location__location__text2">
              <div className="header__top__location__location__text2__title">
                <span>Our Location</span>
                <div className="header__top__location__location__text2__desc">
                  <span>
                    Ruko East Point No. 10 Jl. Caman Raya, Jatibening, Bekasi,
                    Jawa Barat, Indonesia, 17412
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__menu">
          <div
            className="header__bottom__menu__hamburger"
            onClick={() => setMenuClick(!menuClick)}
          >
            <img alt="Loading" src={hamburger} />
          </div>
          <div className="header__bottom__menu__title">
            <span>MENU</span>
          </div>
        </div>

        <div
          className={
            menuClick === false
              ? "header__bottom__close"
              : "header__bottom__open"
          }
        >
          <div
            className="header__bottom__title"
            onClick={() => {
              navigate("/home");
            }}
          >
            <span>Home</span>
          </div>
          <div
            className="header__bottom__title"
            onClick={() => {
              navigate("/about");
            }}
          >
            <span>About</span>
          </div>
          <div
            className="header__bottom__title"
            onClick={() => {
              navigate("/services");
            }}
          >
            <span>Services</span>
          </div>
          <div
            className="header__bottom__title"
            onClick={() => {
              navigate("/project");
            }}
          >
            <span>Project</span>
          </div>
          <div
            className="header__bottom__title"
            onClick={() => {
              document.getElementById("footer").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="header__bottom__desktop">
        <div
          className="header__bottom__desktop__home"
          style={active === "home" ? { background: "#eb650d" } : {}}
          onClick={() => {
            navigate("/home");
          }}
        >
          <span>Home</span>
        </div>
        <div
          className="header__bottom__desktop__about"
          style={active === "about" ? { background: "#eb650d" } : {}}
          onClick={() => {
            navigate("/about");
          }}
        >
          <span>About</span>
        </div>
        <div
          className="header__bottom__desktop__service"
          style={active === "services" ? { background: "#eb650d" } : {}}
          onClick={() => {
            navigate("/services");
          }}
        >
          <span>Services</span>
        </div>
        <div
          className="header__bottom__desktop__project"
          style={active === "project" ? { background: "#eb650d" } : {}}
          onClick={() => {
            navigate("/project");
          }}
        >
          <span>Project</span>
        </div>
        <div
          className="header__bottom__desktop__contact"
          onClick={() => {
            document.getElementById("footer").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <span>Contact Us</span>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
