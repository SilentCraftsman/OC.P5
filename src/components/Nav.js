import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css"; // Importez le fichier CSS contenant les styles

function Nav() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        exact="true"
        className="nav__link"
        activeClassName="active">
        Accueil
      </NavLink>
      <NavLink
        to="/"
        exact="true"
        className="nav__link"
        activeClassName="active">
        À Propos
      </NavLink>
    </nav>
  );
}

export default Nav;
