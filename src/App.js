import React from "react";
import "./styles/Fundamental/fundamental.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import FichLogement from "./pages/fichelogement";
import About from "./pages/About";
import ErrorP from "./pages/ErrorP";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<ErrorP />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
