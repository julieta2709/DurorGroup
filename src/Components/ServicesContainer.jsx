import React from "react";
import CardServices from "./CardServices";
const ServicesContainer = ({items}) => {
  return (
    <div>
      {items.map(item => 
        <div key={item.id}>
          <CardServices item={item} />
        </div>
      )}
    </div>
  );
};
export default ServicesContainer;
