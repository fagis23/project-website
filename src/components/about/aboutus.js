import React from "react";
import About from "./about";
import foto from "../../assets/slide5.jpeg";
import "./aboutus.scss";
import Partnership from "../partnership/partnership";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="aboutus">
        <div className="aboutus__img">
          <img src={foto} alt="loading" />
        </div>
        <div className="aboutus__title">
          <div className="aboutus__title__title">
            <span>Moto</span>
          </div>
          <div className="aboutus__title__desc">
            <span>
              Take care with productivity, Reliable Contracting Company,
              Understand become capability engineering, Safety is our priority,
              To preserve the good environment.
            </span>
          </div>
        </div>
      </div>
      <About />
      <Partnership />
    </React.Fragment>
  );
};

export default AboutUs;
