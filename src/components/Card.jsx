import React from "react";
import "../styles/Card.scss"; // Importez le fichier CSS contenant les styles

function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

export default Card;
