import React from "react";
import icon from "../../assets/global.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <span>
          Indonesian national Company that has core business in Construction and
          Mining Industry. Our services are also for various Industrial needs
          such as General Contractor.
        </span>
      </div>
      <div className="about__vision">
        <div className="about__vision__logo">
          <img alt="Loading" src={icon} />
        </div>
        <div className="about__vision__title">
          <span>Our Vision</span>
        </div>
        <div className="about__vision__desc">
          <span>A contracting company that you can really trust</span>
        </div>
      </div>
      <div className="about__mission">
        <div className="about__mission__title">
          <span>Our Mission</span>
        </div>
        <div className="about__mission__desc">
          <span>Earnestly providing benefit for stakeholder infinitely</span>
        </div>
      </div>

      <div className="about__background">
        <div className="about__background__desc">
          <span>
            PT Sinar Bumi Sejahtera is an Indonesian national company engaged in
            the Construction of Mineral and Energy Mining services which has
            been established since June 18, 2004 until now.
          </span>
        </div>
        <div className="about__background__desc">
          <span>
            In line with our mission, i.e to take part in the national
            development, PT. SINAR BUMI SEJAHTERA shall provide its service to
            customer with high quality work, competitive price and reliable
            delivery time
          </span>
        </div>
        <div className="about__background__desc">
          <span>
            Since its operation in the year 2004, up to now PT. SINAR BUMI
            SEJAHTERA has completed some projects. It is our concern to satisfy
            our customers, therefore we commit to fulfill their needs through
            our high commitment, experienced skills employees, and high quality
            equipment.
          </span>
        </div>
        <div className="about__background__desc">
          <span>
            We hope there will be a prosperous corporation with our existing and
            new customers in the years to come and we are Yours faithfully
            expecting forward to have your endless support.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
