import React from "react";
import CardServices from "./CardServices";
import "../Styles/ServicesStyle.css"
const ServicesContainer = ({items}) => {
  return (
    <div className="Services-container">
      {items.map(item => 
        <div key={item.id} className="CardService-container">
          <CardServices item={item} iconType={item.iconType} />
        </div>
      )}
    </div>
  );
};
export default ServicesContainer;
