import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" exact className="nav__link" activeClassName="active">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav__link" activeClassName="active">
        À Propos
      </NavLink>
    </nav>
  );
}

export default Nav;
