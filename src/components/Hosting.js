import React from "react";
import "../styles/Hosting.css"; // Importez le fichier CSS contenant les styles

function Host({ name, picture }) {
  return (
    <>
      <span className="nom-proprietaire">{name}</span>
      <img className="photo-proprietaire" src={picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
