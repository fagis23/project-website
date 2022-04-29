import React from "react";
import logo from "../../assets/logo.jpg";
import linkedin from "../../assets/linkedin.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__logo">
          <img alt="Loading" src={logo} />
          <span>PT SINAR BUMI SEJAHTERA</span>
        </div>
        <div className="footer__left__desc">
          <span>
            Ruko East Point No. 10 Jl. Caman Raya, Jatibening, Bekasi, Jawa
            Barat, Indonesia, 17412
          </span>
        </div>
        <div className="footer__left__icon">
          <img alt="Loading" src={linkedin} />
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__title">
          <div className="footer__right__title__item">
            <span>Hubungi Kami</span>
          </div>
          <div className="footer__right__title__item">
            <span>Email: sinarbumisejahtera@gmail.com</span>
          </div>
          <div className="footer__right__title__item">
            <span>Telp: 021-86905292 </span>
          </div>
          <div className="footer__right__title__item">
            <span>Fax: 021- 86906002 </span>
          </div>
          <div className="footer__right__title__copy">
            <span>&copy;2020 PT Sinar Bumi Sejahtera </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
