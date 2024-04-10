import React from "react";
import logo from "../images/Logo/logo_footer.png";
import "../styles/Footer.css"; // Importez le fichier CSS contenant les styles

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer-logo" />
      <p className="footer-text-copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
