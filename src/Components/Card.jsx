import React from "react";
import {
  FaArrowsAlt,
  FaLightbulb,
  FaRegHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "../Styles/Card.css";

const Card = ({ title, iconType, description }) => {
  let icon;
  switch (iconType) {
    case "arrows":
      icon = <FaArrowsAlt className="Card-Icon" />;
      break;
    case "lightbulb":
      icon = <FaLightbulb className="Card-Icon" />;
      break;
    case "handshake":
      icon = <FaRegHandshake className="Card-Icon" />;
      break;
    case "map":
      icon = <FaMapMarkedAlt className="Card-Icon" />;
      break;
    default:
      icon = null;
  }
  return (
    <div className="Card-container">
      <div className="Card-content">
        {icon && <div>{icon}</div>}
        <h3 className="Card-title">{title}</h3>
        <p className="Card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
