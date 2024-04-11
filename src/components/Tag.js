import React from "react";
import "../styles/Tag.css"; // Importez le fichier CSS contenant les styles

function Tag({ nom }) {
  return (
    <div className="tag-container">
      <span className="tag-container__button">{nom}</span>
    </div>
  );
}

export default Tag;
