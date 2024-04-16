import React, { useState } from "react";
import "../styles/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <div>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      <div className="collapse__content">{isOpen && <div>{content}</div>}</div>
    </div>
  );
};

export default Collapse;
