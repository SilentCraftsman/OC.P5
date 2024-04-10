import React from "react";
import Banner from "../components/Banner";
import imgtest from "../images/test.jpg";

function home() {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Banner texte="Bienvenue sur notre site !" image={imgtest} />
    </div>
  );
}

export default home;
