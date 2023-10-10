import React from "react";
import Icons from "./Icons";
import "../Styles/Card.css";

const CardServices = ({ servicio, estilo }) => {
  const { title, description, icon } = services;

  return (
    <div className={`Card-container ${estilo}`}>
      <div className="Card-content">
        {icon && <Icons iconType={icon} />}
        <h3 className="Card-title">{title}</h3>
        <ul className="Card-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardServices;
