import React from "react";
import { Link } from "react-router-dom";
import logements from "../data.json";
import Card from "../components/Card";
import "../styles/Gallery.css"; // Importez le fichier CSS contenant les styles

const Gallery = () => {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <article key={logement.id} className="gallery__item">
          <Link to={`/logement/${logement.id}`} className="gallery__link">
            <Card image={logement.cover} title={logement.title} />
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Gallery;
