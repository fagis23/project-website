import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.jpg";
import call from "../../assets/call.png";
import location from "../../assets/location.png";
import hamburger from "../../assets/menu.png";
import Carousell from "../carousell/carousell";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
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
                  Free Call
                </span>
                <span className="header__top__location__text1__title2">
                  {" " + "021 - 86905292"}
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
            menuClick == false
              ? "header__bottom__close"
              : "header__bottom__open"
          }
        >
          <div className="header__bottom__title">
            <span>Home</span>
          </div>
          <div className="header__bottom__title">
            <span>About</span>
          </div>
          <div className="header__bottom__title">
            <span>Services</span>
          </div>
          <div className="header__bottom__title">
            <span>Project</span>
          </div>
          <div className="header__bottom__title">
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="header__bottom__desktop">
        <div className="header__bottom__desktop__home">
          <span>Home</span>
        </div>
        <div className="header__bottom__desktop__about">
          <span>About</span>
        </div>
        <div className="header__bottom__desktop__service">
          <span>Services</span>
        </div>
        <div className="header__bottom__desktop__project">
          <span>Project</span>
        </div>
        <div className="header__bottom__desktop__contact">
          <span>Contact Us</span>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
