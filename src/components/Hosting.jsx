import React from "react";
//CSS empty

function Host({ name, picture }) {
  return (
    <>
      <span className="nom-proprietaire">{name}</span>
      <img className="photo-proprietaire" src={picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
