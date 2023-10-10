import React from "react";
import Icons from "./Icons";
import "../Styles/Card.css";

const CardServices = ({item }) => {
    return (
    <div className="Card-container">
      <div className="Card-content">
      <Icons iconType={item.iconType} />
        <h3 className="Card-title">{item.title}</h3>
        <p className="Card-description">{item.description}</p>
      </div>
    </div>
  );
};

export default CardServices;
