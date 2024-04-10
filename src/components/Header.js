import React from "react";
//import logo from "../../assets/images/logo/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="Logo de Kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}

export default Header;
