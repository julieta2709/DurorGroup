import React from "react";
import CardWork from "./CardWork";
import "../Styles/ServicesStyle.css"
const WorkContainer = ({items}) => {
  return (
    <div className="Work-container">
      {items.map(item => 
        <div key={item.id} className="CardService-container">
          <CardWork item={item} />
        </div>
      )}
    </div>
  );
};
export default WorkContainer;
