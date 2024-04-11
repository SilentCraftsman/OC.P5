import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
