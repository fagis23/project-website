import React, { useState } from "react";
import "./project.scss";
import map from "../../assets/map.png";
import tag from "../../assets/tagmap.png";

const Project = () => {
  const [tag1Hover, setTag1Hover] = useState(false);
  const [tag2hover, setTag2Hover] = useState(false);
  const [tag3hover, setTag3Hover] = useState(false);
  const [tag4hover, setTag4Hover] = useState(false);
  const [tag5hover, setTag5Hover] = useState(false);
  const [tag6hover, setTag6Hover] = useState(false);
  const [tag7hover, setTag7Hover] = useState(false);
  const [tag8hover, setTag8Hover] = useState(false);

  return (
    <div className="project">
      <div className="project__img">
        <div className="project__img__img">
          <img
            className="project__img__img__map"
            src={map}
            alt="Loading"
            height="500px"
          />
          <div
            className="project__img__tag1"
            onMouseEnter={() => setTag1Hover(true)}
            onMouseLeave={() => setTag1Hover(false)}
            onClick={() => {
              document.getElementById("kalimantan").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag2"
            onMouseEnter={() => setTag2Hover(true)}
            onMouseLeave={() => setTag2Hover(false)}
            onClick={() => {
              document.getElementById("kalimantan").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag3"
            onMouseEnter={() => setTag3Hover(true)}
            onMouseLeave={() => setTag3Hover(false)}
            onClick={() => {
              document.getElementById("sumatera").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag4"
            onMouseEnter={() => setTag4Hover(true)}
            onMouseLeave={() => setTag4Hover(false)}
            onClick={() => {
              document.getElementById("kalimantan").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag5"
            onMouseEnter={() => setTag5Hover(true)}
            onMouseLeave={() => setTag5Hover(false)}
            onClick={() => {
              document.getElementById("sumatera").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag6"
            onMouseEnter={() => setTag6Hover(true)}
            onMouseLeave={() => setTag6Hover(false)}
            onClick={() => {
              document.getElementById("papua").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag7"
            onMouseEnter={() => setTag7Hover(true)}
            onMouseLeave={() => setTag7Hover(false)}
            onClick={() => {
              document.getElementById("kalimantan").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>
          <div
            className="project__img__tag8"
            onMouseEnter={() => setTag8Hover(true)}
            onMouseLeave={() => setTag8Hover(false)}
            onClick={() => {
              document.getElementById("kalimantan").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={tag} alt="Loading" />
          </div>

          <div
            className="project__img__detail1"
            style={tag1Hover ? { display: "block" } : { display: "none" }}
          >
            <span>Sungai Danau</span>
          </div>
          <div
            className="project__img__detail2"
            style={tag2hover ? { display: "block" } : { display: "none" }}
          >
            <span>Air Upas</span>
          </div>
          <div
            className="project__img__detail3"
            style={tag2hover ? { display: "block" } : { display: "none" }}
          >
            <span>Marau</span>
          </div>
          <div
            className="project__img__detail4"
            style={tag2hover ? { display: "block" } : { display: "none" }}
          >
            <span>Sekakai</span>
          </div>
          <div
            className="project__img__detail5"
            style={tag2hover ? { display: "block" } : { display: "none" }}
          >
            <span>Riam Danau</span>
          </div>
          <div
            className="project__img__detail6"
            style={tag3hover ? { display: "block" } : { display: "none" }}
          >
            <span>Tanjung Pulai</span>
          </div>
          <div
            className="project__img__detail7"
            style={tag4hover ? { display: "block" } : { display: "none" }}
          >
            <span>Tayan</span>
          </div>
          <div
            className="project__img__detail8"
            style={tag5hover ? { display: "block" } : { display: "none" }}
          >
            <span>Muara Enim</span>
          </div>
          <div
            className="project__img__detail9"
            style={tag6hover ? { display: "block" } : { display: "none" }}
          >
            <span>Imbio</span>
          </div>
          <div
            className="project__img__detail10"
            style={tag7hover ? { display: "block" } : { display: "none" }}
          >
            <span>Muara Teweh</span>
          </div>
          <div
            className="project__img__detail11"
            style={tag8hover ? { display: "block" } : { display: "none" }}
          >
            <span>Berau</span>
          </div>
        </div>
      </div>
      <div className="project__exp">
        <div className="project__exp__title">
          <h1>Project Experiences</h1>
        </div>
        <div className="project__exp__kal" id="kalimantan">
          <div className="project__exp__kal__title">
            <h2>Kalimantan</h2>
          </div>
          <div className="project__exp__kal__card">
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Mine Coal</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Air Upas - Ketapang - West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harita Prima Abadi Mineral</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC 300, 2 Unit</li>
                  <li>Excavator Komatsu PC200, 4 Unit</li>
                  <li>Bulldozer Komatsu D85 SS, 2 Unit</li>
                  <li>Dumptruck Hino</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>January 2005 - January 2006</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>
                  {" "}
                  Construction Of Mine Hauling Road 28 Km (Formally PT. Karunia
                  Bumi Sejahtera)
                </span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Air Upas – Ketapang – West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harita Prima Abadi Mineral</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Bulldozer Komatsu D85SS, 2 Unit</li>
                  <li>Bulldozer Shantui SD23, 3 Unit</li>
                  <li>Motor Grader Komatsu MG GD330, 2 Unit</li>
                  <li>Compactor Vibro JV40DW-5, 4 Unit</li>
                  <li>Dumptruck Hino,10 Unit</li>
                  <li>Dumptruck Howo, 10 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>February 2008 – February 2009</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Mining Galena Production 6000 Tons/Month</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Marau – Ketapang – West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Lanang Bersatu</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC 200, 4Unit</li>
                  <li>Excavator Komatsu PC 200 + Breaker, 2 Unit</li>
                  <li>Bulldozer Komatsu D85SS, 1 Unit</li>
                  <li>Motor Grader Komatsu MG GD330, 1 Unit</li>
                  <li>Compactor Vibro JV40DW-5, 1 Unit</li>
                  <li>Dumptruck Nissan, 5 unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>February 2009 – October 2009</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Mining Bauxsit Production 200.000 Tons/Month</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Air Upas - Ketapang - West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harita Prima Abadi Mineral</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Zaxis 330, 2 Unit</li>
                  <li>Excavator Komatsu PC200, 2 Unit</li>
                  <li>Bulldozer Komatsu D85SS, 2 Unit</li>
                  <li>Compactor Vibro SV 510, 1 Unit</li>
                  <li>Dumptruck Hino FM260Ti, 20 Unit</li>
                  <li>Dumptruck Nissan CWM 330, 5 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>March 2009 – Desember 2013</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Construction Of Mine Hauling Road 6.4 Km</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Sekakai – Ketapang – West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harita Prima Abadi Mineral</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC 300, 2 Unit</li>
                  <li>Excavator Kobelco SK 200, 3 Unit</li>
                  <li>Bulldozer Komatsu D85SS, 2 Unit</li>
                  <li>Bulldozer Shantui SD23, 3 Unit</li>
                  <li>Motor Grader Komatsu MG GD330, 2 Unit</li>
                  <li>Compactor Vibro JV40DW-5, 4 Unit</li>
                  <li>Dumptruck Hino, 7 Unit Howo 5 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>March 2009 – July 2009</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Construction Of Mine Hauling Road 10 Km</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Riam Danau – Ketapang – West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harita Prima Abadi Mineral</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC 300, 2 Unit</li>
                  <li>Excavator Kobelco SK 200, 3 Unit</li>
                  <li>Bulldozer Komatsu D85SS, 2 Unit</li>
                  <li>Bulldozer Shantui SD23, 3 Unit</li>
                  <li>Motor Grader Komatsu MG GD330, 2 Unit</li>
                  <li>Compactor Vibro JV40DW-5, 4 Unit</li>
                  <li>Dumptruck Hino & Howo</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>August 2009 – February 2010</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Mining Bauxsit Production 150.000 tons/month</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Tayan – Sangau – West Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Cipta Sumber Daya Mandiri</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC300, 3 Unit</li>
                  <li>Buldozer Komatsu D85SS, 2 Unit</li>
                  <li>Compactor Vibro SV 510 , 1 Unit</li>
                  <li>Dumptruck Hino FM 260Ti, 10 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>October 2009 – October 2011</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Rental Heavy Equipment</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Muara Teweh – Central Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Harmoni Panca Utama</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komtsu PC200, 2 Unit</li>
                  <li>Buldozer Komatsu D85SS, 2 Unit</li>
                  <li>Excavator Doosan S500 LCV , 1 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span> Maret 2013 – Oktober 2015</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>
                  Hauling Coal Mining, Rental Heavy Equipment & Road Maintenance
                </span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Berau – East Kalimantan</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Kaltim Jaya Bara</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Komatsu PC200, 2 Unit</li>
                  <li>Excavator Hitachi ZX 200, 1 Unit</li>
                  <li>Excavator Hitachi ZX 210F, 1 Unit</li>
                  <li>Motor Grader KMTS MG511A, 12Unit</li>
                  <li>Vibro Bomag BW211D-40, 2 Unit</li>
                  <li>Weloder WA 500-3A Komatsu, 1 Unit</li>
                  <li>Water Tangki DT Hino , 4 Unit</li>
                  <li>Excavator Hitachi ZX350, 1 Unit</li>
                  <li>Dumptruck Hino , 47 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span> Maret 2014 – Present</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project__exp__kal" id="sumatera">
          <div className="project__exp__kal__title">
            <h2>Sumatera</h2>
          </div>
          <div className="project__exp__kal__card">
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Harvesting and Plantation</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>
                  Location: Tanjung Pulai– Ogan Komering Hilir – South Sumatra
                </span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Sebangun Bumi Andalas</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Hitachi ZX 110, 7 Unit</li>
                  <li>Excavator Hitachi ZX 210, 5 Unit</li>
                  <li>Chan Saw Husquarna 365, 75 Unit</li>
                  <li>Sampan Darat, 10 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>August 2009 – Desember 2011</span>
              </div>
            </div>
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Industrial Forest</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Muara Enim, South Sumatra</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Musi Hutan Persada</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Escavator Hitachi Ex110, 4 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>September 2010 – Desember 2012</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project__exp__kal" id="papua">
          <div className="project__exp__kal__title">
            <h2>Papua</h2>
          </div>
          <div className="project__exp__kal__card">
            <div className="project__exp__kal__card__item">
              <div className="project__exp__kal__card__item__scope">
                <span>Palm Oil Plantation</span>
              </div>
              <div className="project__exp__kal__card__item__loc">
                <span>Location: Imbio - PNG - Papua New Guinea</span>
              </div>
              <div className="project__exp__kal__card__item__own">
                <span>Project Owners: PT. Bewani Oil Palm Plantation</span>
              </div>
              <div className="project__exp__kal__card__item__equip">
                <span>Equipment quantity:</span>
                <ul>
                  <li>Excavator Hitachi Zx210, 4 Unit</li>
                  <li>Buldozer Komatsu D85SS, 8 Unit</li>
                  <li>Motor Grader MG330 , 1 Unit</li>
                  <li>Compactor SV515, 1 Unit</li>
                  <li>DT Mitshubishi, 4 Unit</li>
                </ul>
              </div>
              <div className="project__exp__kal__card__item__period">
                <span>September 2010 – Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
