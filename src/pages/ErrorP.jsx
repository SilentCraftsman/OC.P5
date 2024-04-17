import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../components/ErrorC";
import "../styles/ErrorP.scss"; // Importez le fichier CSS contenant les styles

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <Error />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
