import { NavLink } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="error-container">
      <p className="error-container__number">404</p>
      <p className="error-container__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error-container__link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}
