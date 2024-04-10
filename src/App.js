import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import FichLogement from "./pages/fichelogement";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/logement/:id" element={<FichLogement />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
