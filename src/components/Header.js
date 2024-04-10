import React from "react";
import logo from "../images/Logo/LOGO.svg";
import "../styles/Header.css"; // Importez le fichier CSS contenant les styles
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="Logo de Kasa" />
      </figure>
      <Nav />
    </header>
  );
}

export default Header;
