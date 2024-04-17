import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import imgBannerAbout from "../images/aboutBanner.png";
import Collapse from "../components/Collapse";
import CollapseData from "../about.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />
        <div className="collapse">
          {CollapseData.map((item) => (
            <Collapse key={item.id} content={item.content} title={item.title} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
