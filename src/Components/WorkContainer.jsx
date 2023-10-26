import React from "react";
import CardWork from "./CardWork";

const WorkContainer = ({ items }) => {
  return (
    <div className="Work-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="CardWork-container">
            <CardWork item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default WorkContainer;
