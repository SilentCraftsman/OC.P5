import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../data.json";
import Tag from "./Tag";
import Collapse from "./Collapse";
import Carrousel from "./Caroussel";
import Score from "./Score";
import Hosting from "./Hosting";

const FicheLogementDisplay = () => {
  const { id } = useParams();

  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  const tagsLogement = ficheLogement?.tags.map((tag, index) => (
    <Tag key={index} nom={tag} />
  ));

  const equipements = ficheLogement?.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return ficheLogement ? (
    <div className="Fiche-container">
      <Carrousel slides={ficheLogement.pictures} />
      <section className="Fiche-logement">
        <div className="description-info">
          <div className="description-info__titletags">
            <div className="description-info__titletags__title">
              <span className="titre-logement">{ficheLogement.title}</span>
              <span className="endroit-logement">{ficheLogement.location}</span>
            </div>
            <div className="description-info__titletags__tags">
              {tagsLogement}
            </div>
          </div>

          <div className="description-info__proprietaire">
            <div className="description-info__proprietaire__nom-prop">
              <Hosting
                name={ficheLogement.host.name}
                picture={ficheLogement.host.picture}
              />
            </div>
            <div className="description-info__proprietaire__rate">
              <Score score={ficheLogement.rating} />
            </div>
          </div>
        </div>
      </section>
      <div className="description-centent">
        <div className="description-centent__description">
          <Collapse title="Description" content={ficheLogement.description} />
        </div>
        <div className="description-centent__equipement">
          <Collapse title="Équipements" content={<ul>{equipements}</ul>} />
        </div>
      </div>
    </div>
  ) : (
    <Navigate replace to="/404" />
  );
};

export default FicheLogementDisplay;
