import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../components/ErrorC";

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
