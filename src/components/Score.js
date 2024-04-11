import React from "react";
import emptyStar from "../images/Stars/startRempli.png";
import fullStar from "../images/Stars/startVide.png";

function Rate({ score }) {
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-contenair">
      {notes.map((note) => (
        <img
          key={note.toString()}
          className="etoile"
          src={score >= note ? emptyStar : fullStar}
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rate;
