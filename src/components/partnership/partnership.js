import React from "react";
import "./partnership.scss";
import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.jpeg";
import partner3 from "../../assets/partner3.jpeg";
import partner4 from "../../assets/partner4.jpeg";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.jpeg";
import partner7 from "../../assets/partner7.jpeg";
import partner8 from "../../assets/partner8.jpg";
import partner9 from "../../assets/partner9.png";
import partner10 from "../../assets/partner10.png";
import partner11 from "../../assets/partner11.jpeg";
import partner12 from "../../assets/partner12.jpeg";

const Partnership = () => {
  return (
    <div className="container">
      <div className="container__title">
        <span>OUR PARTNERSHIP</span>
      </div>
      <div className="container__partner">
        <div className="container__partner__item">
          <img alt="Loading" src={partner1} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner2} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner3} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner4} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner5} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner6} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner7} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner8} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner9} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner10} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner11} />
        </div>
        <div className="container__partner__item">
          <img alt="Loading" src={partner12} />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
