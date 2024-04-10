import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";
import imgbanner from "../images/homeBanner.png";

function home() {
  return (
    <div>
      <Header />
      <Nav />
      <h1>Page d'accueil</h1>
      <Banner texte="Bienvenue sur notre site !" image={imgbanner} />
    </div>
  );
}

export default home;
