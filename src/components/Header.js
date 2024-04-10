import React from "react";
import logo from "../images/Logo/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="Logo de Kasa" />
      </figure>
    </header>
  );
}

export default Header;
