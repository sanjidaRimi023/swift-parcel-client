import React from "react";
import Banner from "./Banner";
import HowWork from "./HowWork";
import OurServices from "./OurServices";
import ClientSlider from "./ClientSlider";
import Benefit from "./Benefit";
import Marchant from "./Marchant";
import FAQ from "./FAQ";
import Pricing from "../Pricing";

const Home = () => {
  return (
    <>
      <Banner />
      <HowWork />
      <OurServices />
      <ClientSlider />
      <Benefit />
      <Marchant />
      <Pricing/>
      <FAQ />
    </>
  );
};

export default Home;
