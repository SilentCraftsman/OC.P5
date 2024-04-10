import React from "react";
import "../styles/Banner.css"; // Importez le fichier CSS contenant les styles

function Banner({ texte }) {
  return (
    <div className="banner">
      <div className="banner__dark">Test</div>
      <span className="banner__text">{texte}</span>
    </div>
  );
}

export default Banner;
