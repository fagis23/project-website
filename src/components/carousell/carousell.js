import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";
import slide4 from "../../assets/slide4.jpeg";
import slide5 from "../../assets/slide5.jpeg";
import "./carousell.scss";

const Carousell = () => {
  return (
    <Carousel className="main-slide">
      <div className="main-slide__image">
        <img src={slide1} alt="loading" style={{ width: "100%" }} />
      </div>
      <div className="main-slide__image">
        <img src={slide2} alt="loading" style={{ width: "100%" }} />
      </div>
      <div className="main-slide__image">
        <img src={slide3} alt="loading" style={{ width: "100%" }} />
      </div>
      <div className="main-slide__image">
        <img src={slide4} alt="loading" style={{ width: "100%" }} />
      </div>
      <div className="main-slide__image">
        <img src={slide5} alt="loading" style={{ width: "100%" }} />
      </div>
    </Carousel>
  );
};

export default Carousell;
