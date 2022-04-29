import React from "react";
import image from "../../assets/slide1.jpeg";
import truck from "../../assets/dumptruck.jpeg";
import lv from "../../assets/LV.jpeg";
import excavator from "../../assets/excavator.jpeg";
import "./services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">
        <span>OUR SERVICES</span>
      </div>
      <div className="services__title1">
        <span>We Offer Services</span>
      </div>
      <div className="services__services">
        <div className="services__services__card">
          <div className="services__services__card__title">
            <span>Dump Truck</span>
          </div>
          <div className="services__services__card__img">
            <img alt="Loading" src={truck} />
          </div>
          <div className="services__services__card__list">
            <div className="services__services__card__list__list">
              <span>List</span>
            </div>
            <div className="services__services__card__list__item">
              <span>- Item</span>
            </div>
          </div>
        </div>
        <div className="services__services__card">
          <div className="services__services__card__title">
            <span>Excavator</span>
          </div>
          <div className="services__services__card__img">
            <img alt="Loading" src={excavator} />
          </div>
          <div className="services__services__card__list">
            <div className="services__services__card__list__list">
              <span>List</span>
            </div>
            <div className="services__services__card__list__item">
              <span>- Item</span>
            </div>
          </div>
        </div>
        <div className="services__services__card">
          <div className="services__services__card__title">
            <span>LV</span>
          </div>
          <div className="services__services__card__img">
            <img alt="Loading" src={lv} />
          </div>
          <div className="services__services__card__list">
            <div className="services__services__card__list__list">
              <span>List</span>
            </div>
            <div className="services__services__card__list__item">
              <span>- Item</span>
            </div>
          </div>
        </div>
        <div className="services__services__card">
          <div className="services__services__card__title">
            <span>Dump Truck</span>
          </div>
          <div className="services__services__card__img">
            <img alt="Loading" src={image} />
          </div>
          <div className="services__services__card__list">
            <div className="services__services__card__list__list">
              <span>List</span>
            </div>
            <div className="services__services__card__list__item">
              <span>- Item</span>
            </div>
          </div>
        </div>
        <div className="services__services__card">
          <div className="services__services__card__title">
            <span>Dump Truck</span>
          </div>
          <div className="services__services__card__img">
            <img alt="Loading" src={image} />
          </div>
          <div className="services__services__card__list">
            <div className="services__services__card__list__list">
              <span>List</span>
            </div>
            <div className="services__services__card__list__item">
              <span>- Item</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
