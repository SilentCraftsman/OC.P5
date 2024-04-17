import React from "react";
import "../styles/Banner.scss"; // Importez le fichier CSS contenant les styles

function Banner({ texte, image }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className="banner__dark"></div>
      <span className="banner__text">{texte}</span>
    </div>
  );
}

export default Banner;
