import React from "react";
import Panner from "./Panner/Panner";
import "./Home.css";
import SiteOptions from "./SiteOptions/SiteOptions";
import Orders from "./Orders/Orders";
import Applications from "./Applications/Applications";
import AboutCars from "./AboutCars/AboutCars";
import CompanyLogos from "./CompanyLogos/CompanyLogos";
import { useResizeDetector } from 'react-resize-detector';
function Home() {
  const { width, height, ref } = useResizeDetector();
  // console.log(width + 8);
  return (
    <div className="Home" ref={ref}>
      <Panner />
      <SiteOptions />
      <Orders />
      <Applications />
      <AboutCars />
      <CompanyLogos />
    </div>
  );
}

export default Home;
