import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import imgbanner from "../images/homeBanner.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/Saas tools/sty.scss";

function home() {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgbanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default home;
