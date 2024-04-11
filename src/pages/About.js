import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import imgBannerAbout from "../images/aboutBanner.png";
import Collapse from "../components/Collapse";

const About = () => {
  //Temporaire
  // Supposons que les données de Collapse soient définies ici ou récupérées d'une autre source
  const collapseData = [
    { id: 1, title: "Title 1", content: "Content 1" },
    { id: 2, title: "Title 2", content: "Content 2" },
    { id: 1, title: "Title 3", content: "Content 3" },
    { id: 2, title: "Title 4", content: "Content 4" },
    // Fiabilité, Respect, Service et Sécurité
  ];

  const renderCollapses = () => {
    return collapseData.map((item) => (
      <div key={item.id}>
        <Collapse content={item.content} title={item.title} />
      </div>
    ));
  };

  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />
        <div className="collapse__dropdown" style={dropdownStyles}>
          {renderCollapses()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

//Temporaire
const dropdownStyles = {
  marginTop: "100px",
  width: "100%",
};

export default About;
