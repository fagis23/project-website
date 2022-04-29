import React from "react";
import About from "../../components/about/about";
import Carousell from "../../components/carousell/carousell";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Partnership from "../../components/partnership/partnership";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousell />
      <About />
      <Partnership />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
