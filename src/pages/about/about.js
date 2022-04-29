import React from "react";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import AboutUs from "../../components/about/aboutus";

const AboutUsPages = () => {
  return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPages;
