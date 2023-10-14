  import React from "react";
  import Icons from "./Icons";
  import "../Styles/CardServices.css";

  const CardServices = ({item }) => {
    const icon = Icons({ iconType: item.iconType, className: "iconStyle" });
      return (
      <div className="Card-container">
        <div className="Card-content">
          <span className="Card-Icon">{icon}</span>
          <h3 className="Card-title">{item.title}</h3>
          <p className="Card-description">{item.description}</p>
        <button>Conozca más</button>
        </div>
      </div>
    );
  };

  export default CardServices;
