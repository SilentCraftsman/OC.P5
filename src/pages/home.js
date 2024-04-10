import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import imgtest from "../images/test.jpg";

function home() {
  return (
    <div>
      <Header />
      <h1>Page d'accueil</h1>
      <Banner texte="Bienvenue sur notre site !" image={imgtest} />
    </div>
  );
}

export default home;
